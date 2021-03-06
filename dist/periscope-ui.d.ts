declare module 'periscope-ui' {
  import * as _ from 'lodash';
  import $ from 'jquery';
  import {
    useView,
    Container,
    Decorators,
    bindable,
    computedFrom,
    bindingMode
  } from 'aurelia-framework';
  import {
    DashboardBase,
    PermissionsCustomAttribute,
    StringHelper,
    IntellisenceManager,
    GrammarTree,
    SearchBox,
    ExpressionParser,
    Datasource,
    SwaggerSchemaProvider,
    DataSourceConfigurator,
    DrillDownBehaviorConfiguration
  } from 'periscope-framework';
  import {
    ValidationEngine,
    Validator
  } from 'aurelia-validatejs';
  
  //$(this.shareUrlInput).select();
  import {
    DetailedView,
    Query
  } from 'periscope-framework';
  import Swagger from 'swagger-client';
  export class BootstrapDashboard extends DashboardBase {
    constructor(name: any);
    replaceWidget(oldWidget: any, newWidget: any, callback: any): any;
    restoreWidget(currentWidget: any): any;
    addWidget(widget: any, dimensions: any): any;
    removeWidget(widget: any): any;
    resizeWidget(widget: any, dimensions: any): any;
    attached(): any;
    
    //this.layoutStructure = this.createLayoutStructure(this.layout);
    createLayoutStructure(layout: any): any;
    getColWidth(layoutWidget: any): any;
    getColHeight(layoutWidget: any): any;
    setWidgetHeight(layoutWidget: any, containerHeight: any): any;
    openPopup(): any;
    share(): any;
  }
  export class DefaultDetailedView extends DetailedView {
    constructor(settings: any);
    data: any;
    viewFields: any;
    refresh(): any;
  }
  export class DefaultSearchBox extends SearchBox {
    constructor(settings: any);
    parser: any;
    expressionManager: any;
    selectedSuggestion: any;
    suggestionsListSettings: any;
    isValid: any;
    refresh(): any;
    searchString: any;
    caretPosition: any;
    attached(): any;
    populateSuggestions(searchStr: any): any;
    select(suggestion: any): any;
    getLastWord(searchStr: any): any;
    notifySearchCriteriaChanged(): any;
  }
  export class SwaggerDataSourceConfigurator extends DataSourceConfigurator {
    constructor(settings: any);
    client: any;
    definitionUrl: any;
    apis: any;
    methods: any;
    parameters: any;
    api: any;
    method: any;
    submit(): any;
  }
  export class GridMenu {
    constructor(widget: any);
    errors: any;
    drillDownModel: any;
    drillDownBehavior: any;
    widget: any;
    validator: any;
    showDrillDownButton: any;
    hasErrors(): any;
    renderErrors(result: any): any;
    closePopup(): any;
    openPopup(): any;
    save(): any;
    getDrillDownBehavior(): any;
  }
  export class DrillDownModel {
    url: any;
    username: any;
    password: any;
    query: any;
  }
  export class List {
    items: any;
    title: any;
    highlightText: any;
    visible: any;
    selectedItem: any;
    focusedItemIndex: any;
    constrictor(): any;
    
    //itemsChanged(newValue, oldValue)
    attached(params: any): any;
    format(itemText: any): any;
    select(itemIndex: any): any;
    focusedItemIndexChanged(newValue: any, oldValue: any): any;
    setFocus(itemIndex: any): any;
    clearFocus(): any;
  }
  export class WidgetMenu {
    widget: any;
    content: any;
    widgetChanged(oldVal: any, newVal: any): any;
  }
}