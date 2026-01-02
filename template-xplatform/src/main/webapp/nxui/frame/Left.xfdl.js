(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Left");
            this.set_titletext("New Form");
            this.set_background("#343a40");
            if (Form == this.constructor)
            {
                this._setFormPosition(264,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00",null,"0","15","40","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu","0","0",null,"45","125",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_AllMenu_S");
            obj.set_tabstop("false");
            obj.set_text("MENU");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnFavorite",null,"0","125","45","14",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_LF_AllMenu");
            obj.set_text("MY MENU");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","45",null,null,"14","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("autoindicator autoindicator");
            obj.set_formscrolltype("both");
            obj.set_cssclass("div_LF_MenuBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuTree","0","5",null,null,"0","0",null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("false");
            obj.set_cssclass("grd_LF_TreeGrd");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"227\"/></Columns><Rows><Row size=\"36\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" displaytype=\"treeitemcontrol\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.divLeft.addChild(obj.name, obj);

            obj = new Div("divFavorite","330","45",null,null,"-330","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_cssclass("div_LF_MenuBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFavorite","0","5",null,null,"0","222",null,null,null,null,this.divFavorite.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_TreeGrd");
            obj.set_autofittype("col");
            obj.set_binddataset("gdsFavorite");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"268\"/></Columns><Rows><Row size=\"36\"/></Rows><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.divFavorite.addChild(obj.name, obj);

            obj = new Static("sta_titleUp","15",null,"134","17",null,"174",null,null,null,null,this.divFavorite.form);
            obj.set_taborder("2");
            obj.set_text("최근 접속한 메뉴");
            obj.set_cssclass("sta_LF_MenuTitle");
            obj.set_fittocontents("width");
            this.divFavorite.addChild(obj.name, obj);

            obj = new Grid("grdRecent","0",null,null,"161","0","0",null,null,null,null,this.divFavorite.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_LF_TreeGrd");
            obj.set_autofittype("col");
            obj.set_selectscrollmode("select");
            obj.set_tabstop("false");
            obj.set_binddataset("gdsRecent");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"270\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.divFavorite.addChild(obj.name, obj);

            obj = new Button("btnAllClose","692","53","128","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("모두닫기");
            obj.set_cssclass("btn_LF_menuClose");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu00","330","0","125","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_AllMenu");
            obj.set_tabstop("false");
            obj.set_text("MENU");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFavorite00",null,"0","125","45","-330",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_LF_AllMenu");
            obj.set_text("MY MENU");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuToggle",null,"0","14","60","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_menuClose");
            obj.set_text("");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"60","14","60","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_menuOpen");
            obj.set_visible("false");
            obj.set_borderRadius("0px 10px 10px 0px");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFavorite.form
            obj = new Layout("default","",0,0,this.divFavorite.form,function(p){});
            this.divFavorite.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",264,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Left.xfdl", function() {
        /**
        *  nexacro nps
        *  @MenuPath    Frame > Left
        *  @FileName  Left.xfdl
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
         * @description 즐겨찾기 div 위치이동 및 아코디언 메뉴 동적생성
        */
        this.Left_onload = function(obj,e)
        {
        	this.divLeft.form.grdMenuTree.setCellProperty("body", 0, "text", "bind:" +  CONST_MENU_NM);
        	this.divLeft.form.grdMenuTree.setCellProperty("body", 0, "treelevel", "bind:" + CONST_MENU_LVL);

        	this.divFavorite.form.grdFavorite.setCellProperty("body", 0, "text", "bind:" +  CONST_MENU_NM);
        	this.divFavorite.form.grdRecent.setCellProperty("body", 0, "text", "bind:" +  CONST_MENU_NM);

        	this.divFavorite.set_left(0);
        	this.divFavorite.set_right(14);
        	var objApp = nexacro.getApplication();
        	var objMenuDs 	= objApp.gdsMenu;

        	objMenuDs.filter(CONST_MENU_LVL + " != '0'");

        	this.dsMenu.copyData(objMenuDs, true);
        	objMenuDs.filter("");
        };


        this.fn_setMenuDisplay = function (sRootMenuId)
        {
        	this.btnMenu.set_cssclass("btn_LF_AllMenu_S");
        	this.btnFavorite.set_cssclass("btn_LF_AllMenu");
        	this.divLeft.set_visible(true);
        	this.divFavorite.set_visible(false);
        	this.dsMenu.set_filterstr(CONST_ROOT_MENU_ID + " == '" + sRootMenuId + "' && " + CONST_MENU_LVL + " != 0");
        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnDrawAccordionMenu : gdsMenu를 이용해서 아코디언메뉴를 동적으로 생성한다.
        * @param {String}  menuId	- 메뉴 ID
        * @param {String}  menuNm	- 메뉴명
        * @return : N/A
        * @example :
        */
        this.fnDrawAccordionMenu = function()
        {
        	var objDs = this.dsMenu;
        	var cnt = this.dsMenu.rowcount;
        	var menuId;
        	var preDivId;

        	var objMenuDiv;
        	var objMenuButton;
        	var objAni;

        	var sDivId;
        	var sBtnId;
        	var sAniId;

        	var nDivTop = 0;
        	var nButtonTop = 0;

        	for(var i = 0 ; i < cnt ; i++)
        	{
        		menuId =  objDs.getColumn(i, CONST_MENU_ID);
        		//Root Menu
        		if(objDs.getColumn(i, CONST_MENU_LVL) == '0')
        		{
        			/***********************************************
        			*** 0레벨인 경우에 Div를 생성하여 group을 만들어준다.
        			************************************************/
        			sDivId = "div" + menuId;
        			objMenuDiv = new Div();
        			//앞에 있는 div에 상대좌표를 걸어준다.
        			//objMenuDiv.init(sDivId, 0, preDivId+":0", null, this.fvTopDivHeight, 0);
        			objMenuDiv.init(sDivId, 0, nDivTop, null, this.fvTopDivHeight, 0);
        			objMenuDiv.set_formscrolltype("none");
        			objMenuDiv.set_formscrollbartype("none");

        			objMenuDiv.curtime = 0;//애니메이션에서 사용
        			objMenuDiv.startValue = 0;//애니메이션에서사용
        			objMenuDiv.pageHeight = this.fvTopDivHeight;//애니메이션에서사용

        			//화면에 추가하고 보여준다.
        			this.divLeft.addChild(sDivId, objMenuDiv);
        			objMenuDiv.show();

        			if(preDivId)
        			{
        				objMenuDiv.preDivId = preDivId;
        				this.divLeft.form.components[preDivId].nextDivId = sDivId;
        			}

        			/***********************************************
        			*** top menu 버튼 생성
        			************************************************/
        			sBtnId = "btn" + menuId;

        			objMenuButton = new Button;
        			objMenuButton.init(sBtnId, 0, 0, null, this.fvTopDivHeight, 0);
        			objMenuButton.set_text(objDs.getColumn(i, CONST_MENU_NM));
        			objMenuButton.set_cssclass("btn_LF_menuD1");

        			//화면에 추가하고 보여준다.
        			objMenuDiv.addChild(sBtnId, objMenuButton);
        			objMenuButton.show();

        			//버튼 클릭이벤트 - 하위메뉴 열어주기
        			objMenuButton.addEventHandler("onclick", this.fnTopMenuOnclick, this);

        			/***********************************************
        			*** 다음 컴포넌트 준비
        			************************************************/
        			//다음 위치 지정
        			nDivTop = nDivTop + this.fvTopDivHeight;

        			//버튼 위치 초기
        			nButtonTop = this.fvTopDivHeight;

        			//바로 앞 div ID 저장
        			preDivId = sDivId;
        		}
        		//Leaf Menu
        		else
        		{
        			//부모가 될 div를 선정해준다.
        			objMenuDiv = this.divLeft.form.components["div" + objDs.getColumn(i, CONST_PARENT_MENU_ID)];
        			sBtnId = "btn" + objDs.getColumn(i, CONST_MENU_ID);

        			objMenuButton = new Button;
        			objMenuButton.init(sBtnId, 0, nButtonTop, null, this.fvButtonHeight, 0);
        			objMenuButton.set_text(objDs.getColumn(i, CONST_MENU_NM));
        			objMenuButton.set_cssclass("btn_LF_menuD2");

        			//화면에 추가하고 보여준다.
        			objMenuDiv.addChild(sBtnId, objMenuButton);
        			objMenuButton.show();

        			//이벤트 추가
        			objMenuButton.addEventHandler("onclick", this.fnMenuOnclick, this);

        			//다음 버튼 위치 지정
        			nButtonTop = nButtonTop + this.fvButtonHeight;
        		}
        	}
        }


        /**
        * fnDrawAccordionMenu : gdsMenu를 이용해서 아코디언메뉴를 동적으로 생성한다.
        * @param {String}  menuId	- 메뉴 ID
        * @param {String}  menuNm	- 메뉴명
        * @return : N/A
        * @example :
        */
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description 메뉴를 Open한다.
        */
        this.fnMenuOnclick = function(obj,e)
        {
        	var menuId = String(obj.name).replace("btn", "");
        	var nRow = this.dsMenu.findRow(CONST_MENU_ID, menuId);
        	var type = "Left";
        	this.gfnOpenMenu(this.dsMenu.getColumn(nRow, CONST_MENU_ID), type);
        }


        /**
         * @description 메뉴 선택시 애니메이션을 추가해준다.
        */
        this.fnTopMenuOnclick = function(obj,e)
        {
        	var menuId = String(obj.name).replace("btn", "");
        	var objDiv = obj.parent.parent;//메뉴묶음

        	var sAniId;
        	var objAni;

        	var arrAni = new Array();

        	var nHeight = 46;
        	var nTop;

        	if(objDiv._bOpened)
        	{
        		objDiv.pageHeight = this.fvTopDivHeight;
        		objDiv._bOpened = false;
        	}
        	else
        	{
        		this.dsMenu.filter(CONST_MENU_ID + " == '" + menuId + "'");
        		objDiv.pageHeight= this.dsMenu.rowcount * this.fvButtonHeight + this.fvTopDivHeight;
        		this.dsMenu.filter("");
        		objDiv._bOpened = true;
        	}
        	objDiv.setOffsetHeight(objDiv.pageHeight);

        	//두번째부터는 top 조절
        	nTop =  objDiv.getOffsetTop() + objDiv.getOffsetHeight();
        	objDiv = this.divLeft.form.components[objDiv.nextDivId];
        	while(objDiv)
        	{
        		objDiv.setOffsetTop(nTop);
        		nTop =  objDiv.getOffsetTop() + objDiv.getOffsetHeight();
        		objDiv = this.divLeft.form.components[objDiv.nextDivId];
        	}

        	this.divLeft.form.resetScroll();

        	/*
        	if(objDiv._bOpened)//close
        	{
        		objDiv.startValue = objDiv.curtime;
        		this.killTimer(2222 + menuId);

        		objDiv.pageHeight = objDiv.getOffsetHeight() - this.fvTopDivHeight;

        		this.setTimer(1111 + menuId,10);
        	}
        	else//open
        	{
        		objDiv.startValue = objDiv.curtime;
        		this.killTimer(1111 + menuId);

        		this.dsMenu.filter(CONST_PARENT_MENU_ID + " =='" + menuId + "'");
        		objDiv.pageHeight= this.dsMenu.rowcount * this.fvButtonHeight;
        		this.dsMenu.filter("");

        		this.setTimer(2222 + menuId,10);
        	}
        	*/
        }


        /**
         * @description 메뉴탭 또는 즐겨찾기 탭을 선택한다.
        */
        this.Button_onclick = function(obj,e)
        {




        	switch(obj.name)
        	{
        		case "btnMenu":// btn_LF_SelectMenu, btn_LF_Select01
        			this.btnMenu.set_cssclass("btn_LF_AllMenu_S");
        			this.btnFavorite.set_cssclass("btn_LF_AllMenu");
        			this.divLeft.set_visible(true);
        			this.divFavorite.set_visible(false);
        			break;

        		case "btnFavorite"://btn_LF_MenuBg,btn_LF_BookMark
        			this.btnMenu.set_cssclass("btn_LF_AllMenu");
        			this.btnFavorite.set_cssclass("btn_LF_AllMenu_S");
        			this.divLeft.set_visible(false);
        			this.divFavorite.set_visible(true);
        			break;
        	}
        }


        /**
         * @description 메뉴를 Open한다.
        */
        this.grdMenuOnclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var type = "Left";
        	if(this.gfnIsNull(objDs.getColumn(objDs.rowposition, CONST_MENU_URL))) return;
        	this.gfnOpenMenu(objDs.getColumn(objDs.rowposition, CONST_MENU_ID), type);
        };


        /**
         * @description LeftMenu를 열고 닫아준다.
        */
        this.btnMenuToggle_onclick = function(obj,e)
        {
        	this.gfnLeftMenuToggle();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Left_onload,this);
            this.addEventHandler("ontimer",this.Left_ontimer,this);
            this.btnMenu.addEventHandler("onclick",this.Button_onclick,this);
            this.btnFavorite.addEventHandler("onclick",this.Button_onclick,this);
            this.divLeft.form.grdMenuTree.addEventHandler("oncellclick",this.grdMenuOnclick,this);
            this.divFavorite.form.grdFavorite.addEventHandler("oncellclick",this.grdMenuOnclick,this);
            this.divFavorite.form.grdRecent.addEventHandler("oncellclick",this.grdMenuOnclick,this);
            this.btnAllClose.addEventHandler("onclick",this.divLeft_btnAllClose_onclick,this);
            this.btnMenu00.addEventHandler("onclick",this.Button_onclick,this);
            this.btnFavorite00.addEventHandler("onclick",this.Button_onclick,this);
            this.btnMenuToggle.addEventHandler("onclick",this.btnMenuToggle_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
