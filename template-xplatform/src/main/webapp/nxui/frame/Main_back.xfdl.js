(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Main");
            this.set_titletext("New Form");
            this.set_background("linear-gradient(to right,#343a40 0%,#2d1517 100%) rgb(45,21,23)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,979);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"img\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">물리치료실 근골격계건강정보가이드</Col><Col id=\"date\">20240815</Col><Col id=\"no\">url(&apos;theme://images/grd_MF_New.png&apos;)</Col><Col id=\"img\">url(&apos;theme://images/grd_MF_All.png&apos;)</Col></Row><Row><Col id=\"data\">2023년 4분기 산업안전보건위원회 결과 공지</Col><Col id=\"date\">20240815</Col><Col id=\"no\">url(&apos;theme://images/grd_MF_All.png&apos;)</Col><Col id=\"img\">url(&apos;theme://images/grd_MF_All.png&apos;)</Col></Row><Row><Col id=\"data\">안전유해화학물질 종사자교육 수료증 등록 변경 안내</Col><Col id=\"date\">20240815</Col><Col id=\"no\">url(&apos;theme://images/grd_MF_All.png&apos;)</Col><Col id=\"img\">url(&apos;theme://images/grd_MF_All.png&apos;)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","100","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("sta02");
            obj.set_cssclass("sta_LOGIN_Pattern02");
            obj.set_opacity("0.8");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인정보 처리방침 \r\nSK하이스텍㈜ 경기도 이천시 부발읍 경충대로 2091\r\n\r\n \r\n대표번호: 031-8094-7669\r\n\r\nCOPYRIGHT © 2023 SK HYSTEC INC. ALL RIGHTS RESERVED.");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","324","50%","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_MF_NoticeBg");
            obj.set_borderRadius("10px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","40","50","3","15",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_background("#ff5e14");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","sta01:5","44","283","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_Title");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","40","94",null,null,"60","0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"400\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:no\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:data\"/><Cell col=\"2\" text=\"bind:date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"44","20","30","60",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_More");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","div00:0","324",null,"300","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_MF_NoticeBg");
            obj.set_borderRadius("0px 10px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","40","50","3","15",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_background("#ff5e14");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00","sta01:5","44","283","30",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("정보공유");
            obj.set_cssclass("sta_MF_Title");
            this.div00_00.addChild(obj.name, obj);

            obj = new Grid("grd00","40","94",null,null,"60","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"400\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:img\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:data\"/><Cell col=\"2\" text=\"bind:date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"44","20","30","60",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_More");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta01","77","57","453","206",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("고객의 가치에 \r\n<fc v=\'#e15e22\'>최상의 서비스</fc>를 \r\n더하겠습니다.");
            obj.set_cssclass("sta_MF_Slogan");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div02",null,"140","610","100","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'theme://images/img_MF_Data.png\') no-repeat center top transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","32","10","108","18",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("캠퍼스 서비스 ");
            obj.set_cssclass("sta_MF_SubTitle");
            obj.set_fittocontents("width");
            obj.set_opacity("0.8");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","40","sta00:10","93","41",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("7,234");
            obj.set_color("#ffffff");
            obj.set_cssclass("sta_MF_Num");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","239","38","114","41",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("12,234");
            obj.set_color("#ffffff");
            obj.set_cssclass("sta_MF_Num");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_01","235","10","122","18",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("네트워크 통신 IT");
            obj.set_cssclass("sta_MF_SubTitle");
            obj.set_fittocontents("width");
            obj.set_opacity("0.8");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","466","10","80","18",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("교육서비스");
            obj.set_cssclass("sta_MF_SubTitle");
            obj.set_fittocontents("width");
            obj.set_opacity("0.8");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","460","38","93","41",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("3,234");
            obj.set_color("#ffffff");
            obj.set_cssclass("sta_MF_Num");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta02","188","15","1","60",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("sta02");
            obj.set_border("1px dotted #ffffff");
            obj.set_opacity("0.5");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta02_00","414","15","1","60",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("sta02");
            obj.set_border("1px dotted #ffffff");
            obj.set_opacity("0.5");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta01.set_taborder("1");
                p.sta01.set_background("#ff5e14");
                p.sta01.move("40","50","3","15",null,null);

                p.sta00.set_taborder("0");
                p.sta00.set_text("공지사항");
                p.sta00.set_cssclass("sta_MF_Title");
                p.sta00.move("sta01:5","44","283","30",null,null);

                p.grd00.set_taborder("2");
                p.grd00.set_cssclass("grd_MF_Notice");
                p.grd00.set_binddataset("ds00");
                p.grd00.set_autofittype("col");
                p.grd00.move("40","94",null,null,"60","0");

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_More");
                p.btn00.move(null,"44","20","30","60",null);
            	}
            );
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("Layout1","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta01.set_taborder("1");
                p.sta01.set_background("#ff5e14");
                p.sta01.move("40","50","3","15",null,null);

                p.sta00.set_taborder("0");
                p.sta00.set_text("정보공유");
                p.sta00.set_cssclass("sta_MF_Title");
                p.sta00.move("sta01:5","44","283","30",null,null);

                p.grd00.set_taborder("2");
                p.grd00.set_cssclass("grd_MF_Notice");
                p.grd00.set_binddataset("ds00");
                p.grd00.set_autofittype("col");
                p.grd00.move("40","94",null,null,"60","0");

                p.btn00.set_taborder("3");
                p.btn00.set_cssclass("btn_MF_More");
                p.btn00.move(null,"44","20","30","60",null);
            	}
            );
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00.form
            obj = new Layout("Layout1","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("캠퍼스 서비스 ");
                p.sta00.set_cssclass("sta_MF_SubTitle");
                p.sta00.set_fittocontents("width");
                p.sta00.set_opacity("0.8");
                p.sta00.move("32","10","108","18",null,null);

                p.sta00_00.set_taborder("1");
                p.sta00_00.set_text("7,234");
                p.sta00_00.set_color("#ffffff");
                p.sta00_00.set_cssclass("sta_MF_Num");
                p.sta00_00.set_fittocontents("width");
                p.sta00_00.move("40","sta00:10","93","41",null,null);

                p.sta00_00_00.set_taborder("2");
                p.sta00_00_00.set_text("12,234");
                p.sta00_00_00.set_color("#ffffff");
                p.sta00_00_00.set_cssclass("sta_MF_Num");
                p.sta00_00_00.set_fittocontents("width");
                p.sta00_00_00.move("239","38","114","41",null,null);

                p.sta00_01.set_taborder("3");
                p.sta00_01.set_text("네트워크 통신 IT");
                p.sta00_01.set_cssclass("sta_MF_SubTitle");
                p.sta00_01.set_fittocontents("width");
                p.sta00_01.set_opacity("0.8");
                p.sta00_01.move("235","10","122","18",null,null);

                p.sta00_01_00.set_taborder("4");
                p.sta00_01_00.set_text("교육서비스");
                p.sta00_01_00.set_cssclass("sta_MF_SubTitle");
                p.sta00_01_00.set_fittocontents("width");
                p.sta00_01_00.set_opacity("0.8");
                p.sta00_01_00.move("466","10","80","18",null,null);

                p.sta00_00_00_00.set_taborder("5");
                p.sta00_00_00_00.set_text("3,234");
                p.sta00_00_00_00.set_color("#ffffff");
                p.sta00_00_00_00.set_cssclass("sta_MF_Num");
                p.sta00_00_00_00.set_fittocontents("width");
                p.sta00_00_00_00.move("460","38","93","41",null,null);

                p.sta02.set_taborder("6");
                p.sta02.set_text("sta02");
                p.sta02.set_border("1px dotted #ffffff");
                p.sta02.set_opacity("0.5");
                p.sta02.move("188","15","1","60",null,null);

                p.sta02_00.set_taborder("7");
                p.sta02_00.set_text("sta02");
                p.sta02_00.set_border("1px dotted #ffffff");
                p.sta02_00.set_opacity("0.5");
                p.sta02_00.move("414","15","1","60",null,null);
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout1","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,979,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_background("linear-gradient(to right,#343a40 0%,#2d1517 100%) rgb(45,21,23)");

                p.sta02.set_taborder("5");
                p.sta02.set_text("sta02");
                p.sta02.set_cssclass("sta_LOGIN_Pattern02");
                p.sta02.set_opacity("0.8");
                p.sta02.move("100","0",null,null,"0","60");

                p.sta00.set_taborder("1");
                p.sta00.set_text("개인정보 처리방침 \r\nSK하이스텍㈜ 경기도 이천시 부발읍 경충대로 2091\r\n\r\n \r\n대표번호: 031-8094-7669\r\n\r\nCOPYRIGHT © 2023 SK HYSTEC INC. ALL RIGHTS RESERVED.");
                p.sta00.move("0",null,null,"60","0","0");

                p.div00.set_taborder("0");
                p.div00.set_text("div00");
                p.div00.set_cssclass("div_MF_NoticeBg");
                p.div00.set_borderRadius("10px 0px 0px");
                p.div00.move("0","324","50%","300",null,null);

                p.div00_00.set_taborder("2");
                p.div00_00.set_text("div00");
                p.div00_00.set_cssclass("div_MF_NoticeBg");
                p.div00_00.set_borderRadius("0px 10px 0px 0px");
                p.div00_00.move("div00:0","324",null,"300","25",null);

                p.sta01.set_taborder("3");
                p.sta01.set_text("고객의 가치에 \r\n<fc v=\'#e15e22\'>최상의 서비스</fc>를 \r\n더하겠습니다.");
                p.sta01.set_cssclass("sta_MF_Slogan");
                p.sta01.set_usedecorate("true");
                p.sta01.move("77","57","453","206",null,null);

                p.Div02.set_taborder("4");
                p.Div02.set_background("url(\'theme://images/img_MF_Data.png\') no-repeat center top transparent");
                p.Div02.set_text("");
                p.Div02.move(null,"140","610","100","40",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",850,2430,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","",450,2270,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Main_onload,this);
            this.addEventHandler("onhscroll",this.Main_onhscroll,this);
            this.addEventHandler("onvscroll",this.Main_onvscroll,this);
            this.addEventHandler("ontimer",this.Main_ontimer,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.Div02.form.sta00_00.addEventHandler("onclick",this.Div02_sta00_00_onclick,this);
        };
        this.loadIncludeScript("Main_back.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
