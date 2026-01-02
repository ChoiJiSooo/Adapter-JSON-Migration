(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("로그인");
            this.set_background("linear-gradient(to left bottom,#343a40 50%,#2d1517 100%) #343a40");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">3333</Col></Row><Row><Col id=\"Column0\">222</Col><Col id=\"Column1\">444</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LOGIN_Pattern");
            obj.set_opacity("0.2");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","486","144","400","400",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_borderRadius("20px");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","57","30","287","60",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LoginLogo");
            obj.set_text("공사관리시스템");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtId","50","120","300","45",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_LoginId");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPw","50","edtId:15","300","45",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_cssclass("edt_WF_LoginPw");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn00",null,"255","77","26","50",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_LOGIN_Pw");
            obj.set_color("#bbbbbb");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta00",null,"264","1","10","btn00:10",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_BF_Line");
            obj.set_background("#bbbbbb");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","50","315","300","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("LOGIN");
            obj.set_cssclass("btn_WF_Login");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00",null,"edtPw:29","98","26","sta00:1",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("아이디 저장");
            obj.set_cssclass("chk_WF_LoginId");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staLogo","1103","226","287","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LoginLogoEPAS");
            obj.set_text("공사관리시스템");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo00","1103","319","287","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LoginLogoNPS");
            obj.set_text("공사관리시스템");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo01","1100","414","287","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LoginLogoPGMON");
            obj.set_text("공사관리시스템");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","1520","322","150",null,null,"343",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_TF_NPS");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1520","229","150",null,null,"436",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_TF_EPAS");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","1520","417","150",null,null,"248",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_TF_PGMON");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Login.xfdl", function() {

        this.Login_onload = function(obj,e)
        {
        	this.fn_setCenter();
        };


        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	// 로그인 성공후
        	this.fn_loginPass();
        };

        // 로그인 성공후 모든 사후처리는 여기서 (메뉴목록 조회, 메시지 조회등등)
        this.fn_loginPass = function()
        {
        	// 개발용 메뉴추가 (운영시 주석달것 guide 메뉴 안나오게...)
        	nexacro.getApplication().gdsMenu.appendData(nexacro.getApplication().gdsDevMenu);

        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.set_separatesize("40,0,*");
        	nexacro.getApplication().mainframe.VFrameSet.set_separatesize("0,70,*");
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.set_separatesize("264,*");
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.Left.set_formurl("frame::Left.xfdl");
        	nexacro.getApplication().mainframe.VFrameSet.Top.set_formurl("frame::Top.xfdl");
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.set_formurl("frame::Tab.xfdl");
        	nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Main.set_formurl("frame::Main.xfdl");
        }

        this.fn_setCenter = function ()
        {
        	nTop = (nexacro.getApplication().mainframe.height - this.divLogin.height) / 2 ;
        	nLeft = (nexacro.getApplication().mainframe.width - this.divLogin.width) / 2 ;
        	this.divLogin.set_top(nTop);
        	this.divLogin.set_left(nLeft);
        	this.resetScroll();
        };

        this.Login_onsize = function(obj,e)
        {
        	this.fn_setCenter();
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Login_onload,this);
            this.addEventHandler("onsize",this.Login_onsize,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.CheckBox00.addEventHandler("onclick",this.divLogin_CheckBox00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.home_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.home_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.home_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
