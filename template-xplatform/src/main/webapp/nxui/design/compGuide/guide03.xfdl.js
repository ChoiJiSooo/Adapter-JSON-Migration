(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide03");
            this.set_titletext("CheckBox/Radio/Tab/Menu");
            this.set_cssclass("frm_GD_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">가나다라</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">가나다라마바</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">가나다라마바</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">가나다라마바</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Menu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Caption\">1depth Menu01</Col><Col id=\"Id\">00001</Col><Col id=\"Level\">0</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">2depth Menu01</Col><Col id=\"Id\">00002</Col><Col id=\"Level\">1</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00003</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00004</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">1depth Menu02</Col><Col id=\"Level\">0</Col><Col id=\"Id\">00005</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">2depth Menu01</Col><Col id=\"Level\">1</Col><Col id=\"Id\">00006</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">1depth Menu03</Col><Col id=\"Level\">0</Col><Col id=\"Id\">00007</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">1depth Menu04</Col><Col id=\"Id\">00008</Col><Col id=\"Level\">0</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">2depth Menu01</Col><Col id=\"Id\">00009</Col><Col id=\"Level\">1</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00010</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00011</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">1depth Menu05</Col><Col id=\"Id\">00012</Col><Col id=\"Level\">0</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">2depth Menu01</Col><Col id=\"Id\">00013</Col><Col id=\"Level\">1</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00014</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Level\">2</Col><Col id=\"Id\">00015</Col><Col id=\"check\">img::mnu_WF_Chk.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","2","80",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide 03");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("CheckBox /CheckBoxSet");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","280",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","280",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Radio");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","30","365","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","370","365","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","710","365","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","Static03_00_00:0",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","Static03_00_00:0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Tab");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","30","565","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","710","565","136","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("showextrabutton = true");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_02","369","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00","709","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","29","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","0","Static03_00_00_00:0",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","0","Static03_00_00_00:0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Menu");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","30","394","163","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">Check</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">None Check</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("Check");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","370","394","163","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">Check</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">None Check</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_innerdataset);
            obj.set_text("Check");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","709","394","163","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var Radio00_00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_00_innerdataset", obj);
            Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">Check</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">None Check</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_00_innerdataset);
            obj.set_text("Check");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","29","196","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Check");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","CheckBox00:5","196","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("None Check");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","369","196","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Check");
            obj.set_enable("false");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","CheckBox00_01:5","196","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("None Check");
            obj.set_enable("false");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","709","196","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Check");
            obj.set_readonly("true");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","CheckBox00_01_00:5","196","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("None Check");
            obj.set_readonly("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","596","392","170",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Tabpage3");
            obj.set_enable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("Tabpage4");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("Tabpage5");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab00_00","710","596","392","170",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00_00);
            obj.set_text("Tabpage1");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00_00);
            obj.set_text("Tabpage2");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00_00);
            obj.set_text("Tabpage3");
            obj.set_enable("false");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00_00);
            obj.set_text("Tabpage4");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00_00);
            obj.set_text("Tabpage5");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Menu("Menu00","30","965","720","60",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("Menu");
            obj.set_idcolumn("Id");
            obj.set_captioncolumn("Caption");
            obj.set_levelcolumn("Level");
            obj.set_checkboxcolumn("check");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("chks_00","29","237","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_fittocontents("width");
            var chks_00_innerdataset = new nexacro.NormalDataset("chks_00_innerdataset", obj);
            chks_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">CheckBoxset</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Check</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">NonCheck</Col></Row></Rows>");
            obj.set_innerdataset(chks_00_innerdataset);
            obj.set_text("Check");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("chks_00_00","369","236","255","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_fittocontents("width");
            obj.set_enable("false");
            var chks_00_00_innerdataset = new nexacro.NormalDataset("chks_00_00_innerdataset", obj);
            chks_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">CheckBoxset</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Check</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">NonCheck</Col></Row></Rows>");
            obj.set_innerdataset(chks_00_00_innerdataset);
            obj.set_text("Check");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage5.form,function(p){});
            this.Tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00_00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage1.form,function(p){});
            this.Tab00_00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00_00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage2.form,function(p){});
            this.Tab00_00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00_00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage3.form,function(p){});
            this.Tab00_00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00_00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage4.form,function(p){});
            this.Tab00_00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00_00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00_00.Tabpage5.form,function(p){});
            this.Tab00_00.Tabpage5.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };
        this.loadIncludeScript("guide03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
