(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ModuleCalendarMonth");
            this.set_titletext("월달력");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(130,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("cal_month","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_type("normal");
            obj.set_buttonsize("0 0");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","cal_month:-26","1","25",null,null,"1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Cal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",130,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cal_month","value","ds_FromTo","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commCalendarMonthDiv.xfdl", function() {

        /************************************************************************************************
         * 1. FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 2. FORM EVENT 영역(onload)
         ************************************************************************************************/
        // onload 이벤트
        this.form_onload = function(obj,e)
        {

        };


        this.btn_monthCal_onclick = function(obj,e)
        {
        	this.gfnCallMonthCalendar(this.cal_month);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.ModuleCalendarMonth_ontimer,this);
            this.Button00.addEventHandler("onclick",this.btn_monthCal_onclick,this);
        };
        this.loadIncludeScript("commCalendarMonthDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
