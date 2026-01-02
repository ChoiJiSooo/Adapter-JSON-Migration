(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","23","55",null,null,"0","15",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_async("true");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnFavorite","13","11","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Btitle");
            obj.set_defaultbutton("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","btnFavorite:-5","12",null,"30","17",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuTitle","0","0","500","30",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_menuTitle");
            obj.set_text("");
            this.divTitle.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work.xfdl", function() {
        /**
        *  nexacro nps
        *  @MenuPath    Frame > Work
        *  @FileName  Work.xfdl
        *  @Creator  presales
        *  @CreateDate  2019.09.23
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2019.09.23      presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.menuRow = -1; //열린화면의 MENU Row

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description divWork에 해당화면을 Open해준다.
        */
        this.form_onload = function(obj, e)
        {
        	this.divWork.set_url(this.getOwnerFrame().arguments["MENU_URL"]);
        	this.divTitle.form.staMenuTitle.set_text(this.getOwnerFrame().arguments["MENU_NM"]);
        	//즐겨찾기 표시
        	this.menuRow = nexacro.getApplication().gdsFavorite.findRow("MENU_ID",this.getOwnerFrame().arguments["MENU_ID"]);

        	if(this.menuRow > -1)
        	{
        		this.btnFavorite.set_cssclass("btn_WF_BtitleOn");
        	}
        	else
        	{
        		this.btnFavorite.set_cssclass("btn_WF_Btitle");
        	}
        	this.resetScroll();

        };


        /**
         * @description work화면이 종료될때 MDI탭 버튼도 삭제해준다.
        */
        this.Work_onclose = function(obj,e)
        {
        	this.gfnCloseMenu(obj.getOwnerFrame().name);
        }

        /**
         * @description 화면이 활성화되면 MDI탭  버튼에 포커스를 준다.
        */
        this.Work_onactivate = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.form.fnSetTabFocus("div" + this.getOwnerFrame().arguments["MENU_ID"]);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 즐겨찾기 on/off
        */
        this.divTitle_btnFavorite_onclick = function(obj,e)
        {
        	switch(obj.cssclass)
        	{
        		case "btn_WF_BtitleOn"://즐겨찾기 제거
        			this.btnFavorite.set_cssclass("btn_WF_Btitle");
        			nexacro.getApplication().gdsFavorite.deleteRow(this.menuRow);
        			break;

        		case "btn_WF_Btitle"://즐겨찾기 추가
        			this.btnFavorite.set_cssclass("btn_WF_BtitleOn");
        			this.menuRow = nexacro.getApplication().gdsFavorite.addRow();
        			nexacro.getApplication().gdsFavorite.copyRow(this.menuRow, nexacro.getApplication().gdsMenu,this.getOwnerFrame().arguments["MENU_ROW"]);
        			break;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.Work_onactivate,this);
            this.addEventHandler("onclose",this.Work_onclose,this);
            this.addEventHandler("ontimer",this.Work_ontimer,this);
            this.divWork.addEventHandler("onvscroll",this.divWork_onvscroll,this);
            this.btnFavorite.addEventHandler("onclick",this.divTitle_btnFavorite_onclick,this);
            this.divTitle.form.staMenuTitle.addEventHandler("onclick",this.divTitle_staMenuTitle_onclick,this);
        };
        this.loadIncludeScript("Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
