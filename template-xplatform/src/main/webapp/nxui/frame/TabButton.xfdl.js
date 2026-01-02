(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TabButton");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnTab","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴명");
            obj.set_cssclass("btn_MDI_TabFix");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("staClose",null,"0","28",null,"5","3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_TabClose");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,40,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TabButton.xfdl", function() {
        /**
        *  nexacro nps
        *  @MenuPath    Frame > TabButton
        *  @FileName  Tab.xfdl
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
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj, e)
        {
        	var tabNm = String(this.parent.titletext);

        	if(tabNm.length > 13)
        	{
        		tabNm = tabNm.substr(0,13) + "...";
        	}

        	this.btnTab.set_text(tabNm);
        	this.btnTab.set_cssclass("btn_MDI_TabFix");
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description 탭을 선택하면 해당 메뉴를 열어준다.
        */
        this.btnTab_onclick = function(obj, e)
        {
        	//WorkFrame선택
        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.form.fnInitTab();
        	this.btnTab.set_cssclass("btn_MDI_TabFix");

        	var menuId = String(this.parent.name).replace("div", "");

        	//화면이 있을경우 - 예외처리(frame있는데 tab버튼이 없어지는 경우 대비)
        	this.gfnOpenMenu(menuId);
        }


        /**
         * @description 탭을 선택하면 해당 메뉴를 열어준다.
        */
        this.staClose_onclick = function(obj, e)
        {
        	var sMenuId = String(this.parent.name).replace("div","");
        	this.gfnCloseMenu(sMenuId);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnTab.addEventHandler("onclick",this.btnTab_onclick,this);
            this.staClose.addEventHandler("onclick",this.staClose_onclick,this);
        };
        this.loadIncludeScript("TabButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
