package egovframework.rte.cmmn.ria.support;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.servlet.view.AbstractView;

import com.inswave.websqaure.uix.HttpWebsquareConvRequest;
import com.inswave.websqaure.uix.HttpWebsquareConvResponse;
import com.tobesoft.xplatform.data.DataSet;
import com.tobesoft.xplatform.data.DataSetList;
import com.tobesoft.xplatform.data.DataTypes;
import com.tobesoft.xplatform.data.PlatformData;
import com.tobesoft.xplatform.data.VariableList;
import com.tobesoft.xplatform.tx.PlatformType;

/**
 * X-Platform View 구현 클래스
 * @author 개발팀 홍길동
 * @since 2010.01.01
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2010.01.01  홍길동          최초 생성
 *
 * </pre>
 */

public class XPlatformViewByVO extends AbstractView {

    protected Log log = LogFactory.getLog(this.getClass());


    @SuppressWarnings("unchecked")
    @Override
    protected void renderMergedOutputModel(Map model, HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        VariableList miVariableList = new VariableList();
        DataSetList miDatasetList = new DataSetList();

        PlatformData platformData = new PlatformData();

        /*
         * 결과 코드와 메세지를 셋팅한다.
         */
        miVariableList.add("ErrorCode", (String)model.get("MiResultCode"));
        miVariableList.add("ErrorMsg", (String)model.get("MiResultMsg"));

        Object vo = model.get("MiDTO");

        /*
         * 컨트롤러에서 mav.addObject("MiDTO", ....); 형태로 추가된 객체로 ds_output 데이타 셋을 생성한다.
         */
        if ( vo != null )
        {
            Class cls = vo.getClass();
            Field[] field = cls.getDeclaredFields();

            DataSet dataset = new DataSet("ds_output");

            for ( int i = 0; i < field.length; i ++ )
            {
                if ( !"serialVersionUID".equals(field[i].getName()) )
                    dataset.addColumn(field[i].getName(), DataTypes.STRING, (short) 255);
            }

            int row = dataset.newRow();
            for ( int i = 0; i < field.length; i ++ )
            {
                if ( !"serialVersionUID".equals(field[i].getName()) )
                {
                    String memberName = field[i].getName();
                    String methodeName = "get" + memberName.substring(0, 1).toUpperCase() + memberName.substring(1, memberName.length());
                    Method m = cls.getMethod(methodeName, null);
                    String ret = (String)m.invoke(vo, null);

                    dataset.set(row, memberName, ret);
                }
            }

            /*
             * client로 반환되는 dataset 의 데이터 확인 예
             *
             * for(int i=0; i < dataset.getRowCount(); i++) {
             * 		for(int j=0; j < dataset.getColumnCount(); j++) {
             * 			System.out.print(ds_voInfo.getColumn(j).getName());
             * 			System.out.println(" : " + ds_voInfo.getString(i, j));
             * 		}
             * }
             *
             */

            miDatasetList.add(dataset);
        }

        try {

            platformData.setDataSetList(miDatasetList);
            platformData.setVariableList(miVariableList);

            HttpWebsquareConvRequest wsReq = new HttpWebsquareConvRequest(request);
            HttpWebsquareConvResponse wsRes = new HttpWebsquareConvResponse(response, wsReq);
            wsRes.setCharset(PlatformType.DEFAULT_CHAR_SET);
            wsRes.setData(platformData);
            wsRes.sendData();

        } catch (Exception ex) {
            if (log.isErrorEnabled()) {
                log.error("Exception occurred while writing xml to MiPlatform Stream.", ex);
            }

            throw new Exception();
        }

    }
}
