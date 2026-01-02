package egovframework.rte.cmmn.ria.support;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.servlet.view.AbstractView;

import com.inswave.websqaure.uix.HttpWebsquareConvRequest;
import com.inswave.websqaure.uix.HttpWebsquareConvResponse;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.PlatformType;

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

public class XPlatformViewByMap extends AbstractView {

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

        List list = (List) model.get("MiDTO");
        DataSet dataset = new DataSet("ds_output");

        if (list != null) {

            Iterator<Map> iterator = list.iterator();
            boolean isFirst = true;

            while (iterator.hasNext()) {

                // Header 세팅
                Map<String, Object> record = iterator.next();

                Iterator<String> si = record.keySet().iterator();
                if ( isFirst )
                {

                    while (si.hasNext()) {
                        String key = si.next();
                        dataset.addColumn(key, DataTypes.STRING, (short) 255);
                    }
                    isFirst = false;
                }

                // Value 세팅
                int row = dataset.newRow();
                Iterator<String> si2 = record.keySet().iterator();
                while (si2.hasNext()) {
                    String key = si2.next();
                    String value = (String) record.get(key);

                    dataset.set(row, key, value);
                }
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
