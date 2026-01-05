package egovframework.rte.cmmn.ria.support;

import java.lang.reflect.Method;

import javax.servlet.http.HttpServletRequest;

import com.inswave.websqaure.uix.HttpWebsquareConvRequest;
import com.tobesoft.platform.data.Dataset;
import com.tobesoft.platform.data.DatasetList;

/**
 * X-Platform MiAdaptor 구현 클래스
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

public class XpfAdaptorVoImpl extends XpfAdaptor {

    public Object converte4In(HttpWebsquareConvRequest httpPlatformRequest, HttpServletRequest request) {

        Object vo = null;

        try
        {
            DatasetList list = httpPlatformRequest.getDatasetList();
            Dataset ds_voInfo = list.get("ds_voInfo");

            /*
             * "ds_voInfo" DataSet 의 내용 확인 예.
             *  for(int i=0; i < ds_voInfo.getRowCount(); i++) {
             *  	for(int j=0; j < ds_voInfo.getColumnCount(); j++) {
             *  		System.out.print(ds_voInfo.getColumn(j).getName());
             *  		System.out.println(" : " + ds_voInfo.getString(i, j));
             *  	}
             *  }
             *
             */

            /*
             * "voClass" 의 VO 객체를 얻어 data 를 주입한다.
             */
            String voClass = ds_voInfo.getColumnAsString(0,"voClass");

            Dataset ds = list.get("ds_input");

            Class<?> cls = Class.forName(voClass);
            vo = cls.newInstance();

            for ( int i = 0; i < ds.getColumnCount();  i ++ )
            {
                String memberName = ds.getColumnId(i);
                String strparam = ds.getColumnAsString(0, i);

                String methodeName = "set" + memberName.substring(0, 1).toUpperCase() + memberName.substring(1, memberName.length());
                Method m = cls.getMethod(methodeName, new String().getClass());
                m.invoke(vo, strparam);
            }

            return vo;

        } catch ( Exception e)
        {
            e.printStackTrace();
        }

        return vo;
    }

    public Class getModelName() {

        return (new Object()).getClass();
    }
}
