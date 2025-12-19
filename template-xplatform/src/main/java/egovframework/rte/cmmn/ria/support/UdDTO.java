package egovframework.rte.cmmn.ria.support;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tobesoft.xplatform.data.DataSet;
import com.tobesoft.xplatform.data.DataSetList;
import com.tobesoft.xplatform.data.VariableList;

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
			variableList.put(vList.get(i).getName(), vList.get(i).getString());
		}

	}
	public void setDataSetListToMap(DataSetList dataSetList) {
		
		List list = new ArrayList<Object>();
		
		java.util.Map<String, String> hm = new HashMap<String, String>();
        
        DataSet ds_input = dataSetList.get("ds_input");
        // insert, update처리
        for ( int i = 0; i < ds_input.getRowCount(); i ++ )
        {
            if ( DataSet.ROW_TYPE_UPDATED == ds_input.getRowType(i) )
            {
                hm = new HashMap<String, String>();
                for ( int j = 0; j < ds_input.getColumnCount(); j ++ )
                {
                    hm.put(ds_input.getColumn(j).getName(), ds_input.getString(i, j));
                }
                
            } else if ( DataSet.ROW_TYPE_INSERTED == ds_input.getRowType(i) )
            {
                hm = new HashMap<String, String>();
                for ( int j = 0; j < ds_input.getColumnCount(); j ++ )
                {
                    hm.put(ds_input.getColumn(j).getName(), ds_input.getString(i, j));
                }
            }
            list.add(hm);
        }
		this.dataSetList.put("ds_input", hm);

	}

}
