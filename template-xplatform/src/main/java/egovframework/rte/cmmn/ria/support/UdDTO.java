package egovframework.rte.cmmn.ria.support;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tobesoft.platform.data.Dataset;
import com.tobesoft.platform.data.DatasetList;
import com.tobesoft.platform.data.VariableList;

/**
 * X-Platform UdDTO 클래스
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

public class UdDTO implements Serializable {

    private Map variableList;
    private Map dataSetList;
    private Map Objects;

    public void setVariableList(Map variableList) {
        this.variableList = variableList;

    }

    public void setDataSetList(Map dataSetList) {
        //this.dataSetList = dataSetList;

    }

    public Map getVariableList() {
        return variableList;
    }

    public Map getDataSetList() {
        return dataSetList;
    }

    public void setObjects(Map objects) {
        Objects = objects;
    }

    public Map getObjects() {
        return Objects;
    }

    public void setVariableListToMap(VariableList vList) {

        variableList = new HashMap<String, String>();

        for ( int i = 0; i < vList.size(); i ++ ) {
            variableList.put(vList.get(i).getId(), vList.get(i).getValue().getString());
        }

    }
    public void setDataSetListToMap(DatasetList dataSetList) {

        List list = new ArrayList<Object>();

        java.util.Map<String, String> hm = new HashMap<String, String>();

        Dataset ds_input = dataSetList.get("ds_input");
        // insert, update처리
        for ( int i = 0; i < ds_input.getRowCount(); i ++ )
        {
            if ( Dataset.ROWTYPE_UPDATE == ds_input.getRowType(i) )
            {
                hm = new HashMap<String, String>();
                for ( int j = 0; j < ds_input.getColumnCount(); j ++ )
                {
                    hm.put(ds_input.getColumnId(j), ds_input.getColumnAsString(i, j));
                }

            } else if ( Dataset.ROWTYPE_INSERT == ds_input.getRowType(i) )
            {
                hm = new HashMap<String, String>();
                for ( int j = 0; j < ds_input.getColumnCount(); j ++ )
                {
                    hm.put(ds_input.getColumnId(j), ds_input.getColumnAsString(i, j));
                }
            }
            list.add(hm);
        }
        this.dataSetList.put("ds_input", hm);

    }

}
