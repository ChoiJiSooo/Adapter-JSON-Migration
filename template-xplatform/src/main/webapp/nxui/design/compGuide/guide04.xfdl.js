(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide04");
            this.set_titletext("Grid01");
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


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Link\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">1234000</Col><Col id=\"Combo\">0</Col><Col id=\"Calendar\">20240810</Col><Col id=\"Button\">Button</Col><Col id=\"Link\">https://www.tobesoft.com</Col></Row><Row><Col id=\"Edit\">가나다라</Col><Col id=\"MaskEdit\">1234000</Col><Col id=\"Combo\">0</Col><Col id=\"Calendar\">20240810</Col><Col id=\"Button\">Button</Col><Col id=\"Link\">https://www.tobesoft.com</Col></Row><Row><Col id=\"Edit\">가나다라</Col><Col id=\"MaskEdit\">1234000</Col><Col id=\"Combo\">1</Col><Col id=\"Calendar\">20240810</Col><Col id=\"Button\">Button</Col><Col id=\"Link\">https://www.tobesoft.com</Col></Row><Row><Col id=\"Edit\">가나다라</Col><Col id=\"MaskEdit\">1234000</Col><Col id=\"Combo\">0</Col><Col id=\"Calendar\">20240810</Col><Col id=\"Button\">Button</Col><Col id=\"Link\">https://www.tobesoft.com</Col></Row><Row><Col id=\"Edit\">가나다라</Col><Col id=\"MaskEdit\">1234000</Col><Col id=\"Combo\">0</Col><Col id=\"Calendar\">20240810</Col><Col id=\"Button\">Button</Col><Col id=\"Link\">https://www.tobesoft.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("da_grd", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1000000000001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1000000000002</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1000000000003</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1000000000004</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1000000000005</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1000000000006</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1000000000007</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1000000000008</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">1000000000009</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">1000000000010</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","2","80","1278","800",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide 04");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","29","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","29","581","1151","220",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" text=\"MaskEdit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" text=\"Expand\"/><Cell col=\"6\" text=\"Link\"/><Cell col=\"7\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:No\" expr=\"currow+1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:Edit\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:MaskEdit\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"3\" text=\"bind:Combo\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCmb\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" text=\"bind:Calendar\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:Expand\" displaytype=\"normal\" expandshow=\"show\"/><Cell col=\"6\" text=\"bind:Link\" cssclass=\"CellLink\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","29","196","1151","310",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("da_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"412\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"비정형데이타\"/><Cell col=\"2\" text=\"정형데이타\" cssclass=\"essential\"/><Cell col=\"3\" text=\"Number\"/><Cell col=\"4\" text=\"Date\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:Column2\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column3\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: ;\" text=\"bind:Column1\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:Column4\" calendardateformat=\"yyyy-MM-dd\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" colspan=\"2\" style=\"align:right middle;\" text=\"43,843,145\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02_00","28","550","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("displaytype");
            obj.set_cssclass("sta_GD_SubTitle02");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("guide04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
