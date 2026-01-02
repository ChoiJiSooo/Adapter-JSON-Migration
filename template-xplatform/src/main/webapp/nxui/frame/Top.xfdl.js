(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,70);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"INT\" size=\"22\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MOBILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top","0","0",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_TF_TopBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","5","150",null,null,"10",null,null,null,null,this.div_top.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_Logo");
            obj.set_cursor("pointer");
            this.div_top.addChild(obj.name, obj);

            obj = new Menu("mnu_top","160","0",null,null,"310","0",null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTopMenu");
            obj.set_fittocontents("width");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("Button00",null,"18","40","30","0",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Setting");
            obj.set_text("");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("Static01",null,"25","1","18","Button00:4",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_background("#eef0f2");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"18","20","30","Static01:10",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TF_Logout02");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"18","99","30","90",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_User");
            obj.set_rtl("false");
            obj.set_text("SK하이텍 홍길동");
            obj.set_fittocontents("width");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("Static02",null,"23","49","21","Button00_00:5",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("6");
            obj.set_text("구성원");
            obj.set_cssclass("sta_TF_UserInfo");
            obj.set_fittocontents("width");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"2","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#ff5e14");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","105","150",null,null,"-90",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_EPAS");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","170","150",null,null,"-155",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_NPS");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_top.form
            obj = new Layout("default","",0,0,this.div_top.form,function(p){});
            this.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,70,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Top.xfdl", function() {
        /**
        *  nexacro nps
        *  @MenuPath    Frame > Top
        *  @FileName  Top.xfdl
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

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description MegaMenu를 생성한다.
        */
        this.form_onload = function(obj,e)
        {
        	this.div_top.form.mnu_top.set_captioncolumn(CONST_MENU_NM);
        	this.div_top.form.mnu_top.set_idcolumn(CONST_MENU_ID);
        	this.div_top.form.mnu_top.set_levelcolumn(CONST_MENU_LVL);

        	nexacro.getApplication().gdsMenu.set_filterstr(CONST_MENU_LVL + " == 0");
        	this.dsTopMenu.copyData(nexacro.getApplication().gdsMenu,true);
        	nexacro.getApplication().gdsMenu.set_filterstr(null);
        	//nexacro.getApplication().mainframe.VFrameSet.HFrameSet.Left.form.fn_setMenuDisplay(this.dsTopMenu.getColumn(0, CONST_MENU_LVL));
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/



        /**
        * fnCommClick : 공통클릭 함수
        * @return : N/A
        * @example :
        */


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description 메인화면을 보여준다.
        */
        this.home_onclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.set_separatesize("34,0,*");
        };

        this.div_top_btn_sysConfig_onclick = function(obj,e)
        {

        };

        this.div_top_btn_sysConfig2_onclick = function(obj,e)
        {

        };

        this.div_top_mnu_top_onmenuclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.set_separatesize("264,*");
        	//nexacro.getApplication().mainframe.VFrameSet.HFrameSet.Left.form.fn_setMenuDisplay(e.id);

        };

        this.div_top_btn_logout_onclick = function(obj,e)
        {
        	r = this.confirm("시스템을 종료하시겠습니까?");
        	if(r) {
        		nexacro.getApplication().exit();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_top.form.Static00.addEventHandler("onclick",this.home_onclick,this);
            this.div_top.form.mnu_top.addEventHandler("onmenuclick",this.div_top_mnu_top_onmenuclick,this);
            this.div_top.form.btn_logout.addEventHandler("onclick",this.div_top_btn_logout_onclick,this);
            this.div_top.form.Button00_00.addEventHandler("onclick",this.div_top_Button00_00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.home_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.home_onclick,this);
        };
        this.loadIncludeScript("Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
