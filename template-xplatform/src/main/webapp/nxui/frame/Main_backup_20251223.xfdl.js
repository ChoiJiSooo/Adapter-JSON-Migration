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
            obj.set_taborder("1");
            obj.set_text("sta02");
            obj.set_cssclass("sta_LOGIN_Pattern02");
            obj.set_opacity("0.8");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인정보 처리방침 \r\nSK하이스텍㈜ 경기도 이천시 부발읍 경충대로 2091\r\n\r\n \r\n대표번호: 031-8094-7669\r\n\r\nCOPYRIGHT © 2023 SK HYSTEC INC. ALL RIGHTS RESERVED.");
            this.addChild(obj.name, obj);

            obj = new WebView("wb_01","43","43","45.63%","44.23%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("https://gamsin17.dothome.co.kr/nps/etc/a.html");
            this.addChild(obj.name, obj);

            obj = new WebView("wb_02","wb_01:20","43",null,"44.23%","43",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("https://gamsin17.dothome.co.kr/nps/etc/b.html");
            this.addChild(obj.name, obj);

            obj = new WebView("wb_03","43","wb_01:20","45.63%",null,null,"43",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("https://gamsin17.dothome.co.kr/nps/etc/c.html");
            this.addChild(obj.name, obj);

            obj = new WebView("wb_04","wb_03:20","wb_02:20",null,null,"43","43",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("https://gamsin17.dothome.co.kr/nps/etc/d.html");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,979,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_background("linear-gradient(to right,#343a40 0%,#2d1517 100%) rgb(45,21,23)");

                p.sta02.set_taborder("1");
                p.sta02.set_text("sta02");
                p.sta02.set_cssclass("sta_LOGIN_Pattern02");
                p.sta02.set_opacity("0.8");
                p.sta02.move("100","0",null,null,"0","60");

                p.sta00.set_taborder("0");
                p.sta00.set_text("개인정보 처리방침 \r\nSK하이스텍㈜ 경기도 이천시 부발읍 경충대로 2091\r\n\r\n \r\n대표번호: 031-8094-7669\r\n\r\nCOPYRIGHT © 2023 SK HYSTEC INC. ALL RIGHTS RESERVED.");
                p.sta00.move("0",null,null,"60","0","0");

                p.wb_01.set_taborder("2");
                p.wb_01.set_url("https://gamsin17.dothome.co.kr/nps/etc/a.html");
                p.wb_01.move("43","43","45.63%","44.23%",null,null);

                p.wb_02.set_taborder("3");
                p.wb_02.set_url("https://gamsin17.dothome.co.kr/nps/etc/b.html");
                p.wb_02.move("wb_01:20","43",null,"44.23%","43",null);

                p.wb_03.set_taborder("4");
                p.wb_03.set_url("https://gamsin17.dothome.co.kr/nps/etc/c.html");
                p.wb_03.move("43","wb_01:20","45.63%",null,null,"43");

                p.wb_04.set_taborder("5");
                p.wb_04.set_url("https://gamsin17.dothome.co.kr/nps/etc/d.html");
                p.wb_04.move("wb_03:20","wb_02:20",null,null,"43","43");
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
        };
        this.loadIncludeScript("Main_backup_20251223.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
