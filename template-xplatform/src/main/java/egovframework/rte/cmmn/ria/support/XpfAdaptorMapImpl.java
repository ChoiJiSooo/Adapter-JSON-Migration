package egovframework.rte.cmmn.ria.support;

import javax.servlet.http.HttpServletRequest;

import com.inswave.websqaure.uix.HttpWebsquareConvRequest;
import com.tobesoft.xplatform.data.PlatformData;

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

public class XpfAdaptorMapImpl extends XpfAdaptor {

    public Object converte4In(HttpWebsquareConvRequest httpPlatformRequest, HttpServletRequest request) {

        /*
         * VariableList 를 맵형식(UdDTO)으로 반환함.
         */
        UdDTO dto = new UdDTO();

        PlatformData pfd = httpPlatformRequest.getData();
        dto.setVariableListToMap(pfd.getVariableList());

        return dto;
    }

    public Class getModelName() {

        return (new UdDTO()).getClass();
    }
}
