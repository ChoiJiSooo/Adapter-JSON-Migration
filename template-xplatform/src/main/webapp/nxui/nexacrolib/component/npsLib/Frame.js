/**
*  nps Project (2024)
*  @FileName 	Frame.js 
*  @Creator 	gamsin
*  @CreateDate 	2024.08.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2024.08.08     		gamsin					최초 생성    
*******************************************************************************
*/

/*
 ===============================================================================
 == Frame과 onload 관련된 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnLoadForm                     	: 작업화면을 초기화	 
 ● gfnOpenMenu                     	: 업무화면을 오픈한다.
 ● gfnCloseMenu                    	: 해당 메뉴를 닫아준다.
 ● gfnLeftMenuToggle 				: leftMenu열고닫고해준다.
 ● gfnCallMonthCalendar				: 월달력을 오픈한다.
*/

var pForm  = nexacro.Form.prototype;


pForm.gfnLoadForm = function(obj)
{   
    // local & nexacro 브라우저 사용인 경우에만 해당
    var objApp = nexacro.getApplication();
    
	this._gfn_initComp(obj);
	
	// keydown 이벤트 추가
	obj.addEventHandler("onkeydown", this._gfn_Onkeydown, this); 
};


// Form load 시 Component 초기화 처리
pForm._gfn_initComp = function(obj)
{
    var arrComp = obj.components;
    for( var i=0; i<arrComp.length; i++ ) {
        
        // Division
        if( arrComp[i] instanceof nexacro.Div ) {
            if (this.gfnIsNull(arrComp[i].url)) {                  
                this._gfn_initComp(arrComp[i].form);
            }
        } 
		
        // Tab
        else if (arrComp[i] instanceof nexacro.Tab) {
            for( var j=0, pages=arrComp[i].tabpages.length; j<pages; j++ ) {
                // URL로 링크된 경우에는 해당 링크된 Form Onload에서 처리
                if( this.gfnIsNull(arrComp[i].tabpages[j].url) ) {
                    this._gfn_initComp(arrComp[i].tabpages[j].form);
                }
            }
        }
		
        // Division, Tab 제외
        else {
            // Grid 처리
            if( arrComp[i] instanceof nexacro.Grid ) {     
				pForm.gfnSetUserPropertiesFunction(arrComp[i]);
            }
            
            // Calendar 처리
            if (arrComp[i] instanceof nexacro.Calendar) {               
          
            }
            
            // MaskEdit 처리
            if (arrComp[i] instanceof nexacro.MaskEdit) {
          
            }
            
            // Combo 처리
            if (arrComp[i] instanceof nexacro.Combo) {

            }
            
            // Edit 처리
            if (arrComp[i] instanceof nexacro.Edit) {

            }
            
            // Spin 처리
            if (arrComp[i] instanceof nexacro.Spin) {

            }
        }
    }
	obj.resetScroll();	
};


/**
* Grid UserProperties 기능추가
* @param 
* @return 
*/
pForm.gfnSetUserPropertiesFunction = function (obj)
{

	
	
	// check box 추가
	if(obj._addcheckboxcol == "true") {
	
		oDs = obj.getBindDataset();
		oDs.addEventHandler("cancolumnchange", this._chk_cancolumnchange, this);	
		oDs.addEventHandler("oncolumnchanged", this._chk_oncolumnchanged, this);	
		obj.addEventHandler("onheadclick", this._gridonheadchkclick, this);	
		obj.insertContentsCol("body",0);
		obj.setCellProperty("head","0","displaytype", "checkboxcontrol");
		obj.setCellProperty("head","0","edittype", "checkbox");
		obj.setCellProperty("body","0","displaytype", "checkboxcontrol");
		obj.setCellProperty("body","0","edittype", "checkbox");		
		obj.setCellProperty("body","0","text", "bind:chk");		
	}
	
	// 상태바 추가
	if(obj._addstatescol == "true") {
		obj.insertContentsCol("body",0);
		obj.setCellProperty("head","0","displaytype", "normal");
		obj.setCellProperty("head","0","edittype", "none");
		obj.setCellProperty("head","0","text", "상태");			
		obj.setCellProperty("body","0","displaytype", "imagecontrol");
		obj.setCellProperty("body","0","edittype", "none");		
		obj.setCellProperty("body","0","cssclass", "expr:dataset.getRowType(currow) == 2 ? 'CellC' : (dataset.getRowType(currow) == 4 ? 'CellU' : (dataset.getRowType(currow) == 8 ? 'CellD' : ''))");
		obj.setCellProperty("body","0","textAlign", "center");
	}	
	
	// 순번 추가
	if(obj._addseqcol == "true") {
		obj.insertContentsCol("body",0);
		obj.setCellProperty("head","0","displaytype", "normal");
		obj.setCellProperty("head","0","edittype", "none");
		obj.setCellProperty("head","0","text", "No");		
		obj.setCellProperty("body","0","displaytype", "normal");
		obj.setCellProperty("body","0","edittype", "none");		
		obj.setCellProperty("body","0","expr", "currow + 1");				
		obj.setCellProperty("body","0","textAlign", "center");
	}	
	
};


/**
* @description gridonheadclick
*/
pForm._gridonheadchkclick = function(obj, e)
{
	var nChkCol = obj.getBindCellIndex("body", "chk");
	
    if (e.col == nChkCol)
    {
        if (this.chkFlag == "1")
        {
            this.fnBlockUnChk(obj);
            this.chkFlag = "0";
        }
        else
        {
            this.fnBlockChk(obj);
            this.chkFlag = "1";
        }
    }
}

/**
* check box로 rowtype 변경되는거 회피
*/
pForm._chk_cancolumnchange = function(obj,e)
{
	if(e.columnid == "chk") {
		obj.set_updatecontrol(false);
	}
};

/**
* check box로 rowtype 변경되는거 회피
*/
pForm._chk_oncolumnchanged = function(obj,e)
{
	if(e.columnid == "chk") {
		obj.set_updatecontrol(true);
	}
};



/**
 * gfnOpenMenu : 업무화면을 오픈한다.
 * @param {String} sMenuId - 메뉴 ID 또는 화면경로/명
 * @param {String} args - 화면에 넘겨줄 argument
 * @return {boolean}
 */
pForm.gfnOpenMenu = function(sMenuId, args, argsComp)
{
	var objApp = nexacro.getApplication();
	var gWorkFrameSet = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet00.Work;
	
	//frame구성 변경 
	if(objApp.mainframe.VFrameSet.separatesize != "0,70,*")
	{
		objApp.mainframe.VFrameSet.set_separatesize("0,70,*");
	}

	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.set_separatesize("40,*,0");

	/*****************************************
	 * 메뉴검색
	*****************************************/
	var objMenuDs 	= objApp.gdsMenu;
	var nRow  		= objMenuDs.findRow(CONST_MENU_ID, sMenuId);

	if(nRow < 0)
	{
		alert("해당 메뉴 ID가 존재하지 않습니다.");
		return false;
	}

	/*****************************************
	 * 화면 Open
	*****************************************/
	var objChildFrame = gWorkFrameSet[sMenuId];//해당 메뉴화면의 FrameSet이 존재하는지 확인
	//mdi 구조 전체화면을 기준으로 해준다.
	/*
	var nLength = gWorkFrameSet.frames.length;
	gWorkFrameSet.set_enableevent(false);
	for(var i = 0; i < nLength ; i++)
	{
		gWorkFrameSet.frames[i].set_enableevent(false);
		gWorkFrameSet.frames[i].form.set_enableevent(false);
		gWorkFrameSet.frames[i].set_showtitlebar(false);
		//gWorkFrameSet.frames[i].set_border("1px solid #777777");
		gWorkFrameSet.frames[i].set_border("0px none #808080");
		gWorkFrameSet.frames[i].set_openstatus("maximize");	
		gWorkFrameSet.frames[i].form.set_enableevent(true);
		gWorkFrameSet.frames[i].set_enableevent(true);
	}
	gWorkFrameSet.set_enableevent(true);
	*/
	
	//해당 메뉴가 open 되어있으면 포커스를 주고, 아니면 새로 chileframe을 생성한다.
	if(!this.gfnIsNull(objChildFrame))
	{
		//해당 메뉴 화면에 focus를 준다. - active 이벤트를 받은 화면에서 tab에 포커스를 준다.
		objChildFrame.setFocus();
		objChildFrame.set_showtitlebar(false);
		//gWorkFrameSet.frames[i].set_border("1px solid #777777");
		objChildFrame.set_border("0px none #808080");
		objChildFrame.set_openstatus("maximize");	
		//objChildFrame.form.divWork.set_left(6);//arrange에서 left를 20으로 설정한것 원상복귀
	}
	else
	{
		//최대 갯수 10개 제한
		if(gWorkFrameSet.frames.length > 9)
		{
			alert("메뉴를 10개이상 오픈할 수 없습니다.");
			return false;
		}
		
		/* Tab 추가 */
		objApp.mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.form.fnOpenTabMenu(sMenuId, objMenuDs.getColumn(nRow, CONST_MENU_NM) );	
	
	
		//선택한 메뉴의 childFrame을 workFrameset에 addchild 한다.
		objChildFrame = new ChildFrame();
		objChildFrame.init(sMenuId, 0,0,1000,622, null,null,"frame::Work.xfdl");
		objChildFrame.set_showtitlebar(false);
		objChildFrame.set_resizable(true);
		objChildFrame.set_titletext(objMenuDs.getColumn(nRow, CONST_MENU_NM));
		
		objChildFrame.set_showcascadetitletext(false);
		objChildFrame.set_openstatus("maximize");

		//화면에 넘겨줄 인자값을 정의한다.
		objChildFrame.arguments = [];
		objChildFrame.arguments["MENU_ID"]  = sMenuId;
		objChildFrame.arguments["MENU_NM"]  = objMenuDs.getColumn(nRow, CONST_MENU_NM);
		objChildFrame.arguments["MENU_URL"] = objMenuDs.getColumn(nRow, CONST_MENU_URL);
		objChildFrame.arguments["FORM_ARGS"] = args;
		objChildFrame.arguments["FORM_ARGS_COMP"] = argsComp;
		objChildFrame.arguments["MENU_ROW"] = nRow;

		gWorkFrameSet.addChild(sMenuId,objChildFrame);
		objChildFrame.show();

		//해당 메뉴 화면에 focus를 준다.
		objChildFrame.setFocus();
	}
	
	
	/**********
	**최근 열어본 메뉴에 추가
	***********/
	var objRecentDs = nexacro.getApplication().gdsRecent;
	var dupleRow = objRecentDs.findRow(CONST_MENU_ID, sMenuId);
	
	//중복은 삭제후 재 추가
	if( dupleRow > -1 )
	{
		objRecentDs.deleteRow(dupleRow);
	}
	objRecentDs.insertRow(0);
	objRecentDs.copyRow(0,objMenuDs,nRow);

	if(objRecentDs.rowcount > 4)
	{
		objRecentDs.deleteRow(5);
	}

	nexacro.setPrivateProfile("gdsRecent", objRecentDs.saveXML());
	
	/*****************************************
		* 메뉴열어본 이력 남기기 - 자주 열어본 화면
	*****************************************/
	//디비에 메뉴 이력남기기
	return true;
}



/**
 * gfnCloseMenu : 해당 메뉴를 닫아준다.
 * @param {string} sMenuId : 닫으려는 화면 MENU_ID
 * @return : N/A
 * @example :
 */
pForm.gfnCloseMenu= function(sMenuId)
{	
	var objApp = nexacro.getApplication();
	var gWorkFrameSet = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet00.Work;//열린 업무화면 arr
	
	//gfnCloseMenu가 중복 호출 되었을 때 return
	if(!gWorkFrameSet[sMenuId]) return;

	//화면(WorkFrame)을 삭제한다.
	var objChild = gWorkFrameSet.removeChild(sMenuId);
	objChild.destroy();
	objChild = null;
	
	//활성화 된 화면이 닫혔을 경우 다른 화면에 focus를 준다.
	if(this.gfnIsNull(gWorkFrameSet.frames[sMenuId]))
	{
		if( gWorkFrameSet.frames.length > 0 )
		{
			gWorkFrameSet.frames[0].setFocus();
			//gWorkFrameSet.getActiveFrame().set_openstatus("maximize");	//포커스 한번 잃으면서 깜빡임
		}
	}

	/*탭(TabFrame) 버튼 위치 재정렬*/
	var btnNm = "div" + sMenuId;//버튼 삭제하기 div + menuId
	objApp.mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.form.divButtonList.form.removeChild(btnNm);
	objApp.mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.form.fnRearrange();
	
	//모든 화면이 닫힌경우에 메인 화면으로 이동한다.
	if( gWorkFrameSet.length == 0 )
	{
		//objApp.mainframe.VFrameSet.set_separatesize("*, 0, 0");//메인, 탑, 업무
	}
}



/**
 * gfnLeftMenuToggle : leftMenu열고닫고해준다.
 * @param {boolean} bValue가 :  true면 open,  false면  close , null 또는 undefined 이면 토글
 * @return : N/A
 * @example :
 * @description LeftMenu를 열고 닫아준다.
 */
pForm.gfnLeftMenuToggle = function(bValue)
{
	var hFrameset = nexacro.getApplication().mainframe.VFrameSet.HFrameSet;
	var LeftForm = hFrameset.Left.form;
	var ActiveFrame = hFrameset.VFrameSet00.Work.getActiveFrame();
	
	if(this.gfnIsNull(bValue))
	{
		if(hFrameset.separatesize == "14,*")//닫힌경우
		{
			bValue =  true;
		}
		else
		{
			bValue =  false;
		}
	}
	
	//workframe 이벤트 비활성화 ( onsize이벤트 )
	if(ActiveFrame) ActiveFrame.form.set_enableevent(false);//열린 화면이 없는 경우 ..
	//메뉴 열고닫기
	var btnMenuToggle = LeftForm.btnMenuToggle;
	if(bValue)
	{
		btnMenuToggle.set_cssclass("btn_WF_menuClose");
		hFrameset.set_separatesize("264,*");
	}
	else
	{
		btnMenuToggle.set_cssclass("btn_WF_menuOpen");
		hFrameset.set_separatesize("14,*");
	}	
	if(ActiveFrame) ActiveFrame.form.set_enableevent(true);
}




/**
 * @class 월달력 호출 <br>
 * @param {Object} obj - Calendar 또는 Grid 객체
 * @return N/A
 */
pForm.gfnCallMonthCalendar = function(obj)
{   
    var width = 200;
    var height = 160;
    var pdvNm = "_pdv_MonthCalendar";
    var objPdv = null;
    
    if (this.isValidObject(pdvNm)) {
        objPdv = this.components[pdvNm];
        objPdv["user_comp"] = obj;
    } else {
        objPdv = new PopupDiv();  
        objPdv.init(pdvNm, 0, 0, width, height, null, null);
        objPdv["user_comp"] = obj;
        objPdv.set_url("comm::commCalendarMonth.xfdl");

                
        objPdv.set_formscrollbartype("none none");
        objPdv.set_formscrolltype("none");
        
        objPdv.addEventHandler("onpopup", this._gfn_popupDiv_onpopup, this);        
        
        this.addChild(pdvNm, objPdv);
        objPdv.show();
    }
    
    var objFnc = objPdv.form.lookup(obj.user_callback);
    if (typeof(objFnc) == "function") {
        objPdv["user_callback"] = obj.user_callback;
    }
    
    var left = 0;
    var top = obj.getOffsetHeight();
    
    if (obj instanceof Grid) { // Grid
        var bindDs = obj.getBindDataset();
        var row = bindDs.rowposition;
        var cell = obj.getCellPos();
        var objRect = obj.getCellRect(row, cell);
        var column = obj.getCellProperty("body", cell, "text").replace("bind:", "");
        
        objPdv["user_bindDs"] = bindDs;
        objPdv["user_column"] = column;
        objPdv["user_value"] = obj.getCellValue(row, cell);
        
        left = objRect.left;
        top = objRect.bottom;
    }
    
    if (this.gfnIsNull(obj.user_callback)) {
        objPdv.trackPopupByComponent(obj, left, top, width, height, "", false);
    } else {
        objPdv.trackPopupByComponent(obj, left, top, width, height, obj.user_callback, false);
    }
};



// 디버그 팝업 호출
pForm._gfn_Onkeydown = function(obj, e)
{
    //var objApp = nexacro.getApplication();
    
    // Alt + Ctrl + Q
    if( e.ctrlkey && e.altkey && e.keycode == 81 ) {
        e.stopPropagation();
    
        
        var left    = 0;
        var top     = 0;
        var width   = 1080 + 10 + 10 + 2; // 좌/우 여백 : 10, border : 2
        var height  = 703 + 35; // titlebar : 35
        var arg     = {};   
        
        var objChild = new nexacro.ChildFrame;
        objChild.init("DebugPop", left, top, width, height, null, null, "comm::commDebugPop.xfdl");
        
        objChild.arguments = [];
        objChild.set_titletext("디버그 팝업");
        objChild.set_dragmovetype("all");
        objChild.set_showcascadetitletext(false);
        objChild.set_showtitlebar(true);
        objChild.set_showstatusbar(false);
        objChild.set_showtitleicon(false);
        objChild.set_autosize(false);   
        objChild.set_resizable(false);
        objChild.set_openalign("center middle");
        objChild.set_layered(false);
        objChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
        objChild.set_titlebarheight(35); // titlebar 높이
        objChild.popupType          = "modal";
        objChild.arguments["url"]   = "comm::commDebugPop.xfdl";    
        objChild.arguments["type"]  = "system";     
    
        var objParentFrame = this.getOwnerFrame();
        objChild.showModal(objParentFrame, arg, this, "");
    } 

};



