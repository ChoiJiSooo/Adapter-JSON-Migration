(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide05");
            this.set_titletext("Grid02");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Cell Class -필요에 따라 적용</Col><Col id=\"Column1\">Cell Class -필요에 따라 적용</Col><Col id=\"Column2\">Cell Class -필요에 따라 적용</Col><Col id=\"Column3\">Cell Class -필요에 따라 적용</Col><Col id=\"Column4\">Cell Class -필요에 따라 적용</Col><Col id=\"Column5\">1</Col></Row><Row><Col id=\"Column0\">Cell Class -필요에 따라 적용</Col><Col id=\"Column1\">Cell Class -필요에 따라 적용</Col><Col id=\"Column2\">Cell Class -필요에 따라 적용</Col><Col id=\"Column3\">Cell Class -필요에 따라 적용</Col><Col id=\"Column4\">Cell Class -필요에 따라 적용</Col><Col id=\"Column5\">2</Col></Row><Row><Col id=\"Column0\">Cell Class -필요에 따라 적용</Col><Col id=\"Column1\">Cell Class -필요에 따라 적용</Col><Col id=\"Column2\">Cell Class -필요에 따라 적용</Col><Col id=\"Column3\">Cell Class -필요에 따라 적용</Col><Col id=\"Column4\">Cell Class -필요에 따라 적용</Col><Col id=\"Column5\">3</Col></Row><Row><Col id=\"Column0\">Cell Class -필요에 따라 적용</Col><Col id=\"Column1\">Cell Class -필요에 따라 적용</Col><Col id=\"Column2\">Cell Class -필요에 따라 적용</Col><Col id=\"Column3\">Cell Class -필요에 따라 적용</Col><Col id=\"Column4\">Cell Class -필요에 따라 적용</Col><Col id=\"Column5\">1</Col></Row><Row><Col id=\"Column0\">Cell Class -필요에 따라 적용</Col><Col id=\"Column1\">Cell Class -필요에 따라 적용</Col><Col id=\"Column2\">Cell Class -필요에 따라 적용</Col><Col id=\"Column3\">Cell Class -필요에 따라 적용</Col><Col id=\"Column4\">Cell Class -필요에 따라 적용</Col><Col id=\"Column5\">2</Col></Row><Row><Col id=\"Column0\">Cell Class -필요에 따라 적용</Col><Col id=\"Column1\">Cell Class -필요에 따라 적용</Col><Col id=\"Column2\">Cell Class -필요에 따라 적용</Col><Col id=\"Column3\">Cell Class -필요에 따라 적용</Col><Col id=\"Column4\">Cell Class -필요에 따라 적용</Col><Col id=\"Column5\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">첫번째뎁스</Col><Col id=\"Caption\">첫번째뎁스</Col><Col id=\"idx\">1000</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1001</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1002</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1003</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1004</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1005</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1006</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1007</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"idx\">1010</Col><Col id=\"lev\">2</Col><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","2","80",null,"880","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide 05");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","29","165","159","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Cell Class -필요에 따라 적용");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","29","196","1151","264",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("da_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"CellTxtRed\"/><Cell col=\"2\" text=\"CellTxtBlue\"/><Cell col=\"3\" text=\"CellTxtGray\"/><Cell col=\"4\" text=\"CellTxtGreen\"/><Cell col=\"5\" text=\"CellTxtYellow\"/><Cell col=\"6\" text=\"CellTxtOrange\"/><Cell col=\"7\" text=\"CellLink\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" cssclass=\"expr:Column5==&apos;1&apos;?&apos;CellC&apos;:Column5==&apos;2&apos;?&apos;CellD&apos;:Column5==&apos;3&apos;?&apos;CellU&apos;:&apos;&apos;\"/><Cell col=\"1\" style=\"align: ;\" cssclass=\"CellTxtRed\" text=\"bind:Column2\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column3\" cssclass=\"CellTxtBlue\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: ;\" cssclass=\"CellTxtGray\" text=\"bind:Column1\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: ;\" cssclass=\"CellTxtGreen\" text=\"bind:Column1\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: ;\" cssclass=\"CellTxtYellow\" text=\"bind:Column1\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: ;\" cssclass=\"CellTxtOrange\" text=\"bind:Column1\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: ;\" cssclass=\"CellLink\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02_00","28","550","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("tree");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","29","593","241","334",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_tree");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"Grid Tree\"/></Band><Band id=\"body\" style=\"cellline:0 none;\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:UserData\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","35","460","335","67",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("created : 새로 추가된 행의 상태.\r\nupdated : 로드된 후 하나 이상의 필드 값이 변경된 상태. \r\ndeleted : 로드된 후 삭제된 행의 상태.");
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
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
        };
        this.loadIncludeScript("guide05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
