(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide02");
            this.set_titletext("Combo/ListBox/Spin/Calendar");
            this.set_cssclass("frm_GD_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">가나다라</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">가나다라마바</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">가나다라마바</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">가나다라마바</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","2","80",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide 02");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Combo / MultiCombo / ListBox");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","380",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","380",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Spin");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","30","465","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","370","465","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","710","465","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","Static03_00_00:0",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","Static03_00_00:0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","30","665","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","370","665","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","710","665","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_02","369","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00","709","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","29","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","29","196","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("dsCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","368","195","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_innerdataset("dsCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","709","195","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","29","232","140","100",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00_00","369","230","140","100",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00_00_00","709","229","140","100",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("dsCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","30","496","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_00","370","495","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_00_00","710","495","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","30","696","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240810");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","370","696","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240810");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","710","696","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240810");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbo_00","200","193","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("dsCmb");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02_00","200","164","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01","60","778","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240810");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","30","778",null,"30","Calendar00_01:5",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_Prev");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00_01_00","8","778",null,"30","btn_03:2",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Start");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00","Calendar00_01:5","778","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Next");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00_01","btn_03_00:2","778","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_End");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide02.xfdl", function() {

        this.btn_03_00_01_00_onclick = function(obj,e)
        {
        	// 1년전
        	this.Calendar00_01.set_value(this.gfnAddYear(this.Calendar00_01.value, -1));
        };

        this.btn_03_onclick = function(obj,e)
        {
        	// 1달전
        	this.Calendar00_01.set_value(this.gfnAddMonth(this.Calendar00_01.value, -1));
        };

        this.btn_03_00_onclick = function(obj,e)
        {
        	//1달후
        	this.Calendar00_01.set_value(this.gfnAddMonth(this.Calendar00_01.value, 1));
        };

        this.btn_03_00_01_onclick = function(obj,e)
        {
        	// 1년후
        	this.Calendar00_01.set_value(this.gfnAddYear(this.Calendar00_01.value, 1));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_03.addEventHandler("onclick",this.btn_03_onclick,this);
            this.btn_03_00_01_00.addEventHandler("onclick",this.btn_03_00_01_00_onclick,this);
            this.btn_03_00.addEventHandler("onclick",this.btn_03_00_onclick,this);
            this.btn_03_00_01.addEventHandler("onclick",this.btn_03_00_01_onclick,this);
        };
        this.loadIncludeScript("guide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
