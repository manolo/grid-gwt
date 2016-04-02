var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.mygridapp_new;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.0-SNAPSHOT";
var $strongName = 'D2A8E7AE6899F96C2909950A9B6F2F4B';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1}, $intern_2 = 65536, $intern_3 = 65535, $intern_4 = 3.141592653589793, $intern_5 = {3:1, 7:1}, $intern_6 = {3:1, 10:1, 13:1, 7:1}, $intern_7 = {62:1}, $intern_8 = {42:1, 15:1, 3:1, 5:1, 4:1}, $intern_9 = {11:1, 15:1, 3:1, 5:1, 4:1}, $intern_10 = {15:1, 55:1, 3:1, 5:1, 4:1}, $intern_11 = {15:1, 56:1, 3:1, 5:1, 4:1}, $intern_12 = {26:1, 3:1, 5:1, 4:1}, $intern_13 = {15:1, 85:1, 3:1, 5:1, 4:1}, $intern_14 = {83:1, 3:1, 10:1, 13:1, 7:1}, $intern_15 = 4194303, $intern_16 = 1048575, $intern_17 = 4194304, $intern_18 = 17592186044416, $intern_19 = 524288, $intern_20 = -2147483648, $intern_21 = {43:1}, $intern_22 = {64:1}, $intern_23 = {79:1, 69:1}, $intern_24 = {120:1}, $intern_25 = 32768, $intern_26 = 16384, $intern_27 = 131072, $intern_28 = 262144, $intern_29 = 1048576, $intern_30 = 2097152, $intern_31 = 8388608, $intern_32 = 16777216, $intern_33 = 33554432, $intern_34 = 67108864, $intern_35 = {61:1}, $intern_36 = {28:1, 22:1, 21:1, 25:1, 29:1, 19:1, 16:1}, $intern_37 = {28:1, 22:1, 21:1, 25:1, 44:1, 29:1, 19:1, 16:1}, $intern_38 = {28:1, 22:1, 21:1, 104:1, 25:1, 29:1, 19:1, 16:1}, $intern_39 = {28:1, 22:1, 21:1, 25:1, 105:1, 29:1, 19:1, 16:1}, $intern_40 = {17:1, 106:1}, $intern_41 = {28:1, 22:1, 21:1, 25:1, 44:1, 29:1, 89:1, 19:1, 16:1}, $intern_42 = {182:1, 17:1}, $intern_43 = {77:1, 116:1}, $intern_44 = {107:1}, $intern_45 = 0.49, $intern_46 = {17:1, 119:1}, $intern_47 = {33:1}, $intern_48 = {17:1, 560:1}, $intern_49 = {28:1, 22:1, 21:1, 104:1, 25:1, 44:1, 105:1, 29:1, 19:1, 16:1, 179:1}, $intern_50 = 1.7976931348623157E308, $intern_51 = {14:1}, $intern_52 = {181:1, 17:1}, $intern_53 = {67:1, 3:1, 5:1, 4:1}, $intern_54 = {45:1}, $intern_55 = {41:1}, $intern_56 = {3:1, 33:1, 142:1}, $intern_57 = {3:1, 45:1}, $intern_58 = {3:1, 5:1, 4:1, 63:1}, $intern_59 = {3:1, 183:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function create_com_google_gwt_useragent_client_UserAgent(){
  switch (permutationId) {
    case 8:
    case 9:
      return new UserAgentImplIe9;
    case 4:
    case 5:
      return new UserAgentImplIe10;
    case 10:
      return new UserAgentImplSafari;
    case 6:
    case 7:
      return new UserAgentImplIe8;
  }
  return new UserAgentImplGecko1_8;
}

function create_com_google_gwt_user_client_ui_impl_PopupImpl(){
  switch (permutationId) {
    case 0:
    case 1:
    case 2:
    case 3:
      return new PopupImplMozilla;
  }
  return new PopupImpl;
}

function create_com_google_gwt_user_client_ui_impl_FocusImpl(){
  switch (permutationId) {
    case 0:
    case 1:
    case 2:
    case 3:
      return new FocusImplStandard;
    case 4:
    case 5:
      return new FocusImpl;
    case 10:
      return new FocusImplSafari;
  }
  return new FocusImplIE6;
}

function create_com_google_gwt_user_client_impl_WindowImpl(){
  switch (permutationId) {
    case 10:
      return new WindowImpl;
    case 0:
    case 1:
    case 2:
    case 3:
      return new WindowImplMozilla;
  }
  return new WindowImplIE;
}

function create_com_google_gwt_user_client_impl_DOMImpl(){
  switch (permutationId) {
    case 6:
    case 7:
      return new DOMImplIE8_0;
    case 0:
    case 1:
    case 2:
    case 3:
      return new DOMImplMozilla_0;
    case 10:
      return new DOMImplWebkit_0;
  }
  return new DOMImplIE9_0;
}

function create_com_google_gwt_user_client_History_HistoryImpl(){
  switch (permutationId) {
    case 6:
    case 7:
      return new History$HistoryImplIE8;
  }
  return new History$HistoryImpl;
}

function create_com_google_gwt_query_client_impl_SelectorEngineImpl(){
  switch (permutationId) {
    case 4:
    case 8:
      return new SelectorEngineNative;
    case 0:
    case 2:
      return new SelectorEngineCssToXPath;
    case 5:
    case 7:
    case 9:
      return new SelectorEngineNativeMinIE8;
    case 6:
      return new SelectorEngineNativeIE8;
  }
  return new SelectorEngineNativeMin;
}

function create_com_google_gwt_query_client_impl_HasSelector(){
  switch (permutationId) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 10:
      return new SelectorEngineCssToXPath;
  }
  return new SelectorEngineSizzleIE;
}

function create_com_google_gwt_query_client_impl_DocumentStyleImpl(){
  switch (permutationId) {
    case 6:
    case 7:
    case 8:
    case 9:
      return new DocumentStyleImplIE;
  }
  return new DocumentStyleImpl;
}

function create_com_google_gwt_query_client_Browser(){
  switch (permutationId) {
    case 10:
      return new Browser_safari;
    case 4:
    case 5:
      return new Browser_ie10;
    case 6:
    case 7:
      return new Browser_ie8;
    case 8:
    case 9:
      return new Browser_ie9;
  }
  return new Browser_gecko1_8;
}

function create_com_google_gwt_dom_client_DOMImpl(){
  switch (permutationId) {
    case 6:
    case 7:
      return new DOMImplIE8;
    case 10:
      return new DOMImplWebkit;
    case 4:
    case 5:
    case 8:
    case 9:
      return new DOMImplIE9;
  }
  return new DOMImplMozilla;
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i_0 = 0; i_0 < initFnList.length; i_0++) {
      initFnList[i_0]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i_0 = 0; i_0 < arguments.length; i_0++) {
    initFnList.push(arguments[i_0]);
  }
}

function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    _.constructor = _;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i_0 = 3; i_0 < arguments.length; ++i_0) {
    arguments[i_0].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

bootstrap();
function $toString(this$static){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this$static)) + '@' + (hashCode__I__devirtual$(this$static) >>> 0).toString(16);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals(other):isJavaArray(this$static)?this$static === other:maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:getClass_1(this$static);
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?unsafeCast((checkCriticalNotNull(this$static) , this$static))?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode():isJavaArray(this$static)?getObjectIdentityHashCode(this$static):getObjectIdentityHashCode(this$static);
}

function toString__Ljava_lang_String___devirtual$(this$static){
  return instanceOfString(this$static)?this$static:instanceOfDouble(this$static)?toString_22((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?toString_20(unsafeCast((checkCriticalNotNull(this$static) , this$static))):hasJavaObjectVirtualDispatch(this$static)?this$static.toString_0():isJavaArray(this$static)?$toString(this$static):this$static.toString?this$static.toString():'[JavaScriptObject]';
}

defineClass(1, null, {}, Object_0);
_.equals = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode = function hashCode_0(){
  return getObjectIdentityHashCode(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this);
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

function castToDouble(src_0){
  checkCriticalType(src_0 == null || instanceOfDouble(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function getClass_1(array){
  return array.___clazz || Array.isArray(array) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i_0 = 0;
  while (!strings[i_0] || strings[i_0] == '') {
    i_0++;
  }
  var result = strings[i_0++];
  for (; i_0 < strings.length; i_0++) {
    if (!strings[i_0] || strings[i_0] == '') {
      continue;
    }
    result += separator + strings[i_0];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(143, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  return $ensureNamesAreInitialized(this) , this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_21(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
function $clinit_String(){
  $clinit_String = emptyMethod;
  new String$1;
}

function $charAt(this$static, index_0){
  return ($clinit_String() , this$static).charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return this$static === other;
}

function $indexOf_0(this$static, str){
  return ($clinit_String() , this$static).indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return ($clinit_String() , this$static).indexOf(str, startIndex);
}

function $lastIndexOf(this$static, str){
  return ($clinit_String() , this$static).lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return ($clinit_String() , this$static).lastIndexOf(str, start_0);
}

function $nativeMatches(this$static, regex){
  return regex.test(this$static);
}

function $replaceAll_0(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return ($clinit_String() , this$static).replace(new $wnd.RegExp(regex, 'g'), replace);
}

function $replaceFirst(this$static, regex, replace){
  var jsRegEx;
  replace = translateReplaceString(replace);
  jsRegEx = new $wnd.RegExp(regex);
  return ($clinit_String() , this$static).replace(jsRegEx, replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchObj, out, trail;
  compiled = new $wnd.RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_1, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = $substring_0(trail, 0, matchObj.index);
      trail = $substring_0(trail, matchObj.index + matchObj[0].length, ($clinit_String() , trail).length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1, trail.length - 1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && ($clinit_String() , this$static).length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty , undefined);
  }
  return out;
}

function $startsWith(this$static, prefix){
  return $equals_0(($clinit_String() , this$static).substr(0, prefix.length), prefix);
}

function $substring(this$static, beginIndex){
  return ($clinit_String() , this$static).substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return ($clinit_String() , this$static).substr(beginIndex, endIndex - beginIndex);
}

function $toUpperCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?($clinit_String() , this$static).toLocaleUpperCase():($clinit_String() , this$static).toUpperCase();
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = ($clinit_String() , this$static).length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function compareTo_1(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function equalsIgnoreCase(s, other){
  $clinit_String();
  if (other == null) {
    return false;
  }
  if (s == other) {
    return true;
  }
  return s.length == other.length && s.toLowerCase() == other.toLowerCase();
}

function fromCodePoint(codePoint){
  $clinit_String();
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_2) {
    hiSurrogate = 55296 + (codePoint - $intern_2 >> 10 & 1023) & $intern_3;
    loSurrogate = 56320 + (codePoint - $intern_2 & 1023) & $intern_3;
    return $wnd.String.fromCharCode(hiSurrogate) + ('' + $wnd.String.fromCharCode(loSurrogate));
  }
   else {
    return $wnd.String.fromCharCode(codePoint & $intern_3);
  }
}

function toNative(str){
  $clinit_String();
  return str;
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = ($clinit_String() , replaceStr).indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

stringCastMap = {3:1, 607:1, 5:1, 2:1};
function String$1(){
}

defineClass(192, 1, {}, String$1);
_.equals = function equals_9(other){
  return this === other;
}
;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 143);
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
var Ljava_lang_String$1_2_classLit = createForClass('java.lang', 'String/1', 192);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && this$static.onComplete();
}

function $run(this$static, duration, startTime){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = null;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate(this$static.interpolate(progress));
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(109, 1, {});
_.interpolate = function interpolate(progress){
  return (1 + $wnd.Math.cos($intern_4 + progress * $intern_4)) / 2;
}
;
_.onComplete = function onComplete(){
  this.onUpdate(this.interpolate(1));
}
;
_.onStart = function onStart(){
  this.onUpdate(this.interpolate(0));
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 109);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(261, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 261);
defineClass(605, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 605);
defineClass(140, 1, {140:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 140);
function $isNativelySupported(){
  return !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame;
}

function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(101, 605, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 101);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(556, 140, {140:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 556);
function $cancelAnimationFrame(this$static, requestId){
  $remove_11(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {620:1, 3:1}, 141, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray_1(this$static.animationRequests, curAnimations), 620);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_11(this$static.animationRequests, requestId);
    requestId.callback.execute(duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(102, 605, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_6(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 102);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(65, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run_0();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 65);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(557, 65, {}, AnimationSchedulerImplTimer$1);
_.run_0 = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 557);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(141, 140, {140:1, 141:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 141);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(6, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 6);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(476, 6, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 476);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(475, 6, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 475);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(477, 6, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 477);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(478, 6, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 478);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(479, 6, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 479);
function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(480, 6, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 480);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(481, 6, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 481);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(482, 6, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 482);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(483, 6, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 483);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(484, 6, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 484);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(485, 6, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 485);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(486, 6, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 486);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(487, 6, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 487);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(488, 6, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 488);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(489, 6, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 489);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(490, 6, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 490);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(492, 6, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 492);
function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(491, 6, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 491);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(493, 6, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 493);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(494, 6, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 494);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(495, 6, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 495);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(496, 6, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 496);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(499, 6, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 499);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(497, 6, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 497);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(498, 6, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 498);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(500, 6, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 500);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(501, 6, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 501);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(502, 6, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 502);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(503, 6, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 503);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(508, 6, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 508);
function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(504, 6, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 504);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(507, 6, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 507);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(505, 6, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 505);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(506, 6, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 506);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(509, 6, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 509);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(510, 6, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 510);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(511, 6, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 511);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(512, 6, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 512);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(513, 6, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 513);
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(515, 6, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 515);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(514, 6, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 514);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(516, 6, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 516);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  $putStringValue(ROLES_MAP, 'region', REGION);
  $putStringValue(ROLES_MAP, 'alert', ALERT);
  $putStringValue(ROLES_MAP, 'dialog', DIALOG);
  $putStringValue(ROLES_MAP, 'alertdialog', ALERTDIALOG);
  $putStringValue(ROLES_MAP, 'application', APPLICATION);
  $putStringValue(ROLES_MAP, 'document', DOCUMENT);
  $putStringValue(ROLES_MAP, 'article', ARTICLE);
  $putStringValue(ROLES_MAP, 'banner', BANNER);
  $putStringValue(ROLES_MAP, 'button', BUTTON);
  $putStringValue(ROLES_MAP, 'checkbox', CHECKBOX);
  $putStringValue(ROLES_MAP, 'gridcell', GRIDCELL);
  $putStringValue(ROLES_MAP, 'columnheader', COLUMNHEADER);
  $putStringValue(ROLES_MAP, 'group', GROUP);
  $putStringValue(ROLES_MAP, 'combobox', COMBOBOX);
  $putStringValue(ROLES_MAP, 'complementary', COMPLEMENTARY);
  $putStringValue(ROLES_MAP, 'contentinfo', CONTENTINFO);
  $putStringValue(ROLES_MAP, 'definition', DEFINITION);
  $putStringValue(ROLES_MAP, 'list', LIST);
  $putStringValue(ROLES_MAP, 'directory', DIRECTORY);
  $putStringValue(ROLES_MAP, 'form', FORM);
  $putStringValue(ROLES_MAP, 'grid', GRID);
  $putStringValue(ROLES_MAP, 'heading', HEADING);
  $putStringValue(ROLES_MAP, 'img', IMG);
  $putStringValue(ROLES_MAP, 'link', LINK);
  $putStringValue(ROLES_MAP, 'listbox', LISTBOX);
  $putStringValue(ROLES_MAP, 'listitem', LISTITEM);
  $putStringValue(ROLES_MAP, 'log', LOG);
  $putStringValue(ROLES_MAP, 'main', MAIN);
  $putStringValue(ROLES_MAP, 'marquee', MARQUEE);
  $putStringValue(ROLES_MAP, 'math', MATH);
  $putStringValue(ROLES_MAP, 'menu', MENU);
  $putStringValue(ROLES_MAP, 'menubar', MENUBAR);
  $putStringValue(ROLES_MAP, 'menuitem', MENUITEM);
  $putStringValue(ROLES_MAP, 'menuitemcheckbox', MENUITEMCHECKBOX);
  $putStringValue(ROLES_MAP, 'option', OPTION);
  $putStringValue(ROLES_MAP, 'radio', RADIO);
  $putStringValue(ROLES_MAP, 'menuitemradio', MENUITEMRADIO);
  $putStringValue(ROLES_MAP, 'navigation', NAVIGATION);
  $putStringValue(ROLES_MAP, 'note', NOTE);
  $putStringValue(ROLES_MAP, 'presentation', PRESENTATION);
  $putStringValue(ROLES_MAP, 'progressbar', PROGRESSBAR);
  $putStringValue(ROLES_MAP, 'radiogroup', RADIOGROUP);
  $putStringValue(ROLES_MAP, 'row', ROW);
  $putStringValue(ROLES_MAP, 'rowgroup', ROWGROUP);
  $putStringValue(ROLES_MAP, 'rowheader', ROWHEADER);
  $putStringValue(ROLES_MAP, 'search', SEARCH);
  $putStringValue(ROLES_MAP, 'separator', SEPARATOR);
  $putStringValue(ROLES_MAP, 'scrollbar', SCROLLBAR);
  $putStringValue(ROLES_MAP, 'slider', SLIDER);
  $putStringValue(ROLES_MAP, 'spinbutton', SPINBUTTON);
  $putStringValue(ROLES_MAP, 'status', STATUS);
  $putStringValue(ROLES_MAP, 'tab', TAB);
  $putStringValue(ROLES_MAP, 'tablist', TABLIST);
  $putStringValue(ROLES_MAP, 'tabpanel', TABPANEL);
  $putStringValue(ROLES_MAP, 'textbox', TEXTBOX);
  $putStringValue(ROLES_MAP, 'timer', TIMER);
  $putStringValue(ROLES_MAP, 'toolbar', TOOLBAR);
  $putStringValue(ROLES_MAP, 'tooltip', TOOLTIP);
  $putStringValue(ROLES_MAP, 'tree', TREE);
  $putStringValue(ROLES_MAP, 'treegrid', TREEGRID);
  $putStringValue(ROLES_MAP, 'treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(519, 6, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 519);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(517, 6, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 517);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(518, 6, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 518);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(520, 6, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 520);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(521, 6, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 521);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(522, 6, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 522);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(523, 6, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 523);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(524, 6, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 524);
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(525, 6, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 525);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(528, 6, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 528);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(526, 6, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 526);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(527, 6, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 527);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(529, 6, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 529);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(530, 6, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 530);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(531, 6, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 531);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(532, 6, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 532);
function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(535, 6, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 535);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(533, 6, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 533);
function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(534, 6, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 534);
function Duration(){
  this.start_0 = now_1();
}

defineClass(156, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 156);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $clinit_Throwable(){
  $clinit_Throwable = emptyMethod;
  UNITIALIZED = new Object_0;
}

function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 59, 0, 0, 1);
  this$static.backingJsObject = UNITIALIZED;
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 7, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    maskUndefined(this$static.backingJsObject) !== maskUndefined(UNITIALIZED) && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_1, 7, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString_0(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(7, 1, $intern_5);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:toNative(this.detailMessage).replace(new $wnd.RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_2(){
  return $toString_0(this, this.getMessage());
}
;
_.disableSuppression = false;
_.writetableStackTrace = true;
var UNITIALIZED;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 7);
defineClass(10, 7, {3:1, 10:1, 7:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 10);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  $clinit_Throwable();
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(13, 10, $intern_6, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 13);
defineClass(194, 13, $intern_6);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 194);
defineClass(195, 194, $intern_6);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 195);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  $clinit_Throwable();
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = ($clinit_String() , e == null?'null':toString__Ljava_lang_String___devirtual$(e));
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(80, 195, {80:1, 3:1, 10:1, 13:1, 7:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 80);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(562, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 562);
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
  TOP_WINDOW = $wnd;
}

var TOP_WINDOW;
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0_0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 7)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $actuallyLog(handler.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
    return;
  }
  reportToBrowser(instanceOf(e, 80)?castTo(e, 80).getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new VSchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i_0, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i_0 = 0; i_0 < length_0; i_0++) {
      t = tasks[i_0];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i_0] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i_0 = 0; i_0 < length_0; i_0++) {
      !!tasks[i_0] && (newTasks[newTasks.length] = tasks[i_0] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i_0, j, t;
  for (i_0 = 0 , j = tasks.length; i_0 < j; i_0++) {
    t = tasks[i_0];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(291, 562, {});
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 291);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(292, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 292);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(293, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 293);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i_0, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_0(stackTrace.length, 5);
  for (i_0 = numberOfFramesToSearch - 1; i_0 >= 0; i_0--) {
    if ($equals_0(stackTrace[i_0].methodName, dropFrameUntilFnName) || $equals_0(stackTrace[i_0].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i_0 + 1 && (stackTrace.splice(0, i_0 + 1) , undefined);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(572, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 572);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(196, 572, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i_0, j;
      for (i_0 = 0 , j = withThisName.length; i_0 < j; i_0++) {
        if (withThisName[i_0] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i_0, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 59, length_0, 0, 1);
  for (i_0 = 0; i_0 < length_0; i_0++) {
    stackTrace[i_0] = new StackTraceElement(stack_0[i_0], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 196);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (($clinit_String() , stString).length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_0(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1, toReturn.length - (index_0 + 1)));
  (toReturn.length == 0 || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(573, 572, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i_0, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 59, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i_0 = 1; i_0 < length_0; i_0++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i_0]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 573);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(197, 573, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 197);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $getChild(this$static, index_0){
  return this$static.childNodes[index_0];
}

function $getParentElement(this$static){
  return $getParentElement_0(($clinit_DOMImpl() , this$static));
}

function $insertAfter(this$static, newChild, refChild){
  var next;
  next = !refChild?null:refChild.nextSibling;
  return !next?this$static.appendChild(newChild):this$static.insertBefore(newChild, next);
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $insertFirst(this$static, child){
  return $insertBefore(this$static, child, this$static.firstChild);
}

function $isOrHasChild(this$static, child){
  return ($clinit_DOMImpl() , impl_0).isOrHasChild(this$static, child);
}

function $removeAllChildren(this$static){
  while (this$static.lastChild) {
    this$static.removeChild(this$static.lastChild);
  }
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  var parent_0;
  parent_0 = $getParentElement_0(($clinit_DOMImpl() , this$static));
  !!parent_0 && parent_0.removeChild(this$static);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = this$static.className || '';
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    ($clinit_String() , oldClassName).length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function $getAbsoluteBottom(this$static){
  return ($clinit_DOMImpl() , impl_0).getAbsoluteTop(this$static) + ((this$static.offsetHeight || 0) | 0);
}

function $getAbsoluteLeft(this$static){
  return ($clinit_DOMImpl() , impl_0).getAbsoluteLeft(this$static);
}

function $getAbsoluteRight(this$static){
  return ($clinit_DOMImpl() , impl_0).getAbsoluteLeft(this$static) + ((this$static.offsetWidth || 0) | 0);
}

function $getAbsoluteTop(this$static){
  return ($clinit_DOMImpl() , impl_0).getAbsoluteTop(this$static);
}

function $getFirstChildElement(this$static){
  return $getFirstChildElement_0(($clinit_DOMImpl() , this$static));
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getScrollLeft(this$static){
  return ($clinit_DOMImpl() , impl_0).getScrollLeft_0(this$static);
}

function $getString(this$static){
  return ($clinit_DOMImpl() , impl_0).toString_1(this$static);
}

function $hasClassName(this$static, className){
  var idx;
  className = trimClassName(className);
  idx = indexOfName(this$static.className || '', className);
  return idx != -1;
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = this$static.className || '';
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(($clinit_String() , oldStyle).substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setInnerText(this$static, text_0){
  ($clinit_DOMImpl() , impl_0).setInnerText(this$static, text_0);
}

function $setScrollLeft(this$static, scrollLeft){
  ($clinit_DOMImpl() , impl_0).setScrollLeft(this$static, scrollLeft);
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = ($clinit_String() , nameList).indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  impl_0 = castTo(create_com_google_gwt_dom_client_DOMImpl(), 62);
}

function $getFirstChildElement_0(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement_0(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $getPreviousSiblingElement(elem){
  var sib = elem.previousSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.previousSibling;
  return sib;
}

function $getSubPixelAbsoluteLeft(elem){
  var left = 0;
  var curr = elem;
  while (curr.offsetParent) {
    left -= curr.scrollLeft;
    curr = curr.parentNode;
  }
  while (elem) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function $getSubPixelAbsoluteTop(elem){
  var top_0 = 0;
  var curr = elem;
  while (curr.offsetParent) {
    top_0 -= curr.scrollTop;
    curr = curr.parentNode;
  }
  while (elem) {
    top_0 += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return top_0;
}

function toInt32(val){
  $clinit_DOMImpl();
  return val | 0;
}

defineClass(62, 1, $intern_7);
_.createButtonElement = function createButtonElement(doc, type_0){
  var e = doc.createElement('BUTTON');
  e.type = type_0;
  return e;
}
;
_.createElement_0 = function createElement(doc, tag){
  return doc.createElement(tag);
}
;
_.createScriptElement = function createScriptElement(doc, source){
  var elem;
  elem = this.createElement_0(doc, 'script');
  elem.text = source;
  return elem;
}
;
_.eventGetButton = function eventGetButton(evt){
  return evt.button | 0;
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget(event_0){
  return event_0.currentTarget;
}
;
_.eventStopPropagation = function eventStopPropagation(evt){
  evt.stopPropagation();
}
;
_.getAbsoluteLeft = function getAbsoluteLeft(elem){
  return toInt32($getSubPixelAbsoluteLeft(elem));
}
;
_.getAbsoluteTop = function getAbsoluteTop(elem){
  return toInt32($getSubPixelAbsoluteTop(elem));
}
;
_.getBodyOffsetLeft = function getBodyOffsetLeft(doc){
  return 0;
}
;
_.getBodyOffsetTop = function getBodyOffsetTop(doc){
  return 0;
}
;
_.getNumericStyleProperty = function getNumericStyleProperty(style, name_0){
  return style[name_0];
}
;
_.getScrollLeft = function getScrollLeft(doc){
  return $getScrollLeft($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body);
}
;
_.getScrollLeft_0 = function getScrollLeft_0(elem){
  return toInt32(elem.scrollLeft || 0);
}
;
_.getScrollTop = function getScrollTop(doc){
  return (($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0) | 0;
}
;
_.getTabIndex = function getTabIndex(elem){
  return elem.tabIndex;
}
;
_.getTagName = function getTagName(elem){
  return elem.tagName;
}
;
_.setInnerText = function setInnerText(elem, text_0){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  text_0 != null && elem.appendChild(elem.ownerDocument.createTextNode(text_0));
}
;
_.setScrollLeft = function setScrollLeft(elem, left){
  elem.scrollLeft = left;
}
;
_.toString_1 = function toString_3(elem){
  return elem.outerHTML;
}
;
var impl_0;
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 62);
function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

defineClass(597, 62, $intern_7);
_.createButtonElement = function createButtonElement_0(doc, type_0){
  return doc.createElement("<BUTTON type='" + type_0 + "'><\/BUTTON>");
}
;
_.createElement_0 = function createElement_0(doc, tagName){
  var container, elem;
  if (($clinit_String() , tagName).indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    container.innerHTML = '<' + tagName + '/>' || '';
    elem = $getFirstChildElement_0(($clinit_DOMImpl() , container));
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget_0(event_0){
  return currentEventTarget;
}
;
_.eventGetRelatedTarget = function eventGetRelatedTarget(evt){
  return evt.relatedTarget || (evt.type == 'mouseout'?evt.toElement:evt.fromElement);
}
;
_.eventGetTarget = function eventGetTarget(evt){
  return evt.srcElement;
}
;
_.eventPreventDefault = function eventPreventDefault(evt){
  evt.returnValue = false;
}
;
_.eventStopPropagation = function eventStopPropagation_0(evt){
  evt.cancelBubble = true;
}
;
_.getBodyOffsetLeft = function getBodyOffsetLeft_0(doc){
  return ($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).clientLeft;
}
;
_.getBodyOffsetTop = function getBodyOffsetTop_0(doc){
  return ($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).clientTop;
}
;
_.getNumericStyleProperty = function getNumericStyleProperty_0(style, name_0){
  return typeof style[name_0] == 'number'?'' + style[name_0]:style[name_0];
}
;
_.getTagName = function getTagName_0(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}
;
_.isOrHasChild = function isOrHasChild(parent_0, child){
  return isOrHasChildImpl(parent_0, child);
}
;
_.setInnerText = function setInnerText_0(elem, text_0){
  elem.innerText = text_0 || '';
}
;
var currentEventTarget;
var Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplTrident', 597);
function DOMImplIE8(){
  $clinit_DOMImpl();
}

defineClass(428, 597, $intern_7, DOMImplIE8);
_.getAbsoluteLeft = function getAbsoluteLeft_0(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectLeft(elem) + impl_0.getScrollLeft(doc);
}
;
_.getAbsoluteTop = function getAbsoluteTop_0(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectTop(elem) + impl_0.getScrollTop(doc);
}
;
_.getScrollLeft_0 = function getScrollLeft_1(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -toInt32(elem.scrollLeft || 0);
  }
  return toInt32(elem.scrollLeft || 0);
}
;
_.setScrollLeft = function setScrollLeft_0(elem, left){
  elem.currentStyle.direction == 'rtl' && (left = -left);
  elem.scrollLeft = left;
}
;
var Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE8', 428);
defineClass(598, 62, $intern_7);
_.eventGetButton = function eventGetButton_0(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}
;
_.eventGetRelatedTarget = function eventGetRelatedTarget_0(evt){
  return evt.relatedTarget;
}
;
_.eventGetTarget = function eventGetTarget_0(evt){
  return evt.target;
}
;
_.eventPreventDefault = function eventPreventDefault_0(evt){
  evt.preventDefault();
}
;
_.isOrHasChild = function isOrHasChild_0(parent_0, child){
  return parent_0.contains(child);
}
;
_.setInnerText = function setInnerText_1(elem, text_0){
  elem.textContent = text_0 || '';
}
;
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 598);
function $isRTL(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl';
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

defineClass(599, 598, $intern_7);
_.createButtonElement = function createButtonElement_1(doc, type_0){
  var e = doc.createElement('BUTTON');
  e.setAttribute('type', type_0);
  return e;
}
;
_.createScriptElement = function createScriptElement_0(doc, source){
  var elem;
  elem = doc.createElement('script');
  impl_0.setInnerText(elem, source);
  return elem;
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget_1(event_0){
  return event_0.currentTarget || $wnd;
}
;
_.getAbsoluteLeft = function getAbsoluteLeft_1(elem){
  var left, rect;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  left = rect?rect.left + $getScrollLeft(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return $clinit_DOMImpl() , left | 0;
}
;
_.getAbsoluteTop = function getAbsoluteTop_1(elem){
  var rect, top_0, top_1;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return $clinit_DOMImpl() , top_0 | 0;
}
;
_.getScrollLeft = function getScrollLeft_2(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}
;
_.getScrollLeft_0 = function getScrollLeft_3(elem){
  if (!equalsIgnoreCase('body', impl_0.getTagName(elem)) && $isRTL(elem)) {
    return toInt32(elem.scrollLeft || 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return toInt32(elem.scrollLeft || 0);
}
;
_.getScrollTop = function getScrollTop_0(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}
;
_.getTabIndex = function getTabIndex_0(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}
;
_.setScrollLeft = function setScrollLeft_1(elem, left){
  !equalsIgnoreCase('body', impl_0.getTagName(elem)) && $isRTL(elem) && (left += ((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  elem.scrollLeft = left;
}
;
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 599);
function $getBoundingClientRectLeft_0(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop_0(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getParentOffsetDelta(elem){
  var offsetParent = elem.offsetParent;
  if (offsetParent) {
    return offsetParent.offsetWidth - offsetParent.clientWidth;
  }
  return 0;
}

function DOMImplIE9(){
  $clinit_DOMImpl();
}

defineClass(431, 599, $intern_7, DOMImplIE9);
_.getAbsoluteLeft = function getAbsoluteLeft_2(elem){
  var left;
  left = $getBoundingClientRectLeft_0(elem) + $wnd.pageXOffset;
  $isRTL(elem) && (left += $getParentOffsetDelta(elem));
  return $clinit_DOMImpl() , left | 0;
}
;
_.getAbsoluteTop = function getAbsoluteTop_2(elem){
  return toInt32($getBoundingClientRectTop_0(elem) + $wnd.pageYOffset);
}
;
_.getNumericStyleProperty = function getNumericStyleProperty_1(style, name_0){
  return typeof style[name_0] == 'number'?'' + style[name_0]:style[name_0];
}
;
_.getScrollLeft = function getScrollLeft_4(doc){
  return toInt32($wnd.pageXOffset);
}
;
_.getScrollLeft_0 = function getScrollLeft_5(elem){
  var left;
  left = toInt32(elem.scrollLeft || 0);
  $isRTL(elem) && (left = -left);
  return left;
}
;
_.getScrollTop = function getScrollTop_1(doc){
  return toInt32($wnd.pageYOffset);
}
;
_.getTabIndex = function getTabIndex_1(elem){
  return elem.tabIndex < $intern_3?elem.tabIndex:-(elem.tabIndex % $intern_3) - 1;
}
;
_.isOrHasChild = function isOrHasChild_1(parent_0, child){
  return isOrHasChildImpl(parent_0, child);
}
;
_.setScrollLeft = function setScrollLeft_2(elem, left){
  $isRTL(elem) && (left = -left);
  elem.scrollLeft = left;
}
;
var Lcom_google_gwt_dom_client_DOMImplIE9_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE9', 431);
function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $isRTL_0(elem){
  var style = elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  return style.direction == 'rtl';
}

function DOMImplMozilla(){
  $clinit_DOMImpl();
}

function getGeckoVersion(){
  var result = /rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());
  if (result && result.length >= 3) {
    var version = parseInt(result[1]) * 1000000 + parseInt(result[2]) * 1000 + parseInt(result.length >= 5 && !isNaN(result[4])?result[4]:0);
    return version;
  }
  return -1;
}

defineClass(430, 598, $intern_7, DOMImplMozilla);
_.eventGetRelatedTarget = function eventGetRelatedTarget_1(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}
;
_.getAbsoluteLeft = function getAbsoluteLeft_3(elem){
  return $getAbsoluteLeftImpl($getViewportElement(elem.ownerDocument), elem);
}
;
_.getAbsoluteTop = function getAbsoluteTop_3(elem){
  return $getAbsoluteTopImpl($getViewportElement(elem.ownerDocument), elem);
}
;
_.getBodyOffsetLeft = function getBodyOffsetLeft_1(doc){
  var style = $wnd.getComputedStyle(doc.documentElement, null);
  if (style == null) {
    return 0;
  }
  return parseInt(style.marginLeft, 10) + parseInt(style.borderLeftWidth, 10);
}
;
_.getBodyOffsetTop = function getBodyOffsetTop_1(doc){
  var style = $wnd.getComputedStyle(doc.documentElement, null);
  if (style == null) {
    return 0;
  }
  return parseInt(style.marginTop, 10) + parseInt(style.borderTopWidth, 10);
}
;
_.getScrollLeft_0 = function getScrollLeft_6(elem){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  if (!(geckoVersion != -1 && geckoVersion >= 1009000) && $isRTL_0(elem)) {
    return toInt32(elem.scrollLeft || 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return toInt32(elem.scrollLeft || 0);
}
;
_.isOrHasChild = function isOrHasChild_2(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}
;
_.setScrollLeft = function setScrollLeft_3(elem, left){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  !(geckoVersion != -1 && geckoVersion >= 1009000) && $isRTL_0(elem) && (left += ((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  elem.scrollLeft = left;
}
;
_.toString_1 = function toString_4(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}
;
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 430);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

defineClass(429, 599, $intern_7, DOMImplWebkit);
_.eventGetTarget = function eventGetTarget_1(evt){
  var target = evt.target;
  target && target.nodeType == 3 && (target = target.parentNode);
  return target;
}
;
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 429);
function $createDivElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'div');
}

function $createElement(this$static, tagName){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, tagName);
}

function $createIFrameElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'iframe');
}

function $createPushButtonElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createButtonElement(this$static, 'button');
}

function $createScriptElement(this$static, source){
  return ($clinit_DOMImpl() , impl_0).createScriptElement(this$static, source);
}

function $createTBodyElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'tbody');
}

function $createTDElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'td');
}

function $createTFootElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'tfoot');
}

function $createTHeadElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'thead');
}

function $createTRElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'tr');
}

function $createTableElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'table');
}

function $getBodyOffsetLeft(this$static){
  return ($clinit_DOMImpl() , impl_0).getBodyOffsetLeft(this$static);
}

function $getBodyOffsetTop(this$static){
  return ($clinit_DOMImpl() , impl_0).getBodyOffsetTop(this$static);
}

function $getClientHeight(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return (($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollLeft_0(this$static){
  return ($clinit_DOMImpl() , impl_0).getScrollLeft(this$static);
}

function $getScrollTop(this$static){
  return ($clinit_DOMImpl() , impl_0).getScrollTop(this$static);
}

function $getScrollWidth(this$static){
  return (($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $getViewportElement(this$static){
  return $equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function $getEventTarget(this$static){
  return ($clinit_DOMImpl() , impl_0).eventGetTarget(this$static);
}

function $getKeyCode(this$static){
  return ($clinit_DOMImpl() , this$static).keyCode | 0;
}

function $getShiftKey(this$static){
  return !!($clinit_DOMImpl() , this$static).shiftKey;
}

function $getTouches(this$static){
  return ($clinit_DOMImpl() , this$static).touches;
}

function $getType(this$static){
  return ($clinit_DOMImpl() , this$static).type;
}

function $preventDefault(this$static){
  ($clinit_DOMImpl() , impl_0).eventPreventDefault(this$static);
}

function $stopPropagation(this$static){
  ($clinit_DOMImpl() , impl_0).eventStopPropagation(this$static);
}

function $getDisplay(this$static){
  return ($clinit_DOMImpl() , this$static)['display'];
}

function $getHeight(this$static){
  return ($clinit_DOMImpl() , this$static)['height'];
}

function $getOpacity(this$static){
  return ($clinit_DOMImpl() , this$static)['opacity'];
}

function $getProperty(this$static, name_0){
  return ($clinit_DOMImpl() , this$static)[name_0];
}

function $getZIndex(this$static){
  return ($clinit_DOMImpl() , impl_0).getNumericStyleProperty(this$static, 'zIndex');
}

function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(4, 1, {3:1, 5:1, 4:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 4));
}
;
_.equals = function equals_0(other){
  return this === other;
}
;
_.hashCode = function hashCode_1(){
  return getObjectIdentityHashCode(this);
}
;
_.toString_0 = function toString_5(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_Style$BorderStyle(){
  $clinit_Style$BorderStyle = emptyMethod;
  NONE = new Style$BorderStyle$1;
  DOTTED = new Style$BorderStyle$2;
  DASHED = new Style$BorderStyle$3;
  HIDDEN = new Style$BorderStyle$4;
  SOLID = new Style$BorderStyle$5;
}

function Style$BorderStyle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Style$BorderStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, 1), $intern_1, 42, 0, [NONE, DOTTED, DASHED, HIDDEN, SOLID]);
}

defineClass(42, 4, $intern_8);
var DASHED, DOTTED, HIDDEN, NONE, SOLID;
var Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle', 42, values_0);
function Style$BorderStyle$1(){
  Style$BorderStyle.call(this, 'NONE', 0);
}

defineClass(379, 42, $intern_8, Style$BorderStyle$1);
var Lcom_google_gwt_dom_client_Style$BorderStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/1', 379, null);
function Style$BorderStyle$2(){
  Style$BorderStyle.call(this, 'DOTTED', 1);
}

defineClass(380, 42, $intern_8, Style$BorderStyle$2);
var Lcom_google_gwt_dom_client_Style$BorderStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/2', 380, null);
function Style$BorderStyle$3(){
  Style$BorderStyle.call(this, 'DASHED', 2);
}

defineClass(381, 42, $intern_8, Style$BorderStyle$3);
var Lcom_google_gwt_dom_client_Style$BorderStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/3', 381, null);
function Style$BorderStyle$4(){
  Style$BorderStyle.call(this, 'HIDDEN', 3);
}

defineClass(382, 42, $intern_8, Style$BorderStyle$4);
var Lcom_google_gwt_dom_client_Style$BorderStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/4', 382, null);
function Style$BorderStyle$5(){
  Style$BorderStyle.call(this, 'SOLID', 4);
}

defineClass(383, 42, $intern_8, Style$BorderStyle$5);
var Lcom_google_gwt_dom_client_Style$BorderStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/5', 383, null);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE_0 = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
  FLEX = new Style$Display$18;
  INLINE_FLEX = new Style$Display$19;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Display();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_1, 11, 0, [NONE_0, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL, FLEX, INLINE_FLEX]);
}

defineClass(11, 4, $intern_9);
var BLOCK, FLEX, INITIAL, INLINE, INLINE_BLOCK, INLINE_FLEX, INLINE_TABLE, LIST_ITEM, NONE_0, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 11, values_1);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(384, 11, $intern_9, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 384, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(393, 11, $intern_9, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 393, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(394, 11, $intern_9, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 394, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(395, 11, $intern_9, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 395, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(396, 11, $intern_9, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 396, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(397, 11, $intern_9, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 397, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(398, 11, $intern_9, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 398, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(399, 11, $intern_9, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 399, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(400, 11, $intern_9, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 400, null);
function Style$Display$18(){
  Style$Display.call(this, 'FLEX', 17);
}

defineClass(401, 11, $intern_9, Style$Display$18);
var Lcom_google_gwt_dom_client_Style$Display$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/18', 401, null);
function Style$Display$19(){
  Style$Display.call(this, 'INLINE_FLEX', 18);
}

defineClass(402, 11, $intern_9, Style$Display$19);
var Lcom_google_gwt_dom_client_Style$Display$19_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/19', 402, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(385, 11, $intern_9, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 385, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(386, 11, $intern_9, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 386, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(387, 11, $intern_9, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 387, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(388, 11, $intern_9, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 388, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(389, 11, $intern_9, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 389, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(390, 11, $intern_9, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 390, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(391, 11, $intern_9, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 391, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(392, 11, $intern_9, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 392, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 55, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(55, 4, $intern_10);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 55, values_2);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(403, 55, $intern_10, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 403, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(404, 55, $intern_10, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 404, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(405, 55, $intern_10, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 405, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(406, 55, $intern_10, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 406, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 56, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(56, 4, $intern_11);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 56, values_3);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(407, 56, $intern_11, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 407, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(408, 56, $intern_11, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 408, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(409, 56, $intern_11, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 409, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(410, 56, $intern_11, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 410, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 26, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(26, 4, $intern_12);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 26, values_4);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(370, 26, $intern_12, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 370, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(371, 26, $intern_12, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 371, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(372, 26, $intern_12, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 372, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(373, 26, $intern_12, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 373, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(374, 26, $intern_12, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 374, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(375, 26, $intern_12, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 375, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(376, 26, $intern_12, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 376, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(377, 26, $intern_12, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 377, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(378, 26, $intern_12, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 378, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 85, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(85, 4, $intern_13);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 85, values_5);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(411, 85, $intern_13, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 411, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(412, 85, $intern_13, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 412, null);
function $setColSpan(this$static, colSpan){
  this$static.colSpan = colSpan;
}

function $getClientX(this$static){
  return toInt32(($clinit_DOMImpl() , this$static).clientX || 0);
}

function $getClientY(this$static){
  return toInt32(($clinit_DOMImpl() , this$static).clientY || 0);
}

function $getPageX(this$static){
  return toInt32(($clinit_DOMImpl() , this$static).pageX || 0);
}

function $getPageY(this$static){
  return toInt32(($clinit_DOMImpl() , this$static).pageY || 0);
}

defineClass(577, 1, {});
_.toString_0 = function toString_6(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 577);
function $overrideSource(this$static, source){
  this$static.source_0 = source;
}

defineClass(578, 577, {});
_.getSource = function getSource(){
  return this.source_0;
}
;
_.revive = function revive(){
  this.dead = false;
  this.source_0 = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 578);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, ($clinit_DOMImpl() , nativeEvent).type), 33);
    if (types) {
      for (type$iterator = types.iterator_0(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_1(), 71);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(590, 578, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 590);
function $clinit_BlurEvent(){
  $clinit_BlurEvent = emptyMethod;
  TYPE = new DomEvent$Type('blur', new BlurEvent);
}

function BlurEvent(){
}

defineClass(474, 590, {}, BlurEvent);
_.dispatch = function dispatch(handler){
  castTo(handler, 614);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'BlurEvent', 474);
defineClass(592, 590, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 592);
defineClass(593, 592, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 593);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(436, 593, {}, ClickEvent);
_.dispatch = function dispatch_0(handler){
  castTo(handler, 181).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 436);
defineClass(246, 1, {});
_.hashCode = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_7(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 246);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(38, 246, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 38);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo($unsafeGet(registered, eventName), 33);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(71, 38, {71:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 71);
defineClass(591, 590, {});
var Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyEvent', 591);
defineClass(595, 591, {});
var Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyCodeEvent', 595);
function $clinit_KeyDownEvent(){
  $clinit_KeyDownEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('keydown', new KeyDownEvent);
}

function $dispatch(this$static, handler){
  $getKeyCode(this$static.nativeEvent) == 27 && $hide_0(handler.this$11.overlay, false);
}

function KeyDownEvent(){
}

defineClass(420, 595, {}, KeyDownEvent);
_.dispatch = function dispatch_1(handler){
  $dispatch(this, castTo(handler, 615));
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyDownEvent', 420);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(446, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 446);
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_2) {
    event_0 = new CloseEvent_0;
    source.fireEvent_0(event_0);
  }
}

defineClass(357, 578, {}, CloseEvent_0);
_.dispatch = function dispatch_2(handler){
  castTo(handler, 182).onClose(this);
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 357);
function ResizeEvent(){
}

function fire_1(source){
  var event_0;
  if (TYPE_3) {
    event_0 = new ResizeEvent;
    $fireEvent(source, event_0);
  }
}

defineClass(545, 578, {}, ResizeEvent);
_.dispatch = function dispatch_3(handler){
  castTo(handler, 613);
  $onResize();
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 545);
function ValueChangeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_4) {
    event_0 = new ValueChangeEvent;
    $fireEvent(source.handlers, event_0);
  }
}

defineClass(471, 578, {}, ValueChangeEvent);
_.dispatch = function dispatch_4(handler){
  castTo(handler, 610).onValueChange(this);
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 471);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.getSource();
  $overrideSource(event_0, this$static.source_0);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 83)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source_0 = null):(event_0.source_0 = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source_0 = source;
}

defineClass(51, 1, {22:1}, HandlerManager, HandlerManager_0);
_.fireEvent_0 = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 51);
defineClass(579, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 579);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_6(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  if (!handler) {
    throw toJs(new NullPointerException_0('Cannot add a null handler'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(castTo(handler, 17));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 7)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put_2(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_1(handler);
  removed && l.isEmpty() && (sourceMap = castTo($get_3(this$static.map_0, type_0), 45) , castTo(sourceMap.remove_2(source), 33) , sourceMap.isEmpty() && $remove_6(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_3(this$static.map_0, type_0), 45);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_2(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_1(source), 33);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_3(this$static.map_0, type_0), 45);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_1(source), 33);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_4(c$iterator), 561);
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(278, 579, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 278);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(279, 278, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 279);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(434, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 434);
function UmbrellaException(causes){
  $clinit_Throwable();
  var cause, cause$iterator, i_0;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:castTo(causes.iterator_0().next_1(), 7));
  this.causes = causes;
  i_0 = 0;
  for (cause$iterator = causes.iterator_0(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_1(), 7);
    if (i_0++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator_0(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_1(), 7);
    first?(first = false):(b.string += '; ' , b);
    $append_1(b, t.getMessage());
  }
  return b.string;
}

defineClass(83, 13, $intern_14, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 83);
function UmbrellaException_0(causes){
  $clinit_Throwable();
  UmbrellaException.call(this, causes);
}

defineClass(148, 83, $intern_14, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 148);
function throwIfNull(value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0('encodedURLComponent cannot be null'));
  }
}

function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && typeof value_0 === 'object';
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i_0 = 0; i_0 < length_0; ++i_0) {
    array[i_0] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_15;
  a1 = value_0 >> 22 & $intern_15;
  a2 = value_0 < 0?$intern_16:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_17 + a.h * $intern_18;
}

function compare_0(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_18) {
    a2 = round_int(value_0 / $intern_18);
    value_0 -= a2 * $intern_18;
  }
  a1 = 0;
  if (value_0 >= $intern_17) {
    a1 = round_int(value_0 / $intern_17);
    value_0 -= a1 * $intern_17;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_15 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_15 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_16 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_16;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_15, res1 & $intern_15, res2 & $intern_16);
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (compare_0(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_15 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_15 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_16 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_17 + a.h * $intern_18;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_15, $intern_15, 524287);
  MIN_VALUE = create0(0, 0, $intern_19);
  create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 7)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_17;
  }
  if (a2 == $intern_16) {
    return big_0.l + big_0.m * $intern_17 - $intern_18;
  }
  return big_0;
}

function eq(a, b){
  return compare_1(a, b) == 0;
}

function fromDouble_0(value_0){
  if (-17592186044416 < value_0 && value_0 < $intern_18) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_18;
    a3 = $intern_16;
  }
  a1 = round_int(value_0 / $intern_17);
  a0 = round_int(value_0 - a1 * $intern_17);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return a.l | a.m << 22;
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad_1();
  $clinit_LogConfiguration();
  $onModuleLoad();
  $addClassName($doc.body, 'valo');
}

function $getLevel(this$static){
  if (this$static.level) {
    return this$static.level;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level = newLevel;
}

defineClass(90, 1, {90:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 90);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(188, 90, {90:1}, ConsoleLogHandler);
_.publish = function publish(record){
  var msg, val;
  if (!window.console || ($getLevel(this) , $intern_20 > record.level.intValue())) {
    return;
  }
  msg = $format(this.formatter, record);
  val = record.level.intValue();
  val >= ($clinit_Level() , 1000)?(window.console.error(msg) , undefined):val >= 900?(window.console.warn(msg) , undefined):val >= 800?(window.console.info(msg) , undefined):(window.console.log(msg) , undefined);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 188);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(189, 90, {90:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 189);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl_1 = new LogConfiguration$LogConfigurationImplRegular;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl_1);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

function loggingIsEnabled(){
  $clinit_LogConfiguration();
  if (!impl_1) {
    return true;
  }
  return true;
}

var impl_1;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function $onUncaughtException(this$static, e){
  $actuallyLog(this$static.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
}

function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(187, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 187);
function $configureClientSideLogging(this$static){
  this$static.root = $ensureLogger(getLogManager(), '');
  this$static.root.useParentHandlers = false;
  $setLevels(this$static.root);
  $setDefaultHandlers(this$static.root);
}

function $setDefaultHandlers(l){
  var console_0, dev;
  console_0 = new ConsoleLogHandler;
  $add_6(l.handlers, console_0);
  dev = new DevelopmentModeLogHandler;
  $add_6(l.handlers, dev);
}

function $setLevels(l){
  var level, levelParam;
  levelParam = getParameter('logLevel');
  level = levelParam == null?null:parse_0(levelParam);
  level?(l.level = level):$setLevel_0(l, ($clinit_Level() , INFO));
}

function LogConfiguration$LogConfigurationImplRegular(){
}

defineClass(186, 1, {}, LogConfiguration$LogConfigurationImplRegular);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 186);
defineClass(600, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 600);
defineClass(601, 600, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 601);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_1(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append_1(s, $toString_5(date)) , s.string += ' ' , $append_1(s, event_0.loggerName) , s.string += '\n' , $append_1(s, event_0.level.getName()) , s.string += ': ' , s.string));
  $append_1(message, event_0.msg);
  if (this$static.showStackTraces && !!event_0.thrown) {
    message.string += '\n';
    $printStackTraceImpl(event_0.thrown, new StackTracePrintStream(message), '', '');
  }
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(171, 601, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 171);
defineClass(584, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 584);
function FilterOutputStream(out){
}

defineClass(151, 584, {}, FilterOutputStream);
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 151);
function PrintStream(out){
  FilterOutputStream.call(this, out);
}

defineClass(126, 151, {}, PrintStream);
_.println = function println(s){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 126);
function StackTracePrintStream(builder){
  PrintStream.call(this, new FilterOutputStream(null));
  this.builder = builder;
}

defineClass(432, 126, {}, StackTracePrintStream);
_.println = function println_0(str){
  $append_1(this.builder, str);
  $append_1(this.builder, '\n');
}
;
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 432);
function Browser(){
  this.ie6 = this.isIe6();
  this.ie8 = this.isIe8();
  this.ie9 = this.isIe9();
  this.mozilla = this.isMozilla();
  this.msie = this.isMsie();
  this.opera = this.isOpera_0();
  this.isWebkit();
  this.webkit = this.isWebkit();
}

defineClass(43, 1, $intern_21);
_.ie6 = false;
_.ie8 = false;
_.ie9 = false;
_.mozilla = false;
_.msie = false;
_.opera = false;
_.webkit = false;
var Lcom_google_gwt_query_client_Browser_2_classLit = createForClass('com.google.gwt.query.client', 'Browser', 43);
function Browser_gecko1_8(){
  Browser.call(this);
}

defineClass(454, 43, $intern_21, Browser_gecko1_8);
_.isIe6 = function isIe6(){
  return false;
}
;
_.isIe8 = function isIe8(){
  return false;
}
;
_.isIe9 = function isIe9(){
  return false;
}
;
_.isMozilla = function isMozilla(){
  return true;
}
;
_.isMsie = function isMsie(){
  return false;
}
;
_.isOpera_0 = function isOpera(){
  return false;
}
;
_.isWebkit = function isWebkit(){
  return false;
}
;
_.toString_0 = function toString_8(){
  return 'Browser: webkit=' + this.webkit + ' mozilla=' + this.mozilla + ' opera=' + this.opera + ' msie=' + this.msie + ' ie6=' + this.ie6 + ' ie8=' + this.ie8 + ' ie9=' + this.ie9;
}
;
var Lcom_google_gwt_query_client_Browser_1gecko1_18_2_classLit = createForClass('com.google.gwt.query.client', 'Browser_gecko1_8', 454);
function Browser_ie10(){
  Browser.call(this);
}

defineClass(456, 43, $intern_21, Browser_ie10);
_.isIe6 = function isIe6_0(){
  return false;
}
;
_.isIe8 = function isIe8_0(){
  return false;
}
;
_.isIe9 = function isIe9_0(){
  return false;
}
;
_.isMozilla = function isMozilla_0(){
  return false;
}
;
_.isMsie = function isMsie_0(){
  return true;
}
;
_.isOpera_0 = function isOpera_0(){
  return false;
}
;
_.isWebkit = function isWebkit_0(){
  return false;
}
;
_.toString_0 = function toString_9(){
  return 'Browser: webkit=' + this.webkit + ' mozilla=' + this.mozilla + ' opera=' + this.opera + ' msie=' + this.msie + ' ie6=' + this.ie6 + ' ie8=' + this.ie8 + ' ie9=' + this.ie9;
}
;
var Lcom_google_gwt_query_client_Browser_1ie10_2_classLit = createForClass('com.google.gwt.query.client', 'Browser_ie10', 456);
function Browser_ie8(){
  Browser.call(this);
}

defineClass(457, 43, $intern_21, Browser_ie8);
_.isIe6 = function isIe6_1(){
  return false;
}
;
_.isIe8 = function isIe8_1(){
  return true;
}
;
_.isIe9 = function isIe9_1(){
  return false;
}
;
_.isMozilla = function isMozilla_1(){
  return false;
}
;
_.isMsie = function isMsie_1(){
  return true;
}
;
_.isOpera_0 = function isOpera_1(){
  return false;
}
;
_.isWebkit = function isWebkit_1(){
  return false;
}
;
_.toString_0 = function toString_10(){
  return 'Browser: webkit=' + this.webkit + ' mozilla=' + this.mozilla + ' opera=' + this.opera + ' msie=' + this.msie + ' ie6=' + this.ie6 + ' ie8=' + this.ie8 + ' ie9=' + this.ie9;
}
;
var Lcom_google_gwt_query_client_Browser_1ie8_2_classLit = createForClass('com.google.gwt.query.client', 'Browser_ie8', 457);
function Browser_ie9(){
  Browser.call(this);
}

defineClass(458, 43, $intern_21, Browser_ie9);
_.isIe6 = function isIe6_2(){
  return false;
}
;
_.isIe8 = function isIe8_2(){
  return false;
}
;
_.isIe9 = function isIe9_2(){
  return true;
}
;
_.isMozilla = function isMozilla_2(){
  return false;
}
;
_.isMsie = function isMsie_2(){
  return true;
}
;
_.isOpera_0 = function isOpera_2(){
  return false;
}
;
_.isWebkit = function isWebkit_2(){
  return false;
}
;
_.toString_0 = function toString_11(){
  return 'Browser: webkit=' + this.webkit + ' mozilla=' + this.mozilla + ' opera=' + this.opera + ' msie=' + this.msie + ' ie6=' + this.ie6 + ' ie8=' + this.ie8 + ' ie9=' + this.ie9;
}
;
var Lcom_google_gwt_query_client_Browser_1ie9_2_classLit = createForClass('com.google.gwt.query.client', 'Browser_ie9', 458);
function Browser_safari(){
  Browser.call(this);
}

defineClass(455, 43, $intern_21, Browser_safari);
_.isIe6 = function isIe6_3(){
  return false;
}
;
_.isIe8 = function isIe8_3(){
  return false;
}
;
_.isIe9 = function isIe9_3(){
  return false;
}
;
_.isMozilla = function isMozilla_3(){
  return false;
}
;
_.isMsie = function isMsie_3(){
  return false;
}
;
_.isOpera_0 = function isOpera_3(){
  return false;
}
;
_.isWebkit = function isWebkit_3(){
  return true;
}
;
_.toString_0 = function toString_12(){
  return 'Browser: webkit=' + this.webkit + ' mozilla=' + this.mozilla + ' opera=' + this.opera + ' msie=' + this.msie + ' ie6=' + this.ie6 + ' ie8=' + this.ie8 + ' ie9=' + this.ie9;
}
;
var Lcom_google_gwt_query_client_Browser_1safari_2_classLit = createForClass('com.google.gwt.query.client', 'Browser_safari', 455);
function $f(this$static, args){
  this$static.arguments_0 = args;
  !!this$static.jso && $setArguments(this$static, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [$exec(this$static.jso, $getArgument(this$static))]));
  return $clinit_Boolean() , $clinit_Boolean() , TRUE;
}

function $fe(this$static){
  $fe_0(this$static, this$static.arguments_0);
}

function $fe_0(this$static, args){
  var e;
  if (uncaughtExceptionHandler) {
    try {
      return $f(this$static, args);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $onUncaughtException(uncaughtExceptionHandler, e);
      }
       else 
        throw toJs($e0);
    }
    return $clinit_Boolean() , $clinit_Boolean() , TRUE;
  }
  return $f(this$static, args);
}

function $getArgument(this$static){
  var o, objs;
  objs = $getArgumentArray(this$static);
  o = objs.length > 0?objs[0]:null;
  if (o != null) {
    return o;
  }
  return null;
}

function $getArgumentArray(this$static){
  var o;
  o = this$static.arguments_0;
  if (o != null) {
    return (getClass__Ljava_lang_Class___devirtual$(o).modifiers & 4) != 0?o:stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [o]);
  }
  return initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

function $setArguments(this$static, arguments_0){
  this$static.arguments_0 = arguments_0;
  return this$static;
}

defineClass(472, 1, {});
var Lcom_google_gwt_query_client_Function_2_classLit = createForClass('com.google.gwt.query.client', 'Function', 472);
function $clinit_GQuery(){
  $clinit_GQuery = emptyMethod;
  browser = castTo(create_com_google_gwt_query_client_Browser(), 43);
  console_1 = new ConsoleBrowser;
  document_0 = $doc;
  $clinit_Effects();
  $clinit_Events();
  new RegExp('^:(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\))?(?=[^\\-]|$)$');
  tagNameRegex = new RegExp('<([\\w:-]+)');
  $clinit_Widgets();
  window_0 = ($clinit_ScriptInjector() , TOP_WINDOW);
}

function $$init_0(this$static){
  this$static.elements = initUnidimensionalArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, $intern_1, 0, 0, 2, 1);
  this$static.nodeList = [];
}

function $(o){
  var r;
  $clinit_GQuery();
  var c, elms, i_0, jso, obj;
  if (o) {
    if (isElement_0(o)) {
      return new GQuery_0(castToJso(o));
    }
    if (o) {
      jso = o;
      if (isFunction(o)) {
        $fe(new JsUtils$JsFunction(o));
        return new GQuery_2(create_0(null));
      }
      if (!hasProperty(o, 'alert') && !isElement_0(o) && (Object.prototype.toString.call(o) == '[object Array]' || typeof o.length == 'number')) {
        c = o;
        elms = create_0(null);
        for (i_0 = 0; i_0 < c.length; i_0++) {
          obj = c[i_0] != null?Object(c[i_0]):null;
          !!obj && ($add(elms, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1), $intern_1, 0, 2, [obj])) , undefined);
        }
        return new GQuery_2(elms);
      }
      if (r = Object.prototype.toString.call(o) , r == '[object HTMLCollection]' || r == '[object NodeList]' || typeof o == 'object' && o.length && o[0] && o[0].tagName?true:false) {
        return new GQuery_1(o);
      }
      hasProperty(o, 'currentTarget') && (jso = ($clinit_DOMImpl() , impl_0).eventGetCurrentTarget(o));
      return new GQuery_0(jso);
    }
    throw toJs(new RuntimeException_0('Error: GQuery.$(Object o) could not wrap the type : ' + $getName(getClass_1(null)) + ' ' + null));
  }
  return new GQuery_2(create_0(null));
}

function $_0(ctx){
  $clinit_GQuery();
  var selector;
  if (toNative(selector = '.header-visible').length == 0) {
    return new GQuery_2(create_0(null));
  }
  if ($equals_0(($clinit_String() , selector).substr(0, 1), '<')) {
    return cleanHtmlString(!ctx || !isElement_0(ctx)?null:ctx.nodeType == 9?ctx:ctx.ownerDocument);
  }
  return $select(new GQuery, ctx);
}

function $get(this$static, i_0){
  var l;
  l = this$static.elements.length;
  if (i_0 >= 0 && i_0 < l) {
    return this$static.elements[i_0];
  }
  if (i_0 < 0 && l + i_0 >= 0) {
    return this$static.elements[l + i_0];
  }
  return null;
}

function $last(this$static){
  return $($get(this$static, this$static.elements.length - 1));
}

function $parentsUntil(this$static){
  var e, e$array, e$index, e$max, i_0, par, result;
  result = create_0(null);
  for (e$array = this$static.elements , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    i_0 = 0;
    par = e.parentNode;
    while (!!par && par != document_0) {
      $add(result, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1), $intern_1, 0, 2, [par]));
      par = par.parentNode;
      ++i_0;
    }
  }
  return new GQuery_2($unique(result));
}

function $remove(this$static){
  var e, e$array, e$index, e$max, parent_0, w;
  for (e$array = this$static.elements , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    w = getAssociatedWidget(e);
    w?$removeFromParent_0(w):(parent_0 = $getParentElement_0(($clinit_DOMImpl() , e)) , !!parent_0 && parent_0.removeChild(e));
  }
  return this$static;
}

function $select(this$static, context){
  var n;
  n = $select_0((!engine && (engine = new SelectorEngine) , engine), '.header-visible', !context?document_0:context);
  return $setArray(this$static, n);
}

function $setArray(this$static, list){
  var i_0, l;
  if (list) {
    $clear(this$static.nodeList);
    l = list.length;
    this$static.elements = initUnidimensionalArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, $intern_1, 0, l, 2, 1);
    for (i_0 = 0; i_0 < l; i_0++) {
      this$static.elements[i_0] = list[i_0];
      $add(this$static.nodeList, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1), $intern_1, 0, 2, [list[i_0]]));
    }
  }
  return this$static;
}

function $toString_1(this$static){
  var e, e$array, e$index, e$max, e2, elStr, r;
  r = '';
  for (e$array = this$static.elements , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    if (window_0 == e) {
      continue;
    }
    try {
      elStr = !!e && !$equals_0('HTML', (!e || !isElement_0(e)?null:e.nodeType == 9?e:e.ownerDocument).documentElement.nodeName)?(new XMLSerializer).serializeToString(e):($clinit_DOMImpl() , impl_0).toString_1(e);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e2 = $e0;
        elStr = '< ' + (!e?'null':e.nodeName) + '(gquery, error getting the element string representation: ' + e2.getMessage() + ')/>';
      }
       else 
        throw toJs($e0);
    }
    r += '' + elStr;
  }
  return r;
}

function GQuery(){
  $$init_0(this);
}

function GQuery_0(element){
  GQuery_2.call(this, element?[element]:[]);
}

function GQuery_1(list){
  $$init_0(this);
  $setArray(this, list);
}

function GQuery_2(nodes){
  GQuery_1.call(this, nodes);
}

function cleanHtmlString(doc){
  var depth, div, mResult, n, tag, wrapper, tableWrapper, selectWrapper, trWrapper;
  mResult = tagNameRegex.exec('.header-visible');
  if (!mResult) {
    return $(doc.createTextNode('.header-visible'));
  }
  tag = mResult[1];
  !wrapperMap && (tableWrapper = new GQuery$TagWrapper(1, '<table>', '<\/table>') , selectWrapper = new GQuery$TagWrapper(1, '<select multiple="multiple">', '<\/select>') , trWrapper = new GQuery$TagWrapper(3, '<table><tbody><tr>', '<\/tr><\/tbody><\/table>') , wrapperMap = {} , $put_1(wrapperMap, 'option', selectWrapper) , $put_1(wrapperMap, 'optgroup', selectWrapper) , $put_1(wrapperMap, 'legend', new GQuery$TagWrapper(1, '<fieldset>', '<\/fieldset>')) , $put_1(wrapperMap, 'thead', tableWrapper) , $put_1(wrapperMap, 'tbody', tableWrapper) , $put_1(wrapperMap, 'tfoot', tableWrapper) , $put_1(wrapperMap, 'colgroup', tableWrapper) , $put_1(wrapperMap, 'caption', tableWrapper) , $put_1(wrapperMap, 'tr', new GQuery$TagWrapper(2, '<table><tbody>', '<\/tbody><\/table>')) , $put_1(wrapperMap, 'td', trWrapper) , $put_1(wrapperMap, 'th', trWrapper) , $put_1(wrapperMap, 'col', new GQuery$TagWrapper(2, '<table><tbody><\/tbody><colgroup>', '<\/colgroup><\/table>')) , $put_1(wrapperMap, 'area', new GQuery$TagWrapper(1, '<map>', '<\/map>')) , undefined);
  wrapper = castTo($get_2(wrapperMap, ($clinit_String() , tag).toLowerCase()), 57);
  !wrapper && (wrapper = ($clinit_GQuery$TagWrapper() , DEFAULT));
  div = ($clinit_DOMImpl() , impl_0).createElement_0(doc, 'div');
  $setInnerHTML(div, wrapper.preWrap + '.header-visible' + wrapper.postWrap);
  n = div;
  depth = wrapper.wrapDepth;
  while (depth-- != 0) {
    n = n.lastChild;
  }
  return $remove($(n.childNodes));
}

function getAssociatedWidget(e){
  var e2, listener;
  try {
    listener = ($clinit_DOM() , getEventListener_0(e));
    if (!listener) {
      return null;
    }
    if (instanceOf(listener, 16)) {
      return castTo(listener, 16);
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e2 = $e0;
      $printStackTraceImpl(e2, ($clinit_System() , err), '', '');
    }
     else 
      throw toJs($e0);
  }
  return null;
}

function registerPlugin(plugin, pluginFactory){
  $clinit_GQuery();
  !plugins && (plugins = {});
  $put_0(plugins, plugin, pluginFactory);
  return plugin;
}

defineClass(50, 1, {}, GQuery, GQuery_0, GQuery_1, GQuery_2);
_.toString_0 = function toString_13(){
  return $toString_1(this);
}
;
var browser, console_1, document_0, engine, plugins, tagNameRegex, window_0, wrapperMap;
var Lcom_google_gwt_query_client_GQuery_2_classLit = createForClass('com.google.gwt.query.client', 'GQuery', 50);
function $clinit_GQuery$TagWrapper(){
  $clinit_GQuery$TagWrapper = emptyMethod;
  DEFAULT = new GQuery$TagWrapper(0, '', '');
}

function GQuery$TagWrapper(wrapDepth, preWrap, postWrap){
  $clinit_GQuery$TagWrapper();
  this.wrapDepth = wrapDepth;
  this.postWrap = postWrap;
  this.preWrap = preWrap;
}

defineClass(57, 1, {57:1}, GQuery$TagWrapper);
_.wrapDepth = 0;
var DEFAULT;
var Lcom_google_gwt_query_client_GQuery$TagWrapper_2_classLit = createForClass('com.google.gwt.query.client', 'GQuery/TagWrapper', 57);
defineClass(64, 1, $intern_22);
_.f = function f_0(e, index_0){
  return false;
}
;
var Lcom_google_gwt_query_client_Predicate_2_classLit = createForClass('com.google.gwt.query.client', 'Predicate', 64);
function $error(this$static, arg){
  this$static.impl.error_0($toJs(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [arg])));
}

function $info(this$static, arg){
  this$static.impl.info_0($toJs(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [arg])));
}

function $toJs(arg){
  var o, o$index, o$max, ret;
  ret = [];
  for (o$index = 0 , o$max = arg.length; o$index < o$max; ++o$index) {
    o = arg[o$index];
    $add(ret, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [o]));
  }
  return ret;
}

function ConsoleBrowser(){
  this.impl = ($clinit_GQuery() , browser).ie8?new ConsoleBrowser$ConsoleIe8:browser.ie9?new ConsoleBrowser$ConsoleIe9:new ConsoleBrowser$ConsoleImpl;
}

defineClass(459, 1, {}, ConsoleBrowser);
var Lcom_google_gwt_query_client_impl_ConsoleBrowser_2_classLit = createForClass('com.google.gwt.query.client.impl', 'ConsoleBrowser', 459);
function $error_0(arg){
  $wnd.console.error.apply($wnd.console, arg);
}

function $info_0(arg){
  $wnd.console.info.apply($wnd.console, arg);
}

function ConsoleBrowser$ConsoleImpl(){
}

defineClass(460, 1, {}, ConsoleBrowser$ConsoleImpl);
_.error_0 = function error_0(arg){
  $error_0(arg);
}
;
_.info_0 = function info_0(arg){
  $info_0(arg);
}
;
var Lcom_google_gwt_query_client_impl_ConsoleBrowser$ConsoleImpl_2_classLit = createForClass('com.google.gwt.query.client.impl', 'ConsoleBrowser/ConsoleImpl', 460);
function ConsoleBrowser$ConsoleIe9(){
  this.init();
}

defineClass(176, 460, {}, ConsoleBrowser$ConsoleIe9);
_.error_0 = function error_1(arg){
  this.initialized && $error_0(arg);
}
;
_.info_0 = function info_1(arg){
  this.initialized && $info_0(arg);
}
;
_.init = function init_0(){
  try {
    ['log', 'info', 'warn', 'error', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function(method){
      $wnd.console[method] = this.call($wnd.console[method], $wnd.console);
    }
    , Function.prototype.bind);
    this.initialized = true;
  }
   catch (e) {
  }
}
;
_.initialized = false;
var Lcom_google_gwt_query_client_impl_ConsoleBrowser$ConsoleIe9_2_classLit = createForClass('com.google.gwt.query.client.impl', 'ConsoleBrowser/ConsoleIe9', 176);
function ConsoleBrowser$ConsoleIe8(){
  ConsoleBrowser$ConsoleIe9.call(this);
}

defineClass(461, 176, {}, ConsoleBrowser$ConsoleIe8);
_.init = function init_1(){
  try {
    Function.prototype.call.call($wnd.console.log, $wnd.console, Array.prototype.slice.call(arguments));
    this.initialized = true;
  }
   catch (e) {
  }
}
;
var Lcom_google_gwt_query_client_impl_ConsoleBrowser$ConsoleIe8_2_classLit = createForClass('com.google.gwt.query.client.impl', 'ConsoleBrowser/ConsoleIe8', 461);
function $clinit_DocumentStyleImpl(){
  $clinit_DocumentStyleImpl = emptyMethod;
  cssNumberRegex = new RegExp('^(fillOpacity|fontWeight|lineHeight|opacity|orphans|widows|zIndex|zoom)$', 'i');
  sizeRegex = new RegExp('^(client|offset|)(width|height)$', 'i');
}

function $curCSS(this$static, elem, name_0, force){
  var parent_0, ret, toDetach, lastParent;
  if (!elem) {
    return '';
  }
  name_0 = this$static.fixPropertyName(name_0);
  ret = $getProperty(elem.style, name_0);
  if (force) {
    toDetach = null;
    isDetached(elem) && (toDetach = (lastParent = $get($last($parentsUntil($(elem))), 0) , !lastParent && (lastParent = elem) , $appendChild($doc.body, lastParent) , lastParent));
    $test(sizeRegex, name_0)?(ret = $getVisibleSize(this$static, elem, name_0) + 'px'):equalsIgnoreCase('opacity', name_0)?(ret = ($clinit_String() , '' + this$static.getOpacity(elem))):(ret = this$static.getComputedStyle_0(elem, name_0.replace(/([A-Z])/g, '-$1').toLowerCase(), name_0, null));
    !!toDetach && (parent_0 = $getParentElement_0(($clinit_DOMImpl() , toDetach)) , !!parent_0 && parent_0.removeChild(toDetach));
  }
  return ret == null?'':ret;
}

function $fixInlineElement(this$static, e){
  if ((e.clientHeight | 0) == 0 && (e.clientWidth | 0) == 0 && $equals_0('inline', $curCSS(this$static, e, 'display', true))) {
    this$static.setStyleProperty(e, 'display', 'inline-block');
    this$static.setStyleProperty(e, 'width', 'auto');
    this$static.setStyleProperty(e, 'height', 'auto');
  }
}

function $fixPropertyName(name_0){
  if (equalsIgnoreCase('float', name_0)) {
    return 'cssFloat';
  }
   else if (equalsIgnoreCase('for', name_0)) {
    return 'htmlFor';
  }
  return camelize(name_0);
}

function $getSize(this$static, e, name_0){
  var ret;
  ret = 0;
  $equals_0('width', name_0)?(ret = this$static.getWidth(e)):$equals_0('height', name_0)?(ret = this$static.getHeight(e)):$equals_0('clientWidth', name_0)?(ret = e.clientWidth | 0):$equals_0('clientHeight', name_0)?(ret = e.clientHeight | 0):$equals_0('offsetWidth', name_0)?(ret = (e.offsetWidth || 0) | 0):$equals_0('offsetHeight', name_0) && (ret = (e.offsetHeight || 0) | 0);
  return ret;
}

function $getVisibleSize(this$static, e, name_0){
  var display, position, ret, visibility;
  if (castTo($get_1(($clinit_SelectorEngine() , filters), getHashCode_0('visible')), 64).f(e, 0)) {
    ret = $getSize(this$static, e, name_0);
  }
   else {
    display = $curCSS(this$static, e, 'display', false);
    position = $curCSS(this$static, e, 'position', false);
    visibility = $curCSS(this$static, e, 'visibility', false);
    this$static.setStyleProperty(e, 'display', 'block');
    this$static.setStyleProperty(e, 'position', 'absolute');
    this$static.setStyleProperty(e, 'visibility', 'hidden');
    ret = $getSize(this$static, e, name_0);
    this$static.setStyleProperty(e, 'display', display);
    this$static.setStyleProperty(e, 'position', position);
    this$static.setStyleProperty(e, 'visibility', visibility);
  }
  return ret;
}

function $num(val){
  val = $replaceAll_0($trim(val), '[^\\d\\.\\-]+.*$', '');
  return (val?true:false)?__parseAndValidateDouble(val):0;
}

function $setStyleProperty(this$static, e, prop, val){
  if (!e || prop == null) {
    return;
  }
  prop = this$static.fixPropertyName(prop);
  $nativeMatches(prop, new $wnd.RegExp('^(^[A-Z]+$)$')) && (prop = ($clinit_String() , prop).toLowerCase());
  prop = camelize(prop);
  if (val == null || toNative($trim(val)).length == 0) {
    this$static.removeStyleProperty(e, prop);
  }
   else {
    $nativeMatches(val, new $wnd.RegExp('^(-?[\\d\\.]+)$')) && !$test(cssNumberRegex, prop) && (val += 'px');
    e.style[prop] = val;
  }
}

function DocumentStyleImpl(){
  $clinit_DocumentStyleImpl();
}

defineClass(118, 1, {118:1}, DocumentStyleImpl);
_.fixPropertyName = function fixPropertyName(name_0){
  return $fixPropertyName(name_0);
}
;
_.getComputedStyle_0 = function getComputedStyle_0(elem, hyphenName, camelName, pseudo){
  try {
    var cStyle = $doc.defaultView.getComputedStyle(elem, pseudo);
    return cStyle && cStyle.getPropertyValue?cStyle.getPropertyValue(hyphenName):null;
  }
   catch (e) {
    return null;
  }
}
;
_.getHeight = function getHeight(e){
  $fixInlineElement(this, e);
  return round_int((e.clientHeight | 0) - $num($curCSS(this, e, 'paddingTop', true)) - $num($curCSS(this, e, 'paddingBottom', true)));
}
;
_.getOpacity = function getOpacity(e){
  var o;
  return o = $getOpacity(e.style) , (o?true:false)?$num(o):1;
}
;
_.getWidth = function getWidth(e){
  $fixInlineElement(this, e);
  return round_int((e.clientWidth | 0) - $num($curCSS(this, e, 'paddingLeft', true)) - $num($curCSS(this, e, 'paddingRight', true)));
}
;
_.removeStyleProperty = function removeStyleProperty(elem, prop){
  elem.style[prop] = '';
}
;
_.setStyleProperty = function setStyleProperty(e, prop, val){
  $setStyleProperty(this, e, prop, val);
}
;
var cssNumberRegex, sizeRegex;
var Lcom_google_gwt_query_client_impl_DocumentStyleImpl_2_classLit = createForClass('com.google.gwt.query.client.impl', 'DocumentStyleImpl', 118);
function $setOpacity(e, val){
  (val == null || toNative($trim(val)).length == 0) && (val = '1');
  e.style['zoom'] = '1';
  e.style['filter'] = 'alpha(opacity=' + round_int(checkNotNull(__parseAndValidateDouble(val)) * 100) + ')';
}

function DocumentStyleImplIE(){
  $clinit_DocumentStyleImpl();
}

defineClass(555, 118, {118:1}, DocumentStyleImplIE);
_.fixPropertyName = function fixPropertyName_0(name_0){
  name_0 = $fixPropertyName(name_0);
  if ($equals_0('cssFloat', name_0)) {
    return 'styleFloat';
  }
   else if ($equals_0('class', name_0)) {
    return 'className';
  }
  return name_0;
}
;
_.getComputedStyle_0 = function getComputedStyle_1(elem, hyphenName, camelName, pseudo){
  if (!elem.style || !'currentStyle' in elem || !'runtimeStyle' in elem)
    return null;
  var style = elem.style;
  var ret = elem.currentStyle[hyphenName] || elem.currentStyle[camelName];
  if (!/^\d+(px)?$/i.test(ret) && /^\d/.test(ret)) {
    var left = style.left, rsLeft = elem.runtimeStyle.left;
    elem.runtimeStyle.left = elem.currentStyle.left;
    style.left = ret || 0;
    ret = style.pixelLeft + 'px';
    style.left = left;
    elem.runtimeStyle.left = rsLeft;
  }
  return ret?'' + ret:null;
}
;
_.getHeight = function getHeight_0(e){
  return round_int(((e.offsetHeight || 0) | 0) - $num($curCSS(this, e, 'paddingTop', true)) - $num($curCSS(this, e, 'paddingBottom', true)) - $num($curCSS(this, e, 'borderTopWidth', true)) - $num($curCSS(this, e, 'borderBottomWidth', true)));
}
;
_.getOpacity = function getOpacity_0(e){
  var o, o0, s;
  s = e.style;
  o0 = ($clinit_DOMImpl() , s)['filter'];
  if (o0 != null) {
    return $nativeMatches(o0, new $wnd.RegExp('^(.*opacity=.*)$'))?checkNotNull(__parseAndValidateDouble($replaceAll_0(o0, '[^\\d]', ''))) / 100:1;
  }
  return o = $getOpacity(e.style) , (o?true:false)?$num(o):1;
}
;
_.getWidth = function getWidth_0(e){
  return round_int(((e.offsetWidth || 0) | 0) - $num($curCSS(this, e, 'paddingLeft', true)) - $num($curCSS(this, e, 'paddingRight', true)) - $num($curCSS(this, e, 'borderRightWidth', true)) - $num($curCSS(this, e, 'borderRightWidth', true)));
}
;
_.removeStyleProperty = function removeStyleProperty_0(e, prop){
  e && e.style && 'removeAttribute' in e && e.style.removeAttribute(prop);
}
;
_.setStyleProperty = function setStyleProperty_0(e, prop, val){
  $equals_0('opacity', prop)?$setOpacity(e, val):$setStyleProperty(this, e, prop, val);
}
;
var Lcom_google_gwt_query_client_impl_DocumentStyleImplIE_2_classLit = createForClass('com.google.gwt.query.client.impl', 'DocumentStyleImplIE', 555);
function $clinit_SelectorEngine(){
  $clinit_SelectorEngine = emptyMethod;
  hasQuerySelector = $doc.location.href.indexOf('_force_no_native') < 0 && typeof $doc.querySelectorAll == 'function';
  filters = {};
  $put_0(filters, 'visible', new SelectorEngine$1);
  $put_0(filters, 'hidden', new SelectorEngine$2);
  $put_0(filters, 'selected', new SelectorEngine$3);
  $put_0(filters, 'input', new SelectorEngine$4);
  $put_0(filters, 'header', new SelectorEngine$5);
}

function $filter(nodes, p){
  var e, i_0, j, l, res;
  res = create_0(null);
  for (i_0 = 0 , l = nodes.length , j = 0; i_0 < l; i_0++) {
    e = nodes[i_0];
    p.f(e, i_0) && $addNode(res, e, j++);
  }
  return res;
}

function $select_0(this$static, selector, ctx){
  var a, nodes, pred, pseudo, r, res, s, s$array, s$index, s$max, select;
  if ($test(this$static.nativePseudo, selector)) {
    while (r = $exec_0(this$static.nativePseudo, selector)) {
      selector = r[1] + ':' + r[3];
      $equals_0(r[3], r[2]) || (selector += ':' + r[2]);
      selector += '' + r[4];
    }
  }
  if ($test(this$static.gQueryPseudo, selector)) {
    res = create_0(null);
    for (s$array = $split($trim(selector), '\\s*,\\s*', 0) , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
      s = s$array[s$index];
      a = $exec_0(this$static.gQueryPseudo, s);
      if (a) {
        select = ($clinit_String() , a[1]).length == 0?'*':a[1];
        pseudo = a[2];
        pred = castTo($get_1(filters, getHashCode_0(pseudo.toLowerCase())), 64);
        pred?(nodes = $filter($select_0(this$static, select, ctx), pred)):$test(this$static.nativePseudo, pseudo)?(nodes = $select_0(this$static, select, ctx)):(nodes = $select_0(this$static, select + '[type=' + pseudo + ']', ctx));
      }
       else {
        nodes = $select_0(this$static, s, ctx);
      }
      copyNodeList(res, nodes);
    }
    return res;
  }
   else {
    return this$static.impl.select(selector, ctx);
  }
}

function SelectorEngine(){
  $clinit_SelectorEngine();
  this.gQueryPseudo = new RegExp('(.*):((visible|hidden|selected|input|header)|((button|checkbox|file|hidden|image|password|radio|reset|submit|text)\\s*(,|$)))(.*)', 'i');
  this.nativePseudo = new RegExp('(.*):([\\w]+):(disabled|checked|enabled|empty|focus)\\s*([:,].*|$)', 'i');
  this.impl = castTo(create_com_google_gwt_query_client_impl_SelectorEngineImpl(), 69);
  'GQuery - Created SelectorEngineImpl: ' + $getName(this.impl.___clazz);
  styleImpl = castTo(create_com_google_gwt_query_client_impl_DocumentStyleImpl(), 118);
  'GQuery - Created DocumentStyleImpl: ' + $getName(styleImpl.___clazz);
}

function xpathEvaluate(selector, ctx, r){
  $clinit_SelectorEngine();
  var node;
  var ownerDoc = ctx && (ctx.ownerDocument || ctx);
  var evalDoc = ownerDoc?ownerDoc:$doc;
  var result = evalDoc.evaluate(selector, ctx, null, 0, null);
  while (node = result.iterateNext()) {
    r.push(node);
  }
  return r;
}

defineClass(536, 1, {79:1}, SelectorEngine);
_.select = function select_0(selector, ctx){
  return $select_0(this, selector, ctx);
}
;
var filters, hasQuerySelector = false, styleImpl;
var Lcom_google_gwt_query_client_impl_SelectorEngine_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngine', 536);
function SelectorEngine$1(){
}

defineClass(537, 64, $intern_22, SelectorEngine$1);
_.f = function f_1(e, index_0){
  return ((e.offsetWidth || 0) | 0) + ((e.offsetHeight || 0) | 0) > 0 && !equalsIgnoreCase('none', $curCSS(($clinit_SelectorEngine() , styleImpl), e, 'display', true));
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngine$1_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngine/1', 537);
function SelectorEngine$2(){
}

defineClass(538, 64, $intern_22, SelectorEngine$2);
_.f = function f_2(e, index_0){
  return !castTo($get_1(($clinit_SelectorEngine() , filters), getHashCode_0('visible')), 64).f(e, index_0);
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngine$2_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngine/2', 538);
function SelectorEngine$3(){
}

defineClass(539, 64, $intern_22, SelectorEngine$3);
_.f = function f_3(e, index_0){
  return !!e['selected'];
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngine$3_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngine/3', 539);
function SelectorEngine$4(){
}

defineClass(540, 64, $intern_22, SelectorEngine$4);
_.f = function f_4(e, index_0){
  return $nativeMatches(toNative(e.nodeName).toLowerCase(), new $wnd.RegExp('^(input|select|textarea|button)$'));
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngine$4_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngine/4', 540);
function SelectorEngine$5(){
}

defineClass(541, 64, $intern_22, SelectorEngine$5);
_.f = function f_5(e, index_0){
  return $nativeMatches(toNative(e.nodeName).toLowerCase(), new $wnd.RegExp('^(h\\d)$'));
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngine$5_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngine/5', 541);
defineClass(69, 1, $intern_23);
var Lcom_google_gwt_query_client_impl_SelectorEngineImpl_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineImpl', 69);
function $clinit_SelectorEngineCssToXPath(){
  $clinit_SelectorEngineCssToXPath = emptyMethod;
  rc_scp = new SelectorEngineCssToXPath$1;
  rc_$Attr = new SelectorEngineCssToXPath$2;
  rc_Not = new SelectorEngineCssToXPath$3;
  rc_nth_child = new SelectorEngineCssToXPath$4;
  regs = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, ["(['\\[])([^'\\]]*)([\\s\\.#])([^'\\]]*)(['\\]])", rc_scp, '\\[([^@\\]~\\$\\*\\^\\|\\!]+)(=[^\\]]+)?\\]', '[@$1$2]', '\\s*,\\s*', '|.//', '\\s*(\\+|~|>)\\s*', '$1', '([\\w\\-\\*])~([\\w\\-\\*])', '$1/following-sibling::$2', '([\\w\\-\\*])\\+([\\w\\-\\*])', '$1/following-sibling::*[1]/self::$2', '([\\w\\-\\*])>([\\w\\-\\*])', '$1/$2', '\\[([^=]+)=([^\'|"][^\\]]*)\\]', "[$1='$2']", '(^|[^\\w\\-\\*])(#|\\.)([\\w\\-]+)', '$1*$2$3', '([\\>\\+\\|\\~\\,\\s])([a-zA-Z\\*]+)', '$1//$2', '\\s+//', '//', '([\\w\\-\\*]+):first-child', '*[1]/self::$1', '([\\w\\-\\*]+):last-child', '$1[not(following-sibling::*)]', '([\\w\\-\\*]+):only-child', '*[last()=1]/self::$1', '([\\w\\-\\*]+):empty', '$1[not(*) and not(normalize-space())]', ':odd', ':nth-child(even)', ':even', ':nth-child(odd)', '(.+):not\\(([^\\)]*)\\)', rc_Not, '([a-zA-Z0-9\\_\\-\\*]*|\\]):nth-child\\(([^\\)]*)\\)', rc_nth_child, ':contains\\(([^\\)]*)\\)', "[contains(string(.),'$1')]", '\\[([\\w\\-]+)\\|=([^\\]]+)\\]', "[@$1=$2 or starts-with(@$1,concat($2,'-'))]", '\\[([\\w\\-]+)\\*=([^\\]]+)\\]', '[contains(@$1,$2)]', '\\[([\\w\\-]+)~=([^\\]]+)\\]', "[contains(concat(' ',normalize-space(@$1),' '),concat(' ',$2,' '))]", '\\[([\\w\\-]+)\\^=([^\\]]+)\\]', '[starts-with(@$1,$2)]', '\\[([\\w\\-]+)\\$=([^\\]]+)\\]', rc_$Attr, '\\[([\\w\\-]+)\\!=([^\\]]+)\\]', '[not(@$1) or @$1!=$2]', '#([\\w\\-]+)', "[@id='$1']", '\\.([\\w\\-]+)', "[contains(concat(' ',normalize-space(@class),' '),' $1 ')]", '\\]\\[([^\\]]+)', ' and ($1)', ':(enabled)', '[not(@disabled)]', ':(checked)', "[@$1='$1']", ':(disabled)', '[@$1]', ':(first)', '[1]', ':(last)', '[last()]', '(^|\\|[\\./]*)(\\[)', '$1*$2', '%S%', ' ', '%P%', '.', '%H%', '#', "'+", "'"]);
  new SelectorEngineCssToXPath$6;
}

function $css2Xpath(selector){
  var i_0, ret;
  ret = selector;
  for (i_0 = 0; i_0 < regs.length;) {
    ret = $replaceAll(ret, toString__Ljava_lang_String___devirtual$(regs[i_0++]), regs[i_0++]);
  }
  return './/' + ret;
}

function SelectorEngineCssToXPath(){
  $clinit_SelectorEngineCssToXPath();
  instance_0 = this;
}

defineClass(139, 69, $intern_23, SelectorEngineCssToXPath);
_.select = function select_1(sel, ctx){
  var elm, xsel;
  !cache_0 && (cache_0 = {});
  xsel = castToString($get_2(cache_0, sel));
  if (xsel == null) {
    xsel = $equals_0(($clinit_String() , sel).substr(0, 2), './') || $equals_0(sel.substr(0, 1), '/')?sel:$css2Xpath(sel);
    $put_1(cache_0, sel, xsel);
  }
  elm = create_0(null);
  try {
    xpathEvaluate(xsel, ctx, elm);
    return $unique(elm);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      return elm;
    }
     else 
      throw toJs($e0);
  }
}
;
var cache_0, instance_0, rc_$Attr, rc_Not, rc_nth_child, rc_scp, regs;
var Lcom_google_gwt_query_client_impl_SelectorEngineCssToXPath_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineCssToXPath', 139);
function SelectorEngineCssToXPath$1(){
}

defineClass(547, 1, $intern_24, SelectorEngineCssToXPath$1);
_.foundMatch = function foundMatch(s){
  return checkCriticalElementIndex(1, s.array.length) , castToString(s.array[1]) + ('' + (checkCriticalElementIndex(2, s.array.length) , castToString(s.array[2]))) + ($startsWith((checkCriticalElementIndex(3, s.array.length) , castToString(s.array[3])), ' ')?'%S%':$startsWith((checkCriticalElementIndex(3, s.array.length) , castToString(s.array[3])), '#')?'%H%':'%P%') + (checkCriticalElementIndex(4, s.array.length) , castToString(s.array[4])) + (checkCriticalElementIndex(5, s.array.length) , castToString(s.array[5]));
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngineCssToXPath$1_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineCssToXPath/1', 547);
function SelectorEngineCssToXPath$2(){
}

defineClass(548, 1, $intern_24, SelectorEngineCssToXPath$2);
_.foundMatch = function foundMatch_0(s){
  return checkCriticalElementIndex(1, s.array.length) , '[substring(@' + castToString(s.array[1]) + ',string-length(@' + (checkCriticalElementIndex(1, s.array.length) , castToString(s.array[1])) + ')-' + (toNative($replaceAll_0((checkCriticalElementIndex(2, s.array.length) , castToString(s.array[2])), "'", '')).length - 1) + ')=' + (checkCriticalElementIndex(2, s.array.length) , castToString(s.array[2])) + ']';
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngineCssToXPath$2_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineCssToXPath/2', 548);
function SelectorEngineCssToXPath$3(){
}

defineClass(549, 1, $intern_24, SelectorEngineCssToXPath$3);
_.foundMatch = function foundMatch_1(s){
  return checkCriticalElementIndex(1, s.array.length) , castToString(s.array[1]) + '[not(' + $replaceAll_0($css2Xpath(($clinit_SelectorEngineCssToXPath() , !instance_0 && (instance_0 = new SelectorEngineCssToXPath) , checkCriticalElementIndex(2, s.array.length) , castToString(s.array[2]))), '^[^\\[]+\\[([^\\]]*)\\].*$', '$1)]');
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngineCssToXPath$3_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineCssToXPath/3', 549);
function SelectorEngineCssToXPath$4(){
}

defineClass(550, 1, $intern_24, SelectorEngineCssToXPath$4);
_.foundMatch = function foundMatch_2(s){
  var afterAttr, noPrefix, prefix, s1, s2, t, t0, t1;
  s1 = (checkCriticalElementIndex(1, s.array.length) , castToString(s.array[1]));
  s2 = (checkCriticalElementIndex(2, s.array.length) , castToString(s.array[2]));
  afterAttr = $equals_0(']', s1);
  prefix = afterAttr?s1:'*';
  noPrefix = afterAttr || s1 == null || ($clinit_String() , s1).length == 0;
  if ($equals_0('n', s2)) {
    return s1;
  }
  if ($equals_0('even', s2)) {
    return prefix + '[position() mod 2=0 and position()>=0]' + (noPrefix?'':'/self::' + s1);
  }
  if ($equals_0('odd', s2)) {
    prefix = afterAttr?prefix:noPrefix?'':s1;
    return prefix + '[(count(preceding-sibling::*) + 1) mod 2=1]';
  }
  if (($clinit_String() , s2).indexOf('n') == -1) {
    return prefix + '[position() = ' + s2 + ']' + (noPrefix?'':'/self::' + s1);
  }
  t = $split($replaceAll_0(s2, '^([0-9]*)n.*?([0-9]*)?$', '$1+$2'), '\\+', 0);
  t0 = t[0];
  t1 = t.length > 1?t[1]:'0';
  return prefix + '[(position()-' + t1 + ') mod ' + t0 + '=0 and position()>=' + t1 + ']' + (noPrefix?'':'/self::' + s1);
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngineCssToXPath$4_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineCssToXPath/4', 550);
function $replaceAll(s, r, o){
  var a, args, callback, f, i_0, p;
  p = new RegExp(r);
  if (instanceOf(o, 120)) {
    callback = castTo(o, 120);
    while (p.test(s)) {
      a = p.exec(s);
      args = new ArrayList;
      for (i_0 = 0; !!a && i_0 < a.length; i_0++) {
        $add_6(args, a[i_0]);
      }
      f = callback.foundMatch(args);
      s = $replaceFirst(s, r, f);
    }
    return s;
  }
   else {
    return $replaceAll_0(s, r, toString__Ljava_lang_String___devirtual$(o));
  }
}

function SelectorEngineCssToXPath$6(){
}

defineClass(551, 1, {}, SelectorEngineCssToXPath$6);
var Lcom_google_gwt_query_client_impl_SelectorEngineCssToXPath$6_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineCssToXPath/6', 551);
function SelectorEngineNative(){
  if (!impl_2) {
    impl_2 = castTo(create_com_google_gwt_query_client_impl_HasSelector(), 79);
    'GQuery - Created HasSelector: ' + $getName(getClass__Ljava_lang_Class___devirtual$(impl_2));
  }
}

defineClass(546, 69, $intern_23, SelectorEngineNative);
_.select = function select_2(selector, ctx){
  var e, xsel;
  if (($clinit_String() , selector).indexOf('!=') != -1) {
    !cache_1 && (cache_1 = {});
    xsel = castToString($get_2(cache_1, selector));
    if (xsel == null) {
      xsel = $replaceAll_0(selector, '(\\[\\w+)!(=[^\\]]+\\])', ':not($1$2)');
      $put_1(cache_1, selector, xsel);
    }
    selector = xsel;
  }
  if (!($clinit_SelectorEngine() , hasQuerySelector) || $nativeMatches(selector, new $wnd.RegExp('^(' + NATIVE_EXCEPTIONS_REGEXP + ')$'))) {
    return impl_2.select(selector, ctx);
  }
   else {
    try {
      return ctx.querySelectorAll(selector);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $info(($clinit_GQuery() , console_1), 'ERROR SelectorEngineNative ' + e.getMessage() + ' ' + selector + ', falling back to ' + $replaceAll_0($getName(getClass__Ljava_lang_Class___devirtual$(impl_2)), '.*\\.', ''));
        return impl_2.select(selector, ctx);
      }
       else 
        throw toJs($e0);
    }
  }
}
;
var NATIVE_EXCEPTIONS_REGEXP = '(^[\\./]/.*)|(.*(:contains|:first([^-]|$)|:last([^-]|$)|:even|:odd)).*', cache_1, impl_2;
var Lcom_google_gwt_query_client_impl_SelectorEngineNative_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineNative', 546);
function SelectorEngineSizzleIE(){
  initialize();
}

function initialize(){
  (function(){
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, done = 0, toString_0 = Object.prototype.toString, hasDuplicate = false;
    var IES = function(selector, context, results, seed){
      results = results || [];
      context = context || document;
      var origContext = context;
      if (context.nodeType !== 1 && context.nodeType !== 9) {
        return [];
      }
      if (!selector || typeof selector !== 'string') {
        return results;
      }
      var parts = [], m, set_0, checkSet, extra, prune = true, contextXML = IES.isXML(context), soFar = selector, ret, cur, pop_0, i_0;
      do {
        chunker.exec('');
        m = chunker.exec(soFar);
        if (m) {
          soFar = m[3];
          parts.push(m[1]);
          if (m[2]) {
            extra = m[3];
            break;
          }
        }
      }
       while (m);
      if (parts.length > 1 && origPOS.exec(selector)) {
        if (parts.length === 2 && Expr.relative[parts[0]]) {
          set_0 = posProcess(parts[0] + parts[1], context);
        }
         else {
          set_0 = Expr.relative[parts[0]]?[context]:IES(parts.shift(), context);
          while (parts.length) {
            selector = parts.shift();
            Expr.relative[selector] && (selector += parts.shift());
            set_0 = posProcess(selector, set_0);
          }
        }
      }
       else {
        if (!seed && parts.length > 1 && context.nodeType === 9 && !contextXML && Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1])) {
          ret = IES.find(parts.shift(), context, contextXML);
          context = ret.expr?IES.filter(ret.expr, ret.set)[0]:ret.set[0];
        }
        if (context) {
          ret = seed?{expr:parts.pop(), set:makeArray(seed)}:IES.find(parts.pop(), parts.length === 1 && (parts[0] === '~' || parts[0] === '+') && context.parentNode?context.parentNode:context, contextXML);
          set_0 = ret.expr?IES.filter(ret.expr, ret.set):ret.set;
          parts.length > 0?(checkSet = makeArray(set_0)):(prune = false);
          while (parts.length) {
            cur = parts.pop();
            pop_0 = cur;
            !Expr.relative[cur]?(cur = '-'):(pop_0 = parts.pop());
            pop_0 == null && (pop_0 = context);
            Expr.relative[cur](checkSet, pop_0, contextXML);
          }
        }
         else {
          checkSet = parts = [];
        }
      }
      !checkSet && (checkSet = set_0);
      !checkSet && IES.error(cur || selector);
      if (toString_0.call(checkSet) === '[object Array]') {
        if (!prune) {
          results.push.apply(results, checkSet);
        }
         else if (context && context.nodeType === 1) {
          for (i_0 = 0; checkSet[i_0] != null; i_0++) {
            checkSet[i_0] && (checkSet[i_0] === true || checkSet[i_0].nodeType === 1 && IES.contains(context, checkSet[i_0])) && results.push(set_0[i_0]);
          }
        }
         else {
          for (i_0 = 0; checkSet[i_0] != null; i_0++) {
            checkSet[i_0] && checkSet[i_0].nodeType === 1 && results.push(set_0[i_0]);
          }
        }
      }
       else {
        makeArray(checkSet, results);
      }
      if (extra) {
        IES(extra, origContext, results, seed);
        IES.uniqueSort(results);
      }
      return results;
    }
    ;
    IES.uniqueSort = function(results){
      if (sortOrder) {
        hasDuplicate = false;
        results.sort(sortOrder);
        if (hasDuplicate) {
          for (var i_0 = 1; i_0 < results.length; i_0++) {
            results[i_0] === results[i_0 - 1] && results.splice(i_0--, 1);
          }
        }
      }
      return results;
    }
    ;
    IES.matches = function(expr, set_0){
      return IES(expr, null, null, set_0);
    }
    ;
    IES.find = function(expr, context, isXML){
      var set_0;
      if (!expr) {
        return [];
      }
      for (var i_0 = 0, l = Expr.order.length; i_0 < l; i_0++) {
        var type_0 = Expr.order[i_0], match_0;
        if (match_0 = Expr.leftMatch[type_0].exec(expr)) {
          var left = match_0[1];
          match_0.splice(1, 1);
          if (left.substr(left.length - 1) !== '\\') {
            match_0[1] = (match_0[1] || '').replace(/\\/g, '');
            set_0 = Expr.find[type_0](match_0, context, isXML);
            if (set_0 != null) {
              expr = expr.replace(Expr.match[type_0], '');
              break;
            }
          }
        }
      }
      !set_0 && (set_0 = context.getElementsByTagName('*'));
      return {set:set_0, expr:expr};
    }
    ;
    IES.filter = function(expr, set_0, inplace, not){
      var old = expr, result = [], curLoop = set_0, match_0, anyFound, isXMLFilter = set_0 && set_0[0] && IES.isXML(set_0[0]);
      while (expr && set_0.length) {
        for (var type_0 in Expr.filter) {
          if ((match_0 = Expr.leftMatch[type_0].exec(expr)) != null && match_0[2]) {
            var filter = Expr.filter[type_0], found, item_0, left = match_0[1];
            anyFound = false;
            match_0.splice(1, 1);
            if (left.substr(left.length - 1) === '\\') {
              continue;
            }
            curLoop === result && (result = []);
            if (Expr.preFilter[type_0]) {
              match_0 = Expr.preFilter[type_0](match_0, curLoop, inplace, result, not, isXMLFilter);
              if (!match_0) {
                anyFound = found = true;
              }
               else if (match_0 === true) {
                continue;
              }
            }
            if (match_0) {
              for (var i_0 = 0; (item_0 = curLoop[i_0]) != null; i_0++) {
                if (item_0) {
                  found = filter(item_0, match_0, i_0, curLoop);
                  var pass = not ^ !!found;
                  if (inplace && found != null) {
                    pass?(anyFound = true):(curLoop[i_0] = false);
                  }
                   else if (pass) {
                    result.push(item_0);
                    anyFound = true;
                  }
                }
              }
            }
            if (found !== undefined) {
              !inplace && (curLoop = result);
              expr = expr.replace(Expr.match[type_0], '');
              if (!anyFound) {
                return [];
              }
              break;
            }
          }
        }
        if (expr === old) {
          if (anyFound == null) {
            IES.error(expr);
          }
           else {
            break;
          }
        }
        old = expr;
      }
      return curLoop;
    }
    ;
    IES.error = function(msg){
      throw 'Syntax error, unrecognized expression: ' + msg;
    }
    ;
    var Expr = IES.selectors = {order:['ID', 'NAME', 'TAG'], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{'class':'className', 'for':'htmlFor'}, attrHandle:{href:function(elem){
      return elem.getAttribute('href', 2);
    }
    }, relative:{'+':function(checkSet, part){
      var isPartStr = typeof part === 'string', isTag = isPartStr && !/\W/.test(part), isPartStrNotTag = isPartStr && !isTag;
      isTag && (part = part.toLowerCase());
      for (var i_0 = 0, l = checkSet.length, elem; i_0 < l; i_0++) {
        if (elem = checkSet[i_0]) {
          while ((elem = elem.previousSibling) && elem.nodeType !== 1) {
          }
          checkSet[i_0] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part?elem || false:elem === part;
        }
      }
      isPartStrNotTag && IES.filter(part, checkSet, true);
    }
    , '>':function(checkSet, part){
      var isPartStr = typeof part === 'string', elem, i_0 = 0, l = checkSet.length;
      if (isPartStr && !/\W/.test(part)) {
        part = part.toLowerCase();
        for (; i_0 < l; i_0++) {
          elem = checkSet[i_0];
          if (elem) {
            var parent_0 = elem.parentNode;
            checkSet[i_0] = parent_0.nodeName.toLowerCase() === part?parent_0:false;
          }
        }
      }
       else {
        for (; i_0 < l; i_0++) {
          elem = checkSet[i_0];
          elem && (checkSet[i_0] = isPartStr?elem.parentNode:elem.parentNode === part);
        }
        isPartStr && IES.filter(part, checkSet, true);
      }
    }
    , '-':function(checkSet, part, isXML){
      var doneName = done++, checkFn = dirCheck, nodeCheck;
      if (typeof part === 'string' && !/\W/.test(part)) {
        part = part.toLowerCase();
        nodeCheck = part;
        checkFn = dirNodeCheck;
      }
      checkFn('parentNode', part, doneName, checkSet, nodeCheck, isXML);
    }
    , '~':function(checkSet, part, isXML){
      var doneName = done++, checkFn = dirCheck, nodeCheck;
      if (typeof part === 'string' && !/\W/.test(part)) {
        part = part.toLowerCase();
        nodeCheck = part;
        checkFn = dirNodeCheck;
      }
      checkFn('previousSibling', part, doneName, checkSet, nodeCheck, isXML);
    }
    }, find:{ID:function(match_0, context, isXML){
      if (typeof context.getElementById !== 'undefined' && !isXML) {
        var m = context.getElementById(match_0[1]);
        return m?m.id === match_0[1] || typeof m.getAttributeNode !== 'undefined' && m.getAttributeNode('id').nodeValue === match_0[1]?[m]:undefined:[];
      }
    }
    , NAME:function(match_0, context){
      if (typeof context.getElementsByName !== 'undefined') {
        var ret = [], results = context.getElementsByName(match_0[1]);
        for (var i_0 = 0, l = results.length; i_0 < l; i_0++) {
          results[i_0].getAttribute('name') === match_0[1] && ret.push(results[i_0]);
        }
        return ret.length === 0?null:ret;
      }
    }
    , TAG:function(match_0, context){
      var results = context.getElementsByTagName(match_0[1]);
      if (match_0[1] === '*') {
        var tmp = [];
        for (var i_0 = 0; results[i_0]; i_0++) {
          results[i_0].nodeType === 1 && tmp.push(results[i_0]);
        }
        results = tmp;
      }
      return results;
    }
    }, preFilter:{CLASS:function(match_0, curLoop, inplace, result, not, isXML){
      match_0 = ' ' + match_0[1].replace(/\\/g, '') + ' ';
      if (isXML) {
        return match_0;
      }
      for (var i_0 = 0, elem; (elem = curLoop[i_0]) != null; i_0++) {
        elem && (not ^ (elem.className && (' ' + elem.className + ' ').replace(/[\t\n]/g, ' ').indexOf(match_0) >= 0)?!inplace && result.push(elem):inplace && (curLoop[i_0] = false));
      }
      return false;
    }
    , ID:function(match_0){
      return match_0[1].replace(/\\/g, '');
    }
    , TAG:function(match_0, curLoop){
      return match_0[1].toLowerCase();
    }
    , CHILD:function(match_0){
      if (match_0[1] === 'nth') {
        var test_0 = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(match_0[2] === 'even' && '2n' || match_0[2] === 'odd' && '2n+1' || !/\D/.test(match_0[2]) && '0n+' + match_0[2] || match_0[2]);
        match_0[2] = test_0[1] + (test_0[2] || 1) - 0;
        match_0[3] = test_0[3] - 0;
      }
      match_0[0] = done++;
      return match_0;
    }
    , ATTR:function(match_0, curLoop, inplace, result, not, isXML){
      var name_0 = match_0[1].replace(/\\/g, '');
      !isXML && Expr.attrMap[name_0] && (match_0[1] = Expr.attrMap[name_0]);
      match_0[2] === '~=' && (match_0[4] = ' ' + match_0[4] + ' ');
      return match_0;
    }
    , PSEUDO:function(match_0, curLoop, inplace, result, not){
      if (match_0[1] === 'not') {
        if ((chunker.exec(match_0[3]) || '').length > 1 || /^\w/.test(match_0[3])) {
          match_0[3] = IES(match_0[3], null, null, curLoop);
        }
         else {
          var ret = IES.filter(match_0[3], curLoop, inplace, true ^ not);
          !inplace && result.push.apply(result, ret);
          return false;
        }
      }
       else if (Expr.match.POS.test(match_0[0]) || Expr.match.CHILD.test(match_0[0])) {
        return true;
      }
      return match_0;
    }
    , POS:function(match_0){
      match_0.unshift(true);
      return match_0;
    }
    }, filters:{enabled:function(elem){
      return elem.disabled === false && elem.type !== 'hidden';
    }
    , disabled:function(elem){
      return elem.disabled === true;
    }
    , checked:function(elem){
      return elem.checked === true;
    }
    , selected:function(elem){
      return elem.selected === true;
    }
    , parent:function(elem){
      return !!elem.firstChild;
    }
    , empty:function(elem){
      return !elem.firstChild;
    }
    , has:function(elem, i_0, match_0){
      return !!IES(match_0[3], elem).length;
    }
    , header:function(elem){
      return /h\d/i.test(elem.nodeName);
    }
    , text:function(elem){
      return 'text' === elem.type;
    }
    , radio:function(elem){
      return 'radio' === elem.type;
    }
    , checkbox:function(elem){
      return 'checkbox' === elem.type;
    }
    , file:function(elem){
      return 'file' === elem.type;
    }
    , password:function(elem){
      return 'password' === elem.type;
    }
    , submit:function(elem){
      return 'submit' === elem.type;
    }
    , image:function(elem){
      return 'image' === elem.type;
    }
    , reset:function(elem){
      return 'reset' === elem.type;
    }
    , button:function(elem){
      return 'button' === elem.type || elem.nodeName.toLowerCase() === 'button';
    }
    , input:function(elem){
      return /input|select|textarea|button/i.test(elem.nodeName);
    }
    }, setFilters:{first:function(elem, i_0){
      return i_0 === 0;
    }
    , last:function(elem, i_0, match_0, array){
      return i_0 === array.length - 1;
    }
    , even:function(elem, i_0){
      return i_0 % 2 === 0;
    }
    , odd:function(elem, i_0){
      return i_0 % 2 === 1;
    }
    , lt:function(elem, i_0, match_0){
      return i_0 < match_0[3] - 0;
    }
    , gt:function(elem, i_0, match_0){
      return i_0 > match_0[3] - 0;
    }
    , nth:function(elem, i_0, match_0){
      return match_0[3] - 0 === i_0;
    }
    , eq:function(elem, i_0, match_0){
      return match_0[3] - 0 === i_0;
    }
    }, filter:{PSEUDO:function(elem, match_0, i_0, array){
      var name_0 = match_0[1], filter = Expr.filters[name_0];
      if (filter) {
        return filter(elem, i_0, match_0, array);
      }
       else if (name_0 === 'contains') {
        return (elem.textContent || elem.innerText || IES.getText([elem]) || '').indexOf(match_0[3]) >= 0;
      }
       else if (name_0 === 'not') {
        var not = match_0[3];
        for (var j = 0, l = not.length; j < l; j++) {
          if (not[j] === elem) {
            return false;
          }
        }
        return true;
      }
       else {
        IES.error('Syntax error, unrecognized expression: ' + name_0);
      }
    }
    , CHILD:function(elem, match_0){
      var type_0 = match_0[1], node = elem;
      switch (type_0) {
        case 'only':
        case 'first':
          while (node = node.previousSibling) {
            if (node.nodeType === 1) {
              return false;
            }
          }

          if (type_0 === 'first') {
            return true;
          }

          node = elem;
        case 'last':
          while (node = node.nextSibling) {
            if (node.nodeType === 1) {
              return false;
            }
          }

          return true;
        case 'nth':
          var first = match_0[2], last = match_0[3];
          if (first === 1 && last === 0) {
            return true;
          }

          var doneName = match_0[0], parent_0 = elem.parentNode;
          if (parent_0 && (parent_0.sizcache !== doneName || !elem.nodeIndex)) {
            var count = 0;
            for (node = parent_0.firstChild; node; node = node.nextSibling) {
              node.nodeType === 1 && (node.nodeIndex = ++count);
            }
            parent_0.sizcache = doneName;
          }

          var diff = elem.nodeIndex - last;
          if (first === 0) {
            return diff === 0;
          }
           else {
            return diff % first === 0 && diff / first >= 0;
          }

      }
    }
    , ID:function(elem, match_0){
      var node = typeof elem.getAttributeNode !== 'undefined' && elem.getAttributeNode('id');
      return elem.nodeType === 1 && node && node.nodeValue === match_0;
    }
    , TAG:function(elem, match_0){
      return match_0 === '*' && elem.nodeType === 1 || elem.nodeName.toLowerCase() === match_0;
    }
    , CLASS:function(elem, match_0){
      return (' ' + (elem.className || elem.getAttribute('class')) + ' ').indexOf(match_0) > -1;
    }
    , ATTR:function(elem, match_0){
      var name_0 = match_0[1], result = Expr.attrHandle[name_0]?Expr.attrHandle[name_0](elem):elem[name_0] != null?elem[name_0]:elem.getAttribute(name_0), value_0 = result + '', type_0 = match_0[2], check = match_0[4];
      return result == null?type_0 === '!=':type_0 === '='?value_0 === check:type_0 === '*='?value_0.indexOf(check) >= 0:type_0 === '~='?(' ' + value_0 + ' ').indexOf(check) >= 0:!check?value_0 && result !== false:type_0 === '!='?value_0 !== check:type_0 === '^='?value_0.indexOf(check) === 0:type_0 === '$='?value_0.substr(value_0.length - check.length) === check:type_0 === '|='?value_0 === check || value_0.substr(0, check.length + 1) === check + '-':false;
    }
    , POS:function(elem, match_0, i_0, array){
      var name_0 = match_0[2], filter = Expr.setFilters[name_0];
      if (filter) {
        return filter(elem, i_0, match_0, array);
      }
    }
    }};
    var origPOS = Expr.match.POS, fescape = function(all, num){
      return '\\' + (num - 0 + 1);
    }
    ;
    for (var type_1 in Expr.match) {
      Expr.match[type_1] = new RegExp(Expr.match[type_1].source + /(?![^\[]*\])(?![^\(]*\))/.source);
      Expr.leftMatch[type_1] = new RegExp(/(^(?:.|\r|\n)*?)/.source + Expr.match[type_1].source.replace(/\\(\d+)/g, fescape));
    }
    var makeArray = function(array, results){
      array = Array.prototype.slice.call(array, 0);
      if (results) {
        results.push.apply(results, array);
        return results;
      }
      return array;
    }
    ;
    try {
      Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType;
    }
     catch (e) {
      makeArray = function(array, results){
        var ret = results || [], i_0 = 0;
        if (toString_0.call(array) === '[object Array]') {
          Array.prototype.push.apply(ret, array);
        }
         else {
          if (typeof array.length === 'number') {
            for (var l = array.length; i_0 < l; i_0++) {
              ret.push(array[i_0]);
            }
          }
           else {
            for (; array[i_0]; i_0++) {
              ret.push(array[i_0]);
            }
          }
        }
        return ret;
      }
      ;
    }
    var sortOrder = function(a, b){
      if (!a.sourceIndex || !b.sourceIndex) {
        a == b && (hasDuplicate = true);
        return a.sourceIndex?-1:1;
      }
      var ret = a.sourceIndex - b.sourceIndex;
      ret === 0 && (hasDuplicate = true);
      return ret;
    }
    ;
    IES.getText = function(elems){
      var ret = '', elem;
      for (var i_0 = 0; elems[i_0]; i_0++) {
        elem = elems[i_0];
        elem.nodeType === 3 || elem.nodeType === 4?(ret += elem.nodeValue):elem.nodeType !== 8 && (ret += IES.getText(elem.childNodes));
      }
      return ret;
    }
    ;
    function dirNodeCheck(dir_0, cur, doneName, checkSet, nodeCheck, isXML){
      for (var i_0 = 0, l = checkSet.length; i_0 < l; i_0++) {
        var elem = checkSet[i_0];
        if (elem) {
          elem = elem[dir_0];
          var match_0 = false;
          while (elem) {
            if (elem.sizcache === doneName) {
              match_0 = checkSet[elem.sizset];
              break;
            }
            if (elem.nodeType === 1 && !isXML) {
              elem.sizcache = doneName;
              elem.sizset = i_0;
            }
            if (elem.nodeName.toLowerCase() === cur) {
              match_0 = elem;
              break;
            }
            elem = elem[dir_0];
          }
          checkSet[i_0] = match_0;
        }
      }
    }

    function dirCheck(dir_0, cur, doneName, checkSet, nodeCheck, isXML){
      for (var i_0 = 0, l = checkSet.length; i_0 < l; i_0++) {
        var elem = checkSet[i_0];
        if (elem) {
          elem = elem[dir_0];
          var match_0 = false;
          while (elem) {
            if (elem.sizcache === doneName) {
              match_0 = checkSet[elem.sizset];
              break;
            }
            if (elem.nodeType === 1) {
              if (!isXML) {
                elem.sizcache = doneName;
                elem.sizset = i_0;
              }
              if (typeof cur !== 'string') {
                if (elem === cur) {
                  match_0 = true;
                  break;
                }
              }
               else if (IES.filter(cur, [elem]).length > 0) {
                match_0 = elem;
                break;
              }
            }
            elem = elem[dir_0];
          }
          checkSet[i_0] = match_0;
        }
      }
    }

    IES.contains = function(a, b){
      return a !== b && (a.contains?a.contains(b):true);
    }
    ;
    IES.isXML = function(elem){
      var documentElement = (elem?elem.ownerDocument || elem:0).documentElement;
      return documentElement?documentElement.nodeName !== 'HTML':false;
    }
    ;
    var posProcess = function(selector, context){
      var tmpSet = [], later = '', match_0, root = context.nodeType?[context]:context;
      while (match_0 = Expr.match.PSEUDO.exec(selector)) {
        later += match_0[0];
        selector = selector.replace(Expr.match.PSEUDO, '');
      }
      selector = Expr.relative[selector]?selector + '*':selector;
      for (var i_0 = 0, l = root.length; i_0 < l; i_0++) {
        IES(selector, root[i_0], tmpSet);
      }
      return IES.filter(later, tmpSet);
    }
    ;
    window.IES = IES;
    $wnd.IES = IES;
  }
  ());
}

defineClass(177, 69, $intern_23, SelectorEngineSizzleIE);
_.select = function select_3(selector, context){
  var results;
  return results = [] , $wnd.IES(selector, context, results, null);
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngineSizzleIE_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineSizzleIE', 177);
function SelectorEngineNativeIE8(){
  SelectorEngineSizzleIE.call(this);
}

defineClass(554, 177, $intern_23, SelectorEngineNativeIE8);
_.select = function select_4(selector, ctx){
  var results;
  if (!($clinit_SelectorEngine() , hasQuerySelector) || $nativeMatches(selector, new $wnd.RegExp('^(' + NATIVE_EXCEPTIONS_REGEXP_0 + ')$'))) {
    return results = [] , $wnd.IES(selector, ctx, results, null);
  }
   else {
    try {
      return ctx.querySelectorAll(selector);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        return results = [] , $wnd.IES(selector, ctx, results, null);
      }
       else 
        throw toJs($e0);
    }
  }
}
;
var NATIVE_EXCEPTIONS_REGEXP_0 = '.*(:contains|!=|:not|:nth-|:only-|:first|:last|:even|:odd).*';
var Lcom_google_gwt_query_client_impl_SelectorEngineNativeIE8_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineNativeIE8', 554);
function SelectorEngineNativeMin(){
}

defineClass(552, 69, $intern_23, SelectorEngineNativeMin);
_.select = function select_5(selector, ctx){
  var e;
  try {
    return $clinit_SelectorEngine() , ctx.querySelectorAll(selector);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $error(($clinit_GQuery() , console_1), "GwtQuery: Selector '" + selector + "' is unsupported in this SelectorEngineNativeMin engine." + ' Do not use this syntax or configure your module to use a JS fallback. ' + e.getMessage());
      return null;
    }
     else 
      throw toJs($e0);
  }
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngineNativeMin_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineNativeMin', 552);
function SelectorEngineNativeMinIE8(){
}

defineClass(553, 69, $intern_23, SelectorEngineNativeMinIE8);
_.select = function select_6(selector, ctx){
  var e;
  try {
    return $clinit_SelectorEngine() , ctx.querySelectorAll(selector);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $error(($clinit_GQuery() , console_1), "GwtQuery: Selector '" + selector + "' is unsupported in this SelectorEngineNativeMinIE8 engine," + " check that you are in 'standards mode' or configure your module to use JS fallback. " + e.getMessage());
      return null;
    }
     else 
      throw toJs($e0);
  }
}
;
var Lcom_google_gwt_query_client_impl_SelectorEngineNativeMinIE8_2_classLit = createForClass('com.google.gwt.query.client.impl', 'SelectorEngineNativeMinIE8', 553);
function $clear(this$static){
  var k, k$array, k$index, k$max;
  for (k$array = $keys(this$static) , k$index = 0 , k$max = k$array.length; k$index < k$max; ++k$index) {
    k = k$array[k$index];
    delete this$static[k];
  }
}

function $get_0(this$static, id_0){
  return gwtBox([this$static && this$static[id_0]]);
}

function $keys(this$static){
  var a, i_0, ret;
  a = $keysImpl(this$static);
  ret = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_1, 2, a.length, 6, 1);
  for (i_0 = 0; i_0 < a.length; i_0++) {
    ret[i_0] = a[i_0];
  }
  return ret;
}

function $keysImpl(this$static){
  var key, keys_0 = [];
  for (key in this$static) {
    this$static.hasOwnProperty(key) && key != '__gwt_ObjectId' && key != '$H' && keys_0.push(String(key));
  }
  return keys_0;
}

function $length(this$static){
  if (typeof this$static.length == 'number')
    return this$static.length;
  var key, ret = 0;
  for (key in this$static) {
    key != '__gwt_ObjectId' && ret++;
  }
  return ret;
}

function $put(this$static, id_0, obj){
  instanceOfBoolean(obj)?$putBoolean(this$static, id_0, unsafeCast(checkNotNull(castToBoolean(obj)))):instanceOf(obj, 70)?$putNumber(this$static, id_0, doubleValue__D__devirtual$(castTo(obj, 70))):(this$static[id_0] = obj , this$static);
  return this$static;
}

function $putBoolean(this$static, id_0, b){
  this$static[id_0] = b;
  return this$static;
}

function $putNumber(this$static, id_0, n){
  this$static[id_0] = n;
  return this$static;
}

function gwtBox(oneElementArray){
  var r = oneElementArray;
  if (typeof r == 'object' && r.length == 1) {
    var r = r[0], t = typeof r;
    if (t == 'boolean')
      return $clinit_Boolean() , r?TRUE:FALSE;
    if (t == 'number')
      return r;
  }
  return r || null;
}

function $get_1(this$static, hashCode){
  return $get_0(this$static, valueOf(hashCode));
}

function $put_0(this$static, key, val){
  $put(this$static, valueOf(hashCode__I__devirtual$(key)), val);
}

function $get_2(this$static, key){
  return $get_0(this$static, key);
}

function $put_1(this$static, key, val){
  $put(this$static, key, val);
}

function $addNode(this$static, n, i_0){
  $put(this$static, valueOf(i_0), n);
}

function create_0(node){
  return node?[node]:[];
}

function $add(this$static, vals){
  var t, t$index, t$max;
  for (t$index = 0 , t$max = vals.length; t$index < t$max; ++t$index) {
    t = vals[t$index];
    instanceOf(t, 70)?$putNumber(this$static, valueOf($length(this$static)), doubleValue__D__devirtual$(castTo(t, 70))):instanceOfBoolean(t)?$putBoolean(this$static, valueOf($length(this$static)), unsafeCast(checkNotNull(castToBoolean(t)))):$put(this$static, valueOf($length(this$static)), t);
  }
  return this$static;
}

function camelize(s){
  return s.replace(/\-(\w)/g, function(all, letter){
    return letter.toUpperCase();
  }
  );
}

function copyNodeList(oldNodes, newNodes){
  var e, i_0, i0, idlist, j, l, ret;
  ret = !oldNodes?create_0(null):oldNodes;
  idlist = {};
  for (i0 = 0; !!oldNodes && i0 < oldNodes.length; i0++) {
    e = oldNodes[i0];
    $put(idlist, valueOf(getObjectIdentityHashCode(e)), valueOf(1));
  }
  for (i_0 = 0 , l = newNodes.length , j = ret.length; i_0 < l; i_0++) {
    e = newNodes[i_0];
    !!idlist[valueOf(getObjectIdentityHashCode(e))] || $addNode(ret, newNodes[i_0], j++);
  }
  return ret;
}

function hasProperty(o, name_0){
  var p = name_0.split('.');
  for (var i_0 in p) {
    if (!(o && p[i_0] in o))
      return false;
    o = o[p[i_0]];
  }
  return true;
}

function isDetached(n){
  if (equalsIgnoreCase('html', n.nodeName)) {
    return false;
  }
  return !$isOrHasChild((!n || !isElement_0(n)?null:n.nodeType == 9?n:n.ownerDocument).body, n);
}

function isElement_0(o){
  return !!o && 'nodeType' in o && 'nodeName' in o;
}

function isFunction(o){
  return Object.prototype.toString.call(o) == '[object Function]';
}

function $exec(f, data_0){
  return gwtBox([f(data_0)]);
}

function JsUtils$JsFunction(f){
  this.arguments_0 = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  isFunction(f) && (this.jso = f);
}

defineClass(473, 472, {}, JsUtils$JsFunction);
_.equals = function equals_1(obj){
  return maskUndefined(this.jso) === maskUndefined(obj);
}
;
_.execute_1 = function execute_3(){
  !!this.jso && $setArguments(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [$exec(this.jso, $getArgument(this))]));
}
;
_.hashCode = function hashCode_3(){
  return getObjectIdentityHashCode(this.jso);
}
;
_.jso = null;
var Lcom_google_gwt_query_client_js_JsUtils$JsFunction_2_classLit = createForClass('com.google.gwt.query.client.js', 'JsUtils/JsFunction', 473);
function $unique(a){
  var cache, e, i_0, id_0, ret;
  ret = [];
  cache = {};
  for (i_0 = 0; i_0 < a.length; i_0++) {
    e = a[i_0];
    id_0 = getObjectIdentityHashCode(e);
    if (!cache[valueOf(id_0)]) {
      $putNumber(cache, valueOf(id_0), 1);
      ret[ret.length] = e;
    }
  }
  return ret;
}

function $clinit_QueuePlugin(){
  $clinit_QueuePlugin = emptyMethod;
  $clinit_GQuery();
  registerPlugin(Lcom_google_gwt_query_client_plugins_QueuePlugin_2_classLit, new QueuePlugin$1);
  $ensureNamesAreInitialized(Lcom_google_gwt_query_client_plugins_QueuePlugin_2_classLit);
  $ensureNamesAreInitialized(Lcom_google_gwt_query_client_plugins_QueuePlugin_2_classLit);
}

var Lcom_google_gwt_query_client_plugins_QueuePlugin_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'QueuePlugin', null);
function $clinit_Effects(){
  $clinit_Effects = emptyMethod;
  $clinit_QueuePlugin();
  registerPlugin(Lcom_google_gwt_query_client_plugins_Effects_2_classLit, new Effects$1);
  browser.msie?'ms':browser.opera?'o':browser.mozilla?'moz':browser.webkit?'webkit':'';
}

var Lcom_google_gwt_query_client_plugins_Effects_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'Effects', null);
function Effects$1(){
}

defineClass(462, 1, {}, Effects$1);
var Lcom_google_gwt_query_client_plugins_Effects$1_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'Effects/1', 462);
function $clinit_Events(){
  $clinit_Events = emptyMethod;
  $clinit_GQuery();
  registerPlugin(Lcom_google_gwt_query_client_plugins_Events_2_classLit, new Events$1);
}

var Lcom_google_gwt_query_client_plugins_Events_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'Events', null);
function Events$1(){
}

defineClass(464, 1, {}, Events$1);
var Lcom_google_gwt_query_client_plugins_Events$1_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'Events/1', 464);
function QueuePlugin$1(){
}

defineClass(463, 1, {}, QueuePlugin$1);
var Lcom_google_gwt_query_client_plugins_QueuePlugin$1_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'QueuePlugin/1', 463);
function $clinit_Widgets(){
  $clinit_Widgets = emptyMethod;
  $clinit_QueuePlugin();
  registerPlugin(Lcom_google_gwt_query_client_plugins_Widgets_2_classLit, new Widgets$1);
}

var Lcom_google_gwt_query_client_plugins_Widgets_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'Widgets', null);
function Widgets$1(){
}

defineClass(465, 1, {}, Widgets$1);
var Lcom_google_gwt_query_client_plugins_Widgets$1_2_classLit = createForClass('com.google.gwt.query.client.plugins', 'Widgets/1', 465);
function $exec_0(this$static, input_0){
  return this$static.exec(input_0);
}

function $test(this$static, input_0){
  return this$static.test(input_0);
}

function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(103, 1, {619:1, 103:1}, SafeUriString);
_.equals = function equals_2(obj){
  if (!instanceOf(obj, 103)) {
    return false;
  }
  return $equals_0(this.uri_0, castTo(castTo(obj, 619), 103).uri_0);
}
;
_.hashCode = function hashCode_4(){
  return getHashCode_0(this.uri_0);
}
;
_.toString_0 = function toString_14(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 103);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  impl_3 = castTo(create_com_google_gwt_user_client_impl_DOMImpl(), 61);
}

function createElement_1(tagName){
  $clinit_DOM();
  return $createElement($doc, tagName);
}

function dispatchEvent_1(evt, elem){
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener_0(elem);
  if (!eventListener) {
    return false;
  }
  dispatchEvent_2(evt, elem, eventListener);
  return true;
}

function dispatchEvent_2(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(($clinit_DOMImpl() , evt).type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function getFirstChild(elem){
  $clinit_DOM();
  return $getFirstChildElement_0(($clinit_DOMImpl() , elem));
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    ($clinit_DOMImpl() , impl_0).eventStopPropagation(evt);
    impl_0.eventPreventDefault(evt);
  }
  return ret;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName){
  $clinit_DOM();
  impl_3.sinkBitlessEvent(elem, eventTypeName);
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  impl_3.sinkEvents(elem, eventBits);
}

var currentEvent = null, impl_3, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i_0;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['CSS1Compat']);
  for (i_0 = 0; i_0 < allowedModes.length; i_0++) {
    if ($equals_0(allowedModes[i_0], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(($clinit_DOMImpl() , this$static).type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem(impl_3);
  !TYPE_5 && (TYPE_5 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_5, handler);
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function releaseCapture(elem){
  $clinit_DOM();
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  impl_3.releaseCapture_0(elem);
}

function setCapture(elem){
  $clinit_DOM();
  sCaptureElem = elem;
  impl_3.setCapture_0(elem);
}

function sinkEvents_0(elem, eventBits){
  $clinit_DOM();
  impl_3.sinkEvents(elem, eventBits);
}

var handlers_0;
function $revive(this$static){
  this$static.dead = false;
  this$static.source_0 = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_5 && !!handlers && $isEventHandled(handlers, TYPE_5)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(262, 578, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_5(handler){
  castTo(handler, 106).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_5, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 262);
function $clinit_History(){
  $clinit_History = emptyMethod;
  castTo(create_com_google_gwt_user_client_History_HistoryImpl(), 98);
  historyEventSource = new History$HistoryEventSource;
  token = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken;
  hashToken = ($clinit_Window() , impl_4).getHash();
  if (hashToken == null || ($clinit_String() , hashToken).length == 0) {
    return '';
  }
  return $decode(($clinit_String() , hashToken).substr(1, hashToken.length - 1));
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals_0(hashToken, token)) {
    token = hashToken;
    fire_2(historyEventSource);
  }
}

var historyEventSource, token;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_4 && (TYPE_4 = new GwtEvent$Type) , TYPE_4), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(543, 1, {22:1}, History$HistoryEventSource);
_.fireEvent_0 = function fireEvent_0(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 543);
function History$HistoryImpl(){
  this.attachListener();
}

defineClass(98, 1, {98:1}, History$HistoryImpl);
_.attachListener = function attachListener(){
  var handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}
;
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 98);
function History$HistoryImplIE8(){
  History$HistoryImpl.call(this);
}

defineClass(544, 98, {98:1}, History$HistoryImplIE8);
_.attachListener = function attachListener_0(){
  var handler = $entry(onHashChanged);
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = function(){
    var ex;
    try {
      handler();
    }
     catch (e) {
      ex = e;
    }
    if (oldHandler != null) {
      try {
        oldHandler();
      }
       catch (e) {
        ex = ex || e;
      }
    }
    if (ex != null) {
      throw ex;
    }
  }
  ;
}
;
var Lcom_google_gwt_user_client_History$HistoryImplIE8_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImplIE8', 544);
function $decode(toDecode){
  return $wnd.decodeURI(toDecode.replace('%23', '#'));
}

function $clinit_Window(){
  $clinit_Window = emptyMethod;
  impl_4 = castTo(create_com_google_gwt_user_client_impl_WindowImpl(), 91);
}

function addCloseHandler(handler){
  $clinit_Window();
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_2?TYPE_2:(TYPE_2 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  $clinit_Window();
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_3 && (TYPE_3 = new GwtEvent$Type) , TYPE_3), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    impl_4.initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    impl_4.initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  $clinit_Window();
  closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  $clinit_Window();
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  $clinit_Window();
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, impl_4, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_6 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(277, 578, {}, Window$ClosingEvent);
_.dispatch = function dispatch_6(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 277);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && ($clinit_String() , queryString).length > 1) {
    qs = ($clinit_String() , queryString).substr(1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 80))
          throw toJs($e0);
      }
      values = castTo(out.get_1(key), 33);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator_0(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 8);
    entry.setValue(unmodifiableList(castTo(entry.getValue_0(), 33)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = ($clinit_Window() , impl_4).getQueryString();
  if (!listParamMap || !$equals_0(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = castTo(listParamMap.get_1(name_0), 33);
  return !paramsForName?null:castToString(paramsForName.get_0(paramsForName.size_1() - 1));
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(124, 51, {22:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 124);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return $intern_25;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return $intern_26;
    case 'error':
      return $intern_2;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_27;
    case 'contextmenu':
      return $intern_28;
    case 'paste':
      return $intern_19;
    case 'touchstart':
      return $intern_29;
    case 'touchmove':
      return $intern_30;
    case 'touchend':
      return $intern_17;
    case 'touchcancel':
      return $intern_31;
    case 'gesturestart':
      return $intern_32;
    case 'gesturechange':
      return $intern_33;
    case 'gestureend':
      return $intern_34;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(this$static){
  if (!eventSystemIsInitialized) {
    this$static.initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 21)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

defineClass(61, 1, $intern_35);
var eventSystemIsInitialized = false;
var Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImpl', 61);
function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & $intern_26 && (elem.onscroll = bits & $intern_26?callDispatchEvent:null);
  chMask & $intern_25 && (elem.nodeName == 'IFRAME'?bits & $intern_25?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & $intern_25?callDispatchUnhandledEvent:null));
  chMask & $intern_2 && (elem.onerror = bits & $intern_2?callDispatchEvent:null);
  chMask & $intern_27 && (elem.onmousewheel = bits & $intern_27?callDispatchEvent:null);
  chMask & $intern_28 && (elem.oncontextmenu = bits & $intern_28?callDispatchEvent:null);
  chMask & $intern_19 && (elem.onpaste = bits & $intern_19?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i_0 = 0; i_0 < $wnd.__gwt_globalEventArray.length; i_0++) {
    !$wnd.__gwt_globalEventArray[i_0]() && (isCancelled = true);
  }
  return !isCancelled;
}

defineClass(587, 61, $intern_35);
_.initEventSystem = function initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = ($clinit_DOMImpl() , currentEventTarget);
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_2($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = ($clinit_Impl() , $moduleName).replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}
;
_.releaseCapture_0 = function releaseCapture_0(elem){
  $maybeInitializeEventSystem(this);
  elem.releaseCapture();
}
;
_.setCapture_0 = function setCapture_0(elem){
  $maybeInitializeEventSystem(this);
  elem.setCapture();
}
;
_.sinkBitlessEvent = function sinkBitlessEvent_0(elem, eventTypeName){
}
;
_.sinkEvents = function sinkEvents_1(elem, bits){
  $maybeInitializeEventSystem(this);
  $sinkEventsImpl(elem, bits);
}
;
var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
var Lcom_google_gwt_user_client_impl_DOMImplTrident_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplTrident', 587);
function DOMImplIE8_0(){
}

defineClass(353, 587, $intern_35, DOMImplIE8_0);
var Lcom_google_gwt_user_client_impl_DOMImplIE8_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE8', 353);
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_4, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_3 = $entry(dispatchEvent_4);
  dispatchUnhandledEvent_0 = $entry(dispatchUnhandledEvent_1);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEventsImpl_0(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_3:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_3:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_3:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_3:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_3:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_3:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_3:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_3:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_3:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_3:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_3:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_3:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_3:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_3:null);
  chMask & $intern_26 && (elem.onscroll = bits & $intern_26?dispatchEvent_3:null);
  chMask & $intern_25 && (elem.onload = bits & $intern_25?dispatchUnhandledEvent_0:null);
  chMask & $intern_2 && (elem.onerror = bits & $intern_2?dispatchEvent_3:null);
  chMask & $intern_27 && (elem.onmousewheel = bits & $intern_27?dispatchEvent_3:null);
  chMask & $intern_28 && (elem.oncontextmenu = bits & $intern_28?dispatchEvent_3:null);
  chMask & $intern_19 && (elem.onpaste = bits & $intern_19?dispatchEvent_3:null);
  chMask & $intern_29 && (elem.ontouchstart = bits & $intern_29?dispatchEvent_3:null);
  chMask & $intern_30 && (elem.ontouchmove = bits & $intern_30?dispatchEvent_3:null);
  chMask & $intern_17 && (elem.ontouchend = bits & $intern_17?dispatchEvent_3:null);
  chMask & $intern_31 && (elem.ontouchcancel = bits & $intern_31?dispatchEvent_3:null);
  chMask & $intern_32 && (elem.ongesturestart = bits & $intern_32?dispatchEvent_3:null);
  chMask & $intern_33 && (elem.ongesturechange = bits & $intern_33?dispatchEvent_3:null);
  chMask & $intern_34 && (elem.ongestureend = bits & $intern_34?dispatchEvent_3:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || !captureElem) {
    return;
  }
  dispatchEvent_1(evt, captureElem) && ($clinit_DOMImpl() , impl_0).eventStopPropagation(evt);
}

function dispatchDragEvent(evt){
  ($clinit_DOMImpl() , impl_0).eventPreventDefault(evt);
  dispatchEvent_4(evt);
}

function dispatchEvent_4(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_2(evt, element.nodeType != 1?null:element, getEventListener_0(element));
}

function dispatchUnhandledEvent_1(evt){
  var element;
  element = ($clinit_DOMImpl() , impl_0).eventGetCurrentTarget(evt);
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_4(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = ($clinit_DOMImpl() , impl_0).eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener_0(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

defineClass(588, 61, $intern_35);
_.initEventSystem = function initEventSystem_0(){
  $initEventSystem();
}
;
_.releaseCapture_0 = function releaseCapture_1(elem){
  $maybeInitializeEventSystem(this);
  captureElem == elem && (captureElem = null);
}
;
_.setCapture_0 = function setCapture_1(elem){
  $maybeInitializeEventSystem(this);
  captureElem = elem;
}
;
_.sinkBitlessEvent = function sinkBitlessEvent_1(elem, eventTypeName){
  $maybeInitializeEventSystem(this);
  this.sinkBitlessEventImpl(elem, eventTypeName);
}
;
_.sinkBitlessEventImpl = function sinkBitlessEventImpl(elem, eventTypeName){
  $sinkBitlessEventImpl(elem, eventTypeName);
}
;
_.sinkEvents = function sinkEvents_2(elem, bits){
  $maybeInitializeEventSystem(this);
  $sinkEventsImpl_0(elem, bits);
}
;
var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_3, dispatchUnhandledEvent_0;
var Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandard', 588);
defineClass(589, 588, $intern_35);
var Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandardBase', 589);
function DOMImplIE9_0(){
  $clinit_DOMImplStandard();
}

defineClass(354, 589, $intern_35, DOMImplIE9_0);
_.sinkBitlessEventImpl = function sinkBitlessEventImpl_0(elem, eventTypeName){
  $sinkBitlessEventImpl(elem, eventTypeName);
  $equals_0('dragover', eventTypeName) && $sinkBitlessEventImpl(elem, 'dragenter');
}
;
var Lcom_google_gwt_user_client_impl_DOMImplIE9_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE9', 354);
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = ($clinit_DOMImplStandard() , captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function DOMImplMozilla_0(){
  $clinit_DOMImplMozilla();
}

defineClass(355, 588, $intern_35, DOMImplMozilla_0);
_.initEventSystem = function initEventSystem_1(){
  $initEventSystem();
  $initSyntheticMouseUpEvents();
}
;
_.sinkEvents = function sinkEvents_3(elem, bits){
  $maybeInitializeEventSystem(this);
  $sinkEventsImpl_0(elem, bits);
  bits & $intern_27 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_3), false);
}
;
var Lcom_google_gwt_user_client_impl_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplMozilla', 355);
function DOMImplWebkit_0(){
  $clinit_DOMImplStandard();
}

defineClass(356, 589, $intern_35, DOMImplWebkit_0);
var Lcom_google_gwt_user_client_impl_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplWebkit', 356);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function WindowImpl(){
}

defineClass(91, 1, {91:1}, WindowImpl);
_.getHash = function getHash(){
  return $wnd.location.hash;
}
;
_.getQueryString = function getQueryString(){
  return $wnd.location.search;
}
;
_.initWindowCloseHandler = function initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      $clinit_Window();
      closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}
;
_.initWindowResizeHandler = function initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}
;
var Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImpl', 91);
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_1();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE(){
}

defineClass(286, 91, {91:1}, WindowImplIE);
_.getHash = function getHash_0(){
  var href_0 = $wnd.location.href;
  var hashLoc = href_0.indexOf('#');
  return hashLoc > 0?href_0.substring(hashLoc):'';
}
;
_.getQueryString = function getQueryString_0(){
  var href_0 = $wnd.location.href;
  var hashLoc = href_0.indexOf('#');
  hashLoc >= 0 && (href_0 = href_0.substring(0, hashLoc));
  var questionLoc = href_0.indexOf('?');
  return questionLoc > 0?href_0.substring(questionLoc):'';
}
;
_.initWindowCloseHandler = function initWindowCloseHandler_0(){
  $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
}
;
_.initWindowResizeHandler = function initWindowResizeHandler_0(){
  $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE', 286);
function WindowImplIE$1(){
}

defineClass(287, 1, {}, WindowImplIE$1);
_.execute_1 = function execute_4(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 287);
function WindowImplIE$2(){
}

defineClass(288, 1, {}, WindowImplIE$2);
_.execute_1 = function execute_5(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 288);
function WindowImplMozilla(){
}

defineClass(289, 91, {91:1}, WindowImplMozilla);
_.getHash = function getHash_1(){
  var href_0 = $wnd.location.href;
  var hashLoc = href_0.indexOf('#');
  return hashLoc > 0?href_0.substring(hashLoc):'';
}
;
var Lcom_google_gwt_user_client_impl_WindowImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplMozilla', 289);
function $clinit_UIObject(){
  $clinit_UIObject = emptyMethod;
  new UIObject$DebugIdImpl;
}

function $addStyleDependentName(this$static){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_PopupPanel() , impl_7).getStyleElement_0(getFirstChild(($clinit_DOM() , this$static.element)))) + '-' + 'popup', true);
}

function $addStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, true);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $getStyleElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $removeStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_PopupPanel() , impl_7).getStyleElement_0(getFirstChild(($clinit_DOM() , this$static.element)))) + '-' + styleSuffix, false);
}

function $removeStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, false);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setStyleName(this$static, style){
  $setClassName(($clinit_DOM() , this$static.element), style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.getStyleElement(), style, add_0);
}

function $setStylePrimaryName(this$static, style){
  setStylePrimaryName(this$static.getStyleElement(), style);
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

function getStylePrimaryName(elem){
  $clinit_UIObject();
  var fullClassName, spaceIdx;
  fullClassName = elem.className || '';
  spaceIdx = $indexOf_0(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return ($clinit_String() , fullClassName).substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  $clinit_UIObject();
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (($clinit_String() , style).length == 0) {
    throw toJs(new IllegalArgumentException('Style names cannot be empty'));
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  $clinit_UIObject();
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (($clinit_String() , style).length == 0) {
    throw toJs(new IllegalArgumentException('Style names cannot be empty'));
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i_0 = 1, n = classes.length; i_0 < n; i_0++) {
    var name_0 = classes[i_0];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i_0] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineClass(19, 1, {25:1, 19:1});
_.getStyleElement = function getStyleElement(){
  return $getStyleElement(this);
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_15(){
  if (!this.element) {
    return '(null handle)';
  }
  return $getString(($clinit_DOM() , this.element));
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 19);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.sinkEvents_0(typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents_0(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(($clinit_DOMImpl() , event_0).type)) {
    case 16:
    case 32:
      related = impl_0.eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      this$static.element.__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent_0(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_1(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 44)) {
    castTo(this$static.parent_0, 44).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

defineClass(16, 19, $intern_36);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent_0 = function fireEvent_1(event_0){
  $fireEvent_0(this, event_0);
}
;
_.isAttached = function isAttached_0(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.setParent = function setParent(parent_0){
  $setParent(this, parent_0);
}
;
_.sinkEvents_0 = function sinkEvents_4(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents(($clinit_DOM() , this.element), eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 16);
defineClass(576, 16, $intern_37);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 576);
function $add_0(this$static, child, container){
  $removeFromParent_0(child);
  $add_4(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement_0(($clinit_DOMImpl() , elem))), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(146, 576, $intern_37);
_.iterator_0 = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 146);
function $add_1(this$static, w){
  $add_0(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(273, 146, $intern_37);
_.remove = function remove_1(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 273);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  $clinit_Throwable();
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator_0(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_1(), 16);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put_2(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(249, 148, $intern_14, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 249);
function AttachDetachException$1(){
}

defineClass(250, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_6(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 250);
function AttachDetachException$2(){
}

defineClass(251, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_7(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 251);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_UIObject();
  impl_5 = ($clinit_FocusImpl() , $clinit_FocusImpl() , implWidget);
}

defineClass(418, 16, $intern_38);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
_.setFocus = function setFocus(focused){
  focused?impl_5.focus_0(($clinit_DOM() , this.element)):impl_5.blur_0(($clinit_DOM() , this.element));
}
;
var impl_5;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 418);
function $setText(this$static, text_0){
  $setInnerText(($clinit_DOM() , this$static.element), text_0);
}

function ButtonBase(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(419, 418, $intern_38);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 419);
function Button(){
  $clinit_FocusWidget();
  ButtonBase.call(this, $createPushButtonElement($doc));
  ($clinit_DOM() , this.element).className = 'gwt-Button';
}

defineClass(130, 419, $intern_38, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 130);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw toJs(new IllegalStateException_0('initWidget() is not called yet'));
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw toJs(new IllegalStateException_0('Composite.initWidget() may only be called once.'));
  }
  if (!widget) {
    throw toJs(new NullPointerException_0('widget cannot be null'));
  }
  instanceOf(widget, 105) && castTo(widget, 105);
  $removeFromParent_0(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $isAttached(this$static){
  if (this$static.widget) {
    return this$static.widget.isAttached();
  }
  return false;
}

function $onAttach_0(this$static){
  $checkInit(this$static);
  if (this$static.eventsToSink != -1) {
    this$static.widget.sinkEvents_0(this$static.eventsToSink);
    this$static.eventsToSink = -1;
  }
  this$static.widget.onAttach();
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  this$static.doAttachChildren();
}

function $onDetach_0(this$static){
  try {
    this$static.doDetachChildren();
  }
   finally {
    this$static.widget.onDetach();
  }
}

defineClass(574, 16, $intern_39);
_.isAttached = function isAttached_1(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_1(){
  $onAttach_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  this.widget.onBrowserEvent(event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach_0(this);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, this.widget.resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 574);
function $add_2(this$static, w){
  $add_0(this$static, w, ($clinit_DOM() , this$static.element));
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
}

defineClass(123, 146, $intern_37, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 123);
function $add_3(this$static, w){
  if (this$static.widget) {
    throw toJs(new IllegalStateException_0('SimplePanel can only contain one child widget'));
  }
  $setWidget(this$static, w);
}

function $remove_2(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!this$static.widget && $remove_2(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(($clinit_PopupPanel() , impl_7).getContainerElement_0(getFirstChild(this$static.element)), resolve($getElement(this$static.widget)));
    $setParent(w, this$static);
  }
}

function SimplePanel(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(149, 576, $intern_37);
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.iterator_0 = function iterator_1(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_2(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 149);
function $clinit_FocusPanel(){
  $clinit_FocusPanel = emptyMethod;
  $clinit_UIObject();
  impl_6 = ($clinit_FocusImpl() , $clinit_FocusImpl() , implPanel);
}

var impl_6;
function $doItemAction(){
  if (!null.$_nullField) {
    return;
  }
}

function $findItem(this$static){
  var item_0, item$iterator;
  for (item$iterator = new ArrayList$1(this$static.items); item$iterator.i < item$iterator.this$01.array.length;) {
    item_0 = throwClassCastExceptionUnlessNull($next_4(item$iterator));
    if (($clinit_DOM() , null.$_nullField).$_nullMethod()) {
      return item_0;
    }
  }
  return null;
}

function $focus(this$static){
  ($clinit_FocusPanel() , impl_6).focus_0(($clinit_DOM() , this$static.element));
}

function $init(this$static, vertical){
  var outer_0, table, tr;
  table = ($clinit_DOM() , $createTableElement($doc));
  this$static.body_0 = $createTBodyElement($doc);
  $appendChild(table, resolve(this$static.body_0));
  if (!vertical) {
    tr = $createTRElement($doc);
    $appendChild(this$static.body_0, resolve(tr));
  }
  outer_0 = ($clinit_FocusPanel() , impl_6).createFocusable();
  $appendChild(outer_0, resolve(table));
  $setElement_0(this$static, outer_0);
  $clinit_Roles();
  $set(MENUBAR, this$static.element);
  this$static.eventsToSink == -1?sinkEvents(this$static.element, 2225 | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= 2225);
  this$static.element.className = 'gwt-MenuBar';
  vertical?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'vertical', true):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'horizontal', true);
  this$static.element.style['outline'] = '0px';
  this$static.element.setAttribute('hideFocus', 'true');
  $addDomHandler(this$static, new MenuBar$2, ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
}

function $moveSelectionDown(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
}

function $moveSelectionUp(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
}

function $moveToNextItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
}

function $moveToPrevItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
}

function $onBrowserEvent_0(this$static, event_0){
  var keyCode;
  $findItem(($clinit_DOM() , ($clinit_DOMImpl() , impl_0).eventGetTarget(event_0) , this$static));
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      {
        ($clinit_FocusPanel() , impl_6).focus_0(this$static.element);
        break;
      }

    case 2048:
      {
        $selectFirstItemIfNoneSelected(this$static);
        break;
      }

    case 128:
      {
        keyCode = event_0.keyCode | 0;
        keyCode = keyCode;
        switch (keyCode) {
          case 37:
            $moveToPrevItem(this$static);
            impl_0.eventStopPropagation(event_0);
            impl_0.eventPreventDefault(event_0);
            break;
          case 39:
            $moveToNextItem(this$static);
            impl_0.eventStopPropagation(event_0);
            impl_0.eventPreventDefault(event_0);
            break;
          case 38:
            $moveSelectionUp(this$static);
            impl_0.eventStopPropagation(event_0);
            impl_0.eventPreventDefault(event_0);
            break;
          case 40:
            $moveSelectionDown(this$static);
            impl_0.eventStopPropagation(event_0);
            impl_0.eventPreventDefault(event_0);
            break;
          case 27:
            impl_0.eventStopPropagation(event_0);
            impl_0.eventPreventDefault(event_0);
            break;
          case 13:
            if (!$selectFirstItemIfNoneSelected(this$static)) {
              $doItemAction();
              impl_0.eventStopPropagation(event_0);
              impl_0.eventPreventDefault(event_0);
            }

        }
        break;
      }

  }
  $onBrowserEvent(this$static, event_0);
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem$iterator;
  for (nextItem$iterator = new ArrayList$1(this$static.items); nextItem$iterator.i < nextItem$iterator.this$01.array.length;) {
    throwClassCastExceptionUnlessNull($next_4(nextItem$iterator));
    if (null.$_nullField) {
      break;
    }
  }
  return true;
}

defineClass(147, 16, $intern_36);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  $onBrowserEvent_0(this, event_0);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
}
;
var Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar', 147);
function MenuBar$2(){
}

defineClass(253, 1, {614:1, 17:1}, MenuBar$2);
var Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/2', 253);
function $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer(){
  $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer = emptyMethod;
  $clinit_UriUtils();
  new SafeUriString('data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs=');
}

function $clinit_PopupPanel(){
  $clinit_PopupPanel = emptyMethod;
  $clinit_UIObject();
  impl_7 = castTo(create_com_google_gwt_user_client_ui_impl_PopupImpl(), 117);
}

function $addAutoHidePartner(this$static, partner){
  !this$static.autoHidePartners && (this$static.autoHidePartners = new ArrayList);
  $add_6(this$static.autoHidePartners, partner);
}

function $eventTargetsPartner(this$static, event_0){
  var elem, elem$iterator, target;
  if (!this$static.autoHidePartners) {
    return false;
  }
  target = ($clinit_DOMImpl() , impl_0).eventGetTarget(event_0);
  if (is_0(target)) {
    for (elem$iterator = new ArrayList$1(this$static.autoHidePartners); elem$iterator.i < elem$iterator.this$01.array.length;) {
      elem = castToJso($next_4(elem$iterator));
      if ($isOrHasChild(elem, target)) {
        return true;
      }
    }
  }
  return false;
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = ($clinit_DOMImpl() , impl_0).eventGetTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild(($clinit_DOM() , this$static.element), target);
  }
  return false;
}

function $getOffsetHeight(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetHeight');
}

function $getOffsetWidth(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetWidth');
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_0(this$static);
}

function $position(this$static, relativeObject, offsetWidth, offsetHeight){
  var distanceFromWindowLeft, distanceFromWindowTop, distanceToWindowBottom, distanceToWindowRight, left, offsetWidthDiff, textBoxOffsetWidth, top_0, windowBottom, windowLeft, windowRight, windowTop;
  textBoxOffsetWidth = $getPropertyInt(($clinit_DOM() , relativeObject.element), 'offsetWidth');
  offsetWidthDiff = offsetWidth - textBoxOffsetWidth;
  left = $getAbsoluteLeft(relativeObject.element);
  if (offsetWidthDiff > 0) {
    windowRight = ($clinit_Window() , $getClientWidth($doc) + $getScrollLeft_0($doc));
    windowLeft = $getScrollLeft_0($doc);
    distanceToWindowRight = windowRight - left;
    distanceFromWindowLeft = left - windowLeft;
    distanceToWindowRight < offsetWidth && distanceFromWindowLeft >= offsetWidthDiff && (left -= offsetWidthDiff);
  }
  top_0 = $getAbsoluteTop(relativeObject.element);
  windowTop = ($clinit_Window() , $getScrollTop($doc));
  windowBottom = $getScrollTop($doc) + $getClientHeight($doc);
  distanceFromWindowTop = top_0 - windowTop;
  distanceToWindowBottom = windowBottom - (top_0 + $getPropertyInt(relativeObject.element, 'offsetHeight'));
  distanceToWindowBottom < offsetHeight && distanceFromWindowTop >= offsetHeight?(top_0 -= offsetHeight):(top_0 += $getPropertyInt(relativeObject.element, 'offsetHeight'));
  $setPopupPosition_0(this$static, left, top_0);
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  event_0.isFirstHandler && false && (event_0.isCanceled = true);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent) || $eventTargetsPartner(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = ($clinit_DOM() , $eventGetTypeInt(($clinit_DOMImpl() , nativeEvent).type));
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        (nativeEvent.keyCode | 0) & $intern_3;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 4:
    case $intern_29:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        this$static.hide_0(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_17:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = impl_0.eventGetTarget(nativeEvent);
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = ($clinit_DOM() , this$static.element);
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setPopupPositionAndShow(this$static, callback){
  ($clinit_DOM() , this$static.element).style['visibility'] = 'hidden';
  !!this$static.shimElement && (this$static.shimElement.style['visibility'] = 'hidden' , undefined);
  current_0 = this$static;
  $maybeShowWithAnimation(this$static);
  this$static.isAnimationEnabled?$run(new Overlay$ResizeAnimation(this$static), 200, now_1()):$positionOrSizeUpdated(this$static, 1);
  current_0 = null;
  $setPosition(callback, $getPropertyInt(this$static.element, 'offsetWidth'), $getPropertyInt(this$static.element, 'offsetHeight'));
  this$static.element.style['visibility'] = 'visible';
  !!this$static.shimElement && (this$static.shimElement.style['visibility'] = 'visible' , undefined);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent_0(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $showRelativeTo(this$static, target){
  $setPopupPositionAndShow(this$static, new PopupPanel$2(this$static, target));
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

defineClass(252, 149, $intern_37);
_.getContainerElement = function getContainerElement_0(){
  return impl_7.getContainerElement_0(getFirstChild(($clinit_DOM() , this.element)));
}
;
_.getStyleElement = function getStyleElement_0(){
  return impl_7.getStyleElement_0(getFirstChild(($clinit_DOM() , this.element)));
}
;
_.hide = function hide(){
  this.hide_0(false);
}
;
_.hide_0 = function hide_0(autoClosed){
  $hide(this);
}
;
_.onUnload = function onUnload_0(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setPopupPosition = function setPopupPosition(left, top_0){
  $setPopupPosition(this, left, top_0);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var impl_7;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 252);
function $onResize(){
  var height, width_0, winHeight, winWidth;
  null.$_nullMethod();
  winWidth = ($clinit_Window() , $getClientWidth($doc));
  winHeight = $getClientHeight($doc);
  null.$_nullMethod(($clinit_Style$Display() , 'none'));
  null.$_nullMethod(($clinit_Style$Unit() , '0.0px'));
  null.$_nullMethod('0.0px');
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.$_nullMethod((width_0 > winWidth?width_0:winWidth) + 'px');
  null.$_nullMethod((height > winHeight?height:winHeight) + 'px');
  null.$_nullMethod('block');
}

function PopupPanel$1(){
}

defineClass(256, 1, {613:1, 17:1}, PopupPanel$1);
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 256);
function $setPosition(this$static, offsetWidth, offsetHeight){
  $position(this$static.this$01, this$static.val$target2, offsetWidth, offsetHeight);
}

function PopupPanel$2(this$0, val$target){
  this.this$01 = this$0;
  this.val$target2 = val$target;
}

defineClass(257, 1, {}, PopupPanel$2);
var Lcom_google_gwt_user_client_ui_PopupPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/2', 257);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(258, 1, $intern_40, PopupPanel$3);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  $previewNativeEvent(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 258);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(259, 1, {610:1, 17:1}, PopupPanel$4);
_.onValueChange = function onValueChange(event_0){
  this.this$01.autoHideOnHistoryEvents && this.this$01.hide();
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 259);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
  ($clinit_PopupPanel() , impl_7).setClip($getElement(this$static.curPanel), 'rect(auto, auto, auto, auto)');
  $getElement(this$static.curPanel).style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $getElement(this$static.curPanel).style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && this$static.curPanel.setPopupPosition(this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_1(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
  $getElement(this$static.curPanel).style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight_0);
  width_0 = round_int(progress * this$static.offsetWidth_0);
  switch (0) {
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  ($clinit_PopupPanel() , impl_7).setClip($getElement(this$static.curPanel), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      $getElement(this$static.curPanel).style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && this$static.curPanel.setPopupPosition(this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      ($clinit_PopupPanel() , impl_7).setClip($getElement(this$static.curPanel), 'rect(0px, 0px, 0px, 0px)');
      $add_1(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, 200, now_1());
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this);
  this.curPanel = panel;
}

defineClass(254, 109, {}, PopupPanel$ResizeAnimation);
_.onComplete = function onComplete_0(){
  $onComplete(this);
}
;
_.onStart = function onStart_0(){
  this.offsetHeight_0 = $getOffsetHeight(this.curPanel);
  this.offsetWidth_0 = $getOffsetWidth(this.curPanel);
  $getElement(this.curPanel).style['overflow'] = 'hidden';
  $onUpdate(this, (1 + $wnd.Math.cos($intern_4)) / 2);
}
;
_.onUpdate = function onUpdate(progress){
  $onUpdate(this, progress);
}
;
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 254);
function PopupPanel$ResizeAnimation$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(255, 65, {}, PopupPanel$ResizeAnimation$1);
_.run_0 = function run_0(){
  this.this$11.showTimer = null;
  $run(this.this$11, 200, now_1());
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation/1', 255);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

defineClass(575, 574, $intern_39);
var Lcom_google_gwt_user_client_ui_ResizeComposite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ResizeComposite', 575);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  $clinit_UIObject();
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  $clinit_UIObject();
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_15(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset_0(widgetsToDetach.map_0);
    $reset_0(rootPanels);
  }
}

function get_0(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = castTo($getStringValue(rootPanels, id_0), 89);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || ($clinit_DOM() , rp.element == elem)) {
      return rp;
    }
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_8(widgetsToDetach, rp);
  return rp;
}

defineClass(89, 273, $intern_41, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 89);
function RootPanel$1(){
}

defineClass(275, 1, {}, RootPanel$1);
_.execute_2 = function execute_8(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 275);
function RootPanel$2(){
}

defineClass(276, 1, $intern_42, RootPanel$2);
_.onClose = function onClose(closeEvent){
  detachWidgets();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 276);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, ($clinit_RootPanel() , $doc.body));
}

defineClass(274, 89, $intern_41, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 274);
function $next(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw toJs(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(260, 1, {}, SimplePanel$1);
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasElement;
}
;
_.remove_0 = function remove_3(){
  !!this.returned && $remove_2(this.this$01, this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 260);
function UIObject$DebugIdImpl(){
}

defineClass(198, 1, {}, UIObject$DebugIdImpl);
var Lcom_google_gwt_user_client_ui_UIObject$DebugIdImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject/DebugIdImpl', 198);
function $add_4(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i_0;
  for (i_0 = 0; i_0 < this$static.size_0; ++i_0) {
    if (this$static.array[i_0] == w) {
      return i_0;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i_0, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_1, 16, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i_0 = this$static.size_0 - 1; i_0 > beforeIndex; --i_0) {
    this$static.array[i_0] = this$static.array[i_0 - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_3(this$static, index_0){
  var i_0;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i_0 = index_0; i_0 < this$static.size_0; ++i_0) {
    this$static.array[i_0] = this$static.array[i_0 + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_1, 16, 4, 0, 1);
}

defineClass(414, 1, {}, WidgetCollection);
_.iterator_0 = function iterator_2(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 414);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(169, 1, {}, WidgetCollection$WidgetIterator);
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_0 = function remove_4(){
  if (!this.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this.this$01.parent_0.remove(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 169);
function $clinit_ClippedImageImpl(){
  var key, global;
  $clinit_ClippedImageImpl = emptyMethod;
  $clinit_UriUtils();
  new SafeUriString(($clinit_Impl() , key = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , global = $wnd || self , global[key] || $moduleBase) + 'clear.cache.gif');
}

function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = castTo(create_com_google_gwt_user_client_ui_impl_FocusImpl(), 77);
  implWidget = instanceOf(implPanel, 116)?new FocusImpl:implPanel;
}

function $getTabIndex(elem){
  return ($clinit_DOMImpl() , impl_0).getTabIndex(elem);
}

function FocusImpl(){
  $clinit_FocusImpl();
}

defineClass(77, 1, {77:1}, FocusImpl);
_.blur_0 = function blur_0(elem){
  elem.blur();
}
;
_.createFocusable = function createFocusable(){
  var e;
  e = $createDivElement($doc);
  e.tabIndex = 0;
  return e;
}
;
_.focus_0 = function focus_0(elem){
  elem.focus();
}
;
var implPanel, implWidget;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImpl', 77);
function FocusImplIE6(){
  $clinit_FocusImpl();
}

defineClass(466, 77, {77:1}, FocusImplIE6);
_.focus_0 = function focus_1(elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}
;
var Lcom_google_gwt_user_client_ui_impl_FocusImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplIE6', 466);
function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function FocusImplStandard(){
  $clinit_FocusImpl();
}

function createFocusable0(focusHandler){
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input_0 = $doc.createElement('input');
  input_0.type = 'text';
  input_0.tabIndex = -1;
  input_0.setAttribute('role', 'presentation');
  var style = input_0.style;
  style.opacity = 0;
  style.height = '1px';
  style.width = '1px';
  style.zIndex = -1;
  style.overflow = 'hidden';
  style.position = 'absolute';
  input_0.addEventListener('focus', focusHandler, false);
  div.appendChild(input_0);
  return div;
}

defineClass(116, 77, $intern_43, FocusImplStandard);
_.createFocusable = function createFocusable_0(){
  return createFocusable0(focusHandler_0?focusHandler_0:(focusHandler_0 = $createFocusHandler()));
}
;
var focusHandler_0;
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplStandard', 116);
function FocusImplSafari(){
  $clinit_FocusImpl();
}

defineClass(467, 116, $intern_43, FocusImplSafari);
_.blur_0 = function blur_1(elem){
  $wnd.setTimeout(function(){
    elem.blur();
  }
  , 0);
}
;
_.focus_0 = function focus_2(elem){
  $wnd.setTimeout(function(){
    elem.focus();
  }
  , 0);
}
;
var Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplSafari', 467);
function PopupImpl(){
}

defineClass(117, 1, {117:1}, PopupImpl);
_.createElement_1 = function createElement_2(){
  return $createDivElement($doc);
}
;
_.getContainerElement_0 = function getContainerElement_1(popup){
  return popup;
}
;
_.getStyleElement_0 = function getStyleElement_1(popup){
  return $getParentElement_0(($clinit_DOMImpl() , popup));
}
;
_.setClip = function setClip(popup, rect){
  popup.style['clip'] = rect;
}
;
var Lcom_google_gwt_user_client_ui_impl_PopupImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'PopupImpl', 117);
function $clinit_PopupImplMozilla(){
  $clinit_PopupImplMozilla = emptyMethod;
  isFF2Mac = isFF2Mac_0();
}

function PopupImplMozilla(){
  $clinit_PopupImplMozilla();
}

function isFF2Mac_0(){
  function makeVersion(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }

  var ua = navigator.userAgent;
  if (ua.indexOf('Macintosh') != -1) {
    var result_0 = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
    if (result_0 && result_0.length == 3) {
      if (makeVersion(result_0) <= 1008) {
        return true;
      }
    }
  }
  return false;
}

defineClass(468, 117, {117:1}, PopupImplMozilla);
_.createElement_1 = function createElement_3(){
  var outerElem;
  outerElem = ($clinit_DOM() , $createDivElement($doc));
  if (isFF2Mac) {
    outerElem.innerHTML = '<div><\/div>';
    $scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), new PopupImplMozilla$1(outerElem));
  }
  return outerElem;
}
;
_.getContainerElement_0 = function getContainerElement_2(outerElem){
  return isFF2Mac?$getFirstChildElement_0(($clinit_DOMImpl() , outerElem)):outerElem;
}
;
_.getStyleElement_0 = function getStyleElement_2(outerElem){
  return isFF2Mac?outerElem:$getParentElement_0(($clinit_DOMImpl() , outerElem));
}
;
_.setClip = function setClip_0(popup, rect){
  popup.style['clip'] = rect;
  popup.style['display'] = ($clinit_Style$Display() , 'none');
  popup.style['display'] = '';
}
;
var isFF2Mac = false;
var Lcom_google_gwt_user_client_ui_impl_PopupImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'PopupImplMozilla', 468);
function PopupImplMozilla$1(val$outerElem){
  this.val$outerElem2 = val$outerElem;
}

defineClass(469, 1, {}, PopupImplMozilla$1);
_.execute_1 = function execute_9(){
  this.val$outerElem2.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
}
;
var Lcom_google_gwt_user_client_ui_impl_PopupImplMozilla$1_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'PopupImplMozilla/1', 469);
function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(create_com_google_gwt_useragent_client_UserAgent(), 107);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_0(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(121, 7, $intern_5);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 121);
defineClass(37, 121, $intern_5);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 37);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  $clinit_Throwable();
  Error_0.call(this, ($clinit_String() , 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString__Ljava_lang_String___devirtual$('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.')), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7):null);
}

defineClass(184, 37, $intern_5, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 184);
function UserAgentImplGecko1_8(){
}

defineClass(297, 1, $intern_44, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 297);
function UserAgentImplIe10(){
}

defineClass(295, 1, $intern_44, UserAgentImplIe10);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 295);
function UserAgentImplIe8(){
}

defineClass(298, 1, $intern_44, UserAgentImplIe8);
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
_.getRuntimeValue = function getRuntimeValue_1(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 298);
function UserAgentImplIe9(){
}

defineClass(294, 1, $intern_44, UserAgentImplIe9);
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
_.getRuntimeValue = function getRuntimeValue_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 294);
function UserAgentImplSafari(){
}

defineClass(296, 1, $intern_44, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue_3(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 296);
function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(280, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 280);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(281, 1, {561:1}, SimpleEventBus$2);
_.execute_1 = function execute_10(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 281);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(282, 1, {561:1}, SimpleEventBus$3);
_.execute_1 = function execute_11(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 282);
function $clinit_AnimationUtil(){
  $clinit_AnimationUtil = emptyMethod;
  ANIMATION_END_EVENT_NAME = whichAnimationEndEvent();
  whichAnimationProperty();
}

function addAnimationEndListener(elem, listener){
  $clinit_AnimationUtil();
  var callbackFunc = $entry(function(e){
    listener.onAnimationEnd(e);
  }
  );
  elem.addEventListener(ANIMATION_END_EVENT_NAME, callbackFunc, false);
  !elem._vaadin_animationend_callbacks && (elem._vaadin_animationend_callbacks = []);
  elem._vaadin_animationend_callbacks.push(callbackFunc);
  return callbackFunc;
}

function getAnimationName(event_0){
  $clinit_AnimationUtil();
  if (event_0.webkitAnimationName)
    return event_0.webkitAnimationName;
  else if (event_0.animationName)
    return event_0.animationName;
  else if (event_0.mozAnimationName)
    return event_0.mozAnimationName;
  else if (event_0.oAnimationName)
    return event_0.oAnimationName;
  return '';
}

function getAnimationName_0(cstyle){
  $clinit_AnimationUtil();
  var cs = cstyle.computedStyle;
  if (!cs.getPropertyValue)
    return '';
  if (cs.getPropertyValue('-webkit-animation-name'))
    return cs.getPropertyValue('-webkit-animation-name');
  else if (cs.getPropertyValue('animation-name'))
    return cs.getPropertyValue('animation-name');
  else if (cs.getPropertyValue('-moz-animation-name'))
    return cs.getPropertyValue('-moz-animation-name');
  else if (cs.getPropertyValue('-o-animation-name'))
    return cs.getPropertyValue('-o-animation-name');
  return '';
}

function removeAllAnimationEndListeners(elem){
  $clinit_AnimationUtil();
  if (elem._vaadin_animationend_callbacks) {
    var callbacks = elem._vaadin_animationend_callbacks;
    for (var i_0 = 0; i_0 < callbacks.length; i_0++) {
      elem.removeEventListener(ANIMATION_END_EVENT_NAME, callbacks[i_0], false);
    }
  }
}

function removeAnimationEndListener(elem, listener){
  $clinit_AnimationUtil();
  elem.removeEventListener(ANIMATION_END_EVENT_NAME, listener, false);
}

function whichAnimationEndEvent(){
  var el = document.createElement('fakeelement');
  var anims = {'animationName':'animationend', 'OAnimationName':'oAnimationEnd', 'MozAnimation':'animationend', 'WebkitAnimation':'webkitAnimationEnd'};
  for (var a in anims) {
    if (el.style[a] !== undefined) {
      return anims[a];
    }
  }
}

function whichAnimationProperty(){
  var el = document.createElement('fakeelement');
  var anims = ['animation', 'oAnimation', 'mozAnimation', 'webkitAnimation'];
  for (var i_0 = 0; i_0 < anims.length; i_0++) {
    if (el.style[anims[i_0]] !== undefined) {
      return anims[i_0];
    }
  }
}

var ANIMATION_END_EVENT_NAME;
function $clinit_BrowserInfo(){
  $clinit_BrowserInfo = emptyMethod;
  var browserClassnames;
  browserClassnames = $getCSSClass((!instance_1 && (instance_1 = new BrowserInfo) , instance_1));
  $clinit_RootPanel();
  $addStyleName(get_0(null), browserClassnames);
}

function $detectTouchDevice(){
  try {
    document.createEvent('TouchEvent');
    return true;
  }
   catch (e) {
    return false;
  }
}

function $getCSSClass(this$static){
  var browserEngineClass, browserIdentifier, majorVersionClass, minorVersionClass, osClass;
  if (cssClass == null) {
    browserIdentifier = '';
    majorVersionClass = '';
    minorVersionClass = '';
    browserEngineClass = '';
    if (this$static.browserDetails.isFirefox) {
      browserIdentifier = 'ff';
      majorVersionClass = 'ff' + this$static.browserDetails.browserMajorVersion;
      minorVersionClass = majorVersionClass + this$static.browserDetails.browserMinorVersion;
      browserEngineClass = 'gecko';
    }
     else if (this$static.browserDetails.isChrome) {
      browserIdentifier = 'sa';
      majorVersionClass = 'ch';
      browserEngineClass = 'webkit';
    }
     else if (this$static.browserDetails.isSafari) {
      browserIdentifier = 'sa';
      majorVersionClass = 'sa' + this$static.browserDetails.browserMajorVersion;
      minorVersionClass = majorVersionClass + this$static.browserDetails.browserMinorVersion;
      browserEngineClass = 'webkit';
    }
     else if (this$static.browserDetails.isIE) {
      browserIdentifier = 'ie';
      majorVersionClass = 'ie' + this$static.browserDetails.browserMajorVersion;
      minorVersionClass = majorVersionClass + this$static.browserDetails.browserMinorVersion;
      browserEngineClass = 'trident';
    }
     else if (this$static.browserDetails.isEdge) {
      browserIdentifier = 'edge';
      majorVersionClass = 'edge' + this$static.browserDetails.browserMajorVersion;
      minorVersionClass = majorVersionClass + this$static.browserDetails.browserMinorVersion;
      browserEngineClass = '';
    }
     else if (this$static.browserDetails.isOpera) {
      browserIdentifier = 'op';
      majorVersionClass = 'op' + this$static.browserDetails.browserMajorVersion;
      minorVersionClass = majorVersionClass + this$static.browserDetails.browserMinorVersion;
      browserEngineClass = 'presto';
    }
    cssClass = 'v-' + browserIdentifier;
    $equals_0('', majorVersionClass) || (cssClass = cssClass + ' ' + 'v-' + majorVersionClass);
    $equals_0('', minorVersionClass) || (cssClass = cssClass + ' ' + 'v-' + minorVersionClass);
    $equals_0('', browserEngineClass) || (cssClass = cssClass + ' ' + 'v-' + browserEngineClass);
    osClass = $getOperatingSystemClass(this$static);
    osClass != null && (cssClass = cssClass + ' ' + osClass);
    this$static.touchDevice && (cssClass = cssClass + ' ' + 'v-' + 'touch');
  }
  return cssClass;
}

function $getIEDocumentMode(){
  var mode = $wnd.document.documentMode;
  if (!mode)
    return -1;
  return mode;
}

function $getOperatingSystemClass(this$static){
  if (this$static.browserDetails.os == 5) {
    return 'v-android';
  }
   else if (this$static.browserDetails.os == 4) {
    return 'v-ios v-ios' + this$static.browserDetails.osMajorVersion;
  }
   else if (this$static.browserDetails.os == 1) {
    return 'v-win';
  }
   else if (this$static.browserDetails.os == 3) {
    return 'v-lin';
  }
   else if (this$static.browserDetails.os == 2) {
    return 'v-mac';
  }
  return null;
}

function $isBrowserVersionNewerOrEqual(this$static){
  if (this$static.browserDetails.browserMajorVersion == 8) {
    return this$static.browserDetails.browserMinorVersion >= 0;
  }
  return this$static.browserDetails.browserMajorVersion > 8;
}

function $isIE10(this$static){
  return this$static.browserDetails.isIE && this$static.browserDetails.browserMajorVersion == 10;
}

function $isIE8(this$static){
  return this$static.browserDetails.isIE && this$static.browserDetails.browserMajorVersion == 8;
}

function $isIE9(this$static){
  return this$static.browserDetails.isIE && this$static.browserDetails.browserMajorVersion == 9;
}

function BrowserInfo(){
  $clinit_BrowserInfo();
  var documentMode;
  this.browserDetails = new VBrowserDetails(getBrowserString());
  if (this.browserDetails.isIE) {
    documentMode = $getIEDocumentMode();
    documentMode != -1 && $setIEMode(this.browserDetails, documentMode);
  }
  this.browserDetails.isChrome?(this.touchDevice = 'ontouchstart' in window):this.browserDetails.isIE?(this.touchDevice = !!navigator.msMaxTouchPoints):(this.touchDevice = !this.browserDetails.isPhantomJS && $detectTouchDevice());
}

function getBrowserString(){
  $clinit_BrowserInfo();
  return $wnd.navigator.userAgent;
}

defineClass(27, 1, {}, BrowserInfo);
_.touchDevice = false;
var cssClass = null, instance_1;
var Lcom_vaadin_client_BrowserInfo_2_classLit = createForClass('com.vaadin.client', 'BrowserInfo', 27);
function $getDoubleProperty(this$static){
  var result, value_0;
  value_0 = $getProperty_0(this$static, 'height');
  result = parseFloat(value_0);
  return result;
}

function $getProperty_0(this$static, name_0){
  var cs = this$static.computedStyle;
  var elem = this$static.elem;
  if (name_0.indexOf('border') > -1 && name_0.indexOf('Width') > -1) {
    var borderStyleProp = name_0.substring(0, name_0.length - 5) + 'Style';
    if (cs.getPropertyValue)
      var borderStyle = cs.getPropertyValue(borderStyleProp);
    else 
      var borderStyle = cs[borderStyleProp];
    if (borderStyle == 'none')
      return '0px';
  }
  if (cs.getPropertyValue) {
    name_0 = name_0.replace(/([A-Z])/g, '-$1').toLowerCase();
    var ret = cs.getPropertyValue(name_0);
  }
   else {
    var ret = cs[name_0];
    var style = elem.style;
    if (!/^\d+(px)?$/i.test(ret) && /^\d/.test(ret)) {
      var left = style.left, rsLeft = elem.runtimeStyle.left;
      elem.runtimeStyle.left = cs.left;
      style.left = ret || 0;
      ret = style.pixelLeft + 'px';
      style.left = left;
      elem.runtimeStyle.left = rsLeft;
    }
  }
  if (name_0.indexOf('margin') > -1 && ret == 'auto') {
    return '0px';
  }
  name_0 == 'width' && ret == 'auto'?(ret = elem.clientWidth + 'px'):name_0 == 'height' && ret == 'auto' && (ret = elem.clientHeight + 'px');
  return ret;
}

function ComputedStyle(elem){
  this.computedStyle = getComputedStyle_2(elem);
  this.elem = elem;
}

function getComputedStyle_2(elem){
  if (elem.nodeType != 1) {
    return {};
  }
  if ($wnd.document.defaultView && $wnd.document.defaultView.getComputedStyle) {
    return $wnd.document.defaultView.getComputedStyle(elem, null);
  }
  if (elem.currentStyle) {
    return elem.currentStyle;
  }
}

defineClass(138, 1, {}, ComputedStyle);
var Lcom_vaadin_client_ComputedStyle_2_classLit = createForClass('com.vaadin.client', 'ComputedStyle', 138);
function $scheduleDeferred_0(this$static, cmd){
  ++this$static.deferredCommandTrackers;
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
  $scheduleDeferred(this$static, new VSchedulerImpl$1(this$static));
}

function VSchedulerImpl(){
}

defineClass(340, 291, {}, VSchedulerImpl);
_.deferredCommandTrackers = 0;
var Lcom_vaadin_client_VSchedulerImpl_2_classLit = createForClass('com.vaadin.client', 'VSchedulerImpl', 340);
function VSchedulerImpl$1(this$0){
  this.this$01 = this$0;
}

defineClass(341, 1, {}, VSchedulerImpl$1);
_.execute_1 = function execute_12(){
  --this.this$01.deferredCommandTrackers;
}
;
var Lcom_vaadin_client_VSchedulerImpl$1_2_classLit = createForClass('com.vaadin.client', 'VSchedulerImpl/1', 341);
function $clinit_WidgetUtil(){
  $clinit_WidgetUtil = emptyMethod;
  $clinit_DOM();
  $createDivElement($doc);
}

function findWidget(element){
  $clinit_WidgetUtil();
  var eventListener, w;
  if (element) {
    eventListener = null;
    while (!eventListener && !!element) {
      eventListener = ($clinit_DOM() , getEventListener_0(element));
      !eventListener && (element = $getParentElement_0(($clinit_DOMImpl() , element)));
    }
    if (instanceOf(eventListener, 16)) {
      w = castTo(eventListener, 16);
      while (w) {
        return w;
      }
    }
  }
  return null;
}

function forceIERedraw(e){
  var style, currentValue;
  $clinit_WidgetUtil();
  ($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1).browserDetails.isIE && (style = e.style , currentValue = ($clinit_DOMImpl() , style)['zoom'] , style['zoom'] = '1' , undefined , (e.offsetWidth || 0) | 0 , style['zoom'] = currentValue , undefined , undefined);
}

function getBorderThickness(element, borderNames){
  $clinit_WidgetUtil();
  if (typeof $wnd.getComputedStyle === 'function') {
    var computedStyle = $wnd.getComputedStyle(element);
    var width_0 = 0;
    for (i = 0; i < borderNames.length; i++) {
      var borderWidth = computedStyle[borderNames[i]];
      width_0 += parseFloat(borderWidth);
    }
    return width_0;
  }
   else {
    var parentElement = element.offsetParent;
    var cloneElement = element.cloneNode(false);
    cloneElement.style.boxSizing = 'content-box';
    parentElement.appendChild(cloneElement);
    cloneElement.style.height = '10px';
    var heightWithBorder = cloneElement.offsetHeight;
    for (i = 0; i < borderNames.length; i++) {
      cloneElement.style[borderNames[i]] = '0';
    }
    var heightWithoutBorder = cloneElement.offsetHeight;
    parentElement.removeChild(cloneElement);
    return heightWithBorder - heightWithoutBorder;
  }
}

function getFocusedElement(){
  $clinit_WidgetUtil();
  if ($wnd.document.activeElement) {
    return $wnd.document.activeElement;
  }
  return null;
}

function getNativeScrollbarSize(){
  $clinit_WidgetUtil();
  var scroller;
  if (detectedScrollbarSize < 0) {
    scroller = ($clinit_DOM() , $createDivElement($doc));
    scroller.style['width'] = '50px';
    scroller.style['height'] = '50px';
    scroller.style['overflow'] = 'scroll';
    scroller.style['position'] = 'absolute';
    scroller.style['marginLeft'] = '-5000px';
    $appendChild(($clinit_RootPanel() , $doc.body), scroller);
    detectedScrollbarSize = ((scroller.offsetWidth || 0) | 0) - (parseInt(scroller['clientWidth']) | 0);
    $removeChild($doc.body, scroller);
  }
  return detectedScrollbarSize;
}

function getRequiredHeightBoundingClientRectDouble(element){
  $clinit_WidgetUtil();
  var height;
  if (element.getBoundingClientRect != null) {
    var rect = element.getBoundingClientRect();
    height = rect.bottom - rect.top;
  }
   else {
    height = element.offsetHeight;
  }
  return height;
}

function getRequiredWidthBoundingClientRectDouble(element){
  $clinit_WidgetUtil();
  if (element.getBoundingClientRect) {
    var rect = element.getBoundingClientRect();
    return rect.right - rect.left;
  }
   else {
    return element.offsetWidth;
  }
}

function getSubPixelRoundingFactor(){
  var computedHeight, computedStyle, div, parent_0, probeSize;
  if (detectedSubPixelRoundingFactor != -1) {
    return detectedSubPixelRoundingFactor;
  }
  div = $createDivElement($doc);
  $appendChild($doc.body, div);
  div.style['height'] = ($clinit_Style$Unit() , '0.999999px');
  computedStyle = new ComputedStyle(div);
  computedHeight = $getDoubleProperty(computedStyle);
  if (computedHeight < 0.999999) {
    detectedSubPixelRoundingFactor = toInt(fromDouble_0($wnd.Math.round(1 / (1 - computedHeight))));
  }
   else {
    probeSize = 1;
    while ($getDoubleProperty(computedStyle) != 0) {
      computedHeight = $getDoubleProperty(computedStyle);
      probeSize /= 2;
      div.style['height'] = probeSize + 'px';
    }
    detectedSubPixelRoundingFactor = toInt(fromDouble_0($wnd.Math.round(1 / computedHeight)));
  }
  parent_0 = $getParentElement_0(($clinit_DOMImpl() , div));
  !!parent_0 && parent_0.removeChild(div);
  return detectedSubPixelRoundingFactor;
}

function getTouchOrMouseClientX(event_0){
  $clinit_WidgetUtil();
  return $indexOf_0(($clinit_DOMImpl() , event_0).type, 'touch') != -1?$getClientX(event_0.changedTouches[0]):toInt32(event_0.clientX || 0);
}

function getTouchOrMouseClientY(event_0){
  $clinit_WidgetUtil();
  return $indexOf_0(($clinit_DOMImpl() , event_0).type, 'touch') != -1?$getClientY(event_0.changedTouches[0]):toInt32(event_0.clientY || 0);
}

function measureVerticalBorder(element){
  $clinit_WidgetUtil();
  var borders, height, offsetHeight, offsetWidth, width_0;
  if (($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1).browserDetails.isIE) {
    width_0 = $getProperty(element.style, 'width');
    height = $getProperty(element.style, 'height');
    offsetWidth = (element.offsetWidth || 0) | 0;
    offsetHeight = (element.offsetHeight || 0) | 0;
    offsetHeight < 1 && (offsetHeight = 1);
    offsetWidth < 1 && (offsetWidth = 10);
    element.style['width'] = offsetWidth + ($clinit_Style$Unit() , 'px');
    element.style['height'] = offsetHeight + 'px';
    borders = ((element.offsetHeight || 0) | 0) - (parseInt(element['clientHeight']) | 0);
    element.style['height'] = height;
    element.style['width'] = width_0;
  }
   else {
    borders = ((element.offsetHeight || 0) | 0) - (parseInt(element['clientHeight']) | 0);
  }
  return borders;
}

function pixelValuesEqual(num1, num2){
  $clinit_WidgetUtil();
  return (num1 - num2 <= 0?0 - (num1 - num2):num1 - num2) <= $intern_45;
}

function roundSize(size_0, roundUp){
  var integerPart, nrFractions, integerPart_0, nrFractions_0;
  $clinit_WidgetUtil();
  var factor;
  if ($isIE8(($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1))) {
    return roundUp?$wnd.Math.ceil(size_0):round_int(size_0);
  }
  factor = getSubPixelRoundingFactor();
  if (factor < 0 || size_0 < 0) {
    return size_0;
  }
  return roundUp?(integerPart = round_int(size_0) , nrFractions = (size_0 - integerPart) * factor , integerPart + $wnd.Math.ceil(nrFractions) / factor):(integerPart_0 = round_int(size_0) , nrFractions_0 = (size_0 - integerPart_0) * factor , integerPart_0 + round_int(nrFractions_0) / factor);
}

function setTextSelectionEnabled(e, enable){
  $clinit_WidgetUtil();
  if (!enable) {
    e.ondrag = function(){
      return false;
    }
    ;
    e.onselectstart = function(){
      return false;
    }
    ;
    e.style.webkitUserSelect = 'none';
  }
   else {
    e.ondrag = null;
    e.onselectstart = null;
    e.style.webkitUserSelect = 'text';
  }
}

var detectedScrollbarSize = -1, detectedSubPixelRoundingFactor = -1;
defineClass(603, 1, {});
_.equals = function equals_3(obj){
  return $equalsExplicit(this, obj);
}
;
_.hashCode = function hashCode_5(){
  return hashCode__I__devirtual$(this.row);
}
;
var Lcom_vaadin_client_data_DataSource$RowHandle_2_classLit = createForClass('com.vaadin.client.data', 'DataSource/RowHandle', 603);
function $cancelDrag(this$static){
  this$static.callback.onDragCancel();
  this$static.callback.onDragEnd();
  !!this$static.stopTimer.timerId || $schedule(this$static.stopTimer, 100);
}

function $onDragStartOnDraggableElement(this$static, dragStartingEvent, callback){
  this$static.startPreviewHandler = addNativePreviewHandler(new DragAndDropHandler$3(this$static, dragStartingEvent, callback));
}

function $removeStartPreviewHandler(this$static){
  if (this$static.startPreviewHandler) {
    $removeHandler(this$static.startPreviewHandler.real);
    this$static.startPreviewHandler = null;
  }
}

function $startDrag(this$static, startEvent, triggerEvent, callback){
  if (callback.onDragStart(startEvent)) {
    this$static.callback = callback;
    this$static.dragging = true;
    setCapture(($clinit_RootPanel() , $doc.body));
    this$static.dragHandlerRegistration = addNativePreviewHandler(this$static.dragPreviewHandler);
    callback.onDragUpdate(triggerEvent.nativeEvent);
  }
}

function $stopDrag(this$static){
  !!this$static.stopTimer.timerId || $schedule(this$static.stopTimer, 100);
}

function DragAndDropHandler(){
  this.stopTimer = new DragAndDropHandler$1(this);
  this.dragPreviewHandler = new DragAndDropHandler$2(this);
}

defineClass(150, 1, {}, DragAndDropHandler);
_.dragging = false;
var Lcom_vaadin_client_ui_dd_DragAndDropHandler_2_classLit = createForClass('com.vaadin.client.ui.dd', 'DragAndDropHandler', 150);
function DragAndDropHandler$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(266, 65, {}, DragAndDropHandler$1);
_.run_0 = function run_1(){
  releaseCapture(($clinit_RootPanel() , $doc.body));
  if (this.this$01.callback) {
    this.this$01.callback.onDragEnd();
    this.this$01.callback = null;
  }
  if (this.this$01.dragHandlerRegistration) {
    $removeHandler(this.this$01.dragHandlerRegistration.real);
    this.this$01.dragHandlerRegistration = null;
  }
  this.this$01.dragging = false;
}
;
var Lcom_vaadin_client_ui_dd_DragAndDropHandler$1_2_classLit = createForClass('com.vaadin.client.ui.dd', 'DragAndDropHandler/1', 266);
function DragAndDropHandler$2(this$0){
  this.this$01 = this$0;
}

defineClass(267, 1, $intern_40, DragAndDropHandler$2);
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var keyCode, typeInt;
  if (this.this$01.dragging) {
    typeInt = $getTypeInt(event_0.nativeEvent);
    switch (typeInt) {
      case 64:
      case $intern_30:
        this.this$01.callback.onDragUpdate(event_0.nativeEvent);
        break;
      case 128:
        keyCode = $getKeyCode(event_0.nativeEvent);
        keyCode == 27 && $cancelDrag(this.this$01);
        break;
      case $intern_31:
        $cancelDrag(this.this$01);
        break;
      case $intern_17:
      case 8:
        this.this$01.callback.onDragUpdate(event_0.nativeEvent);
        this.this$01.callback.onDrop();
        $stopDrag(this.this$01);
    }
  }
   else {
    $stopDrag(this.this$01);
  }
  $stopPropagation(event_0.nativeEvent);
  $preventDefault(event_0.nativeEvent);
  event_0.isCanceled = true;
}
;
var Lcom_vaadin_client_ui_dd_DragAndDropHandler$2_2_classLit = createForClass('com.vaadin.client.ui.dd', 'DragAndDropHandler/2', 267);
function DragAndDropHandler$3(this$0, val$dragStartingEvent, val$callback){
  this.this$01 = this$0;
  this.val$dragStartingEvent2 = val$dragStartingEvent;
  this.val$callback3 = val$callback;
  this.startX = ($clinit_WidgetUtil() , getTouchOrMouseClientX(this.val$dragStartingEvent2));
  this.startY = getTouchOrMouseClientY(this.val$dragStartingEvent2);
}

defineClass(268, 1, $intern_40, DragAndDropHandler$3);
_.onPreviewNativeEvent = function onPreviewNativeEvent_1(event_0){
  var currentX, currentY, typeInt;
  typeInt = $getTypeInt(event_0.nativeEvent);
  if (typeInt == -1 && $indexOf_0(toNative($getType(event_0.nativeEvent)).toLowerCase(), 'pointer') != -1) {
    return;
  }
  switch (typeInt) {
    case 16:
    case 32:
      break;
    case 128:
    case 256:
    case 512:
    case 4096:
    case 2048:
      break;
    case 64:
    case $intern_30:
      currentX = ($clinit_WidgetUtil() , getTouchOrMouseClientX(event_0.nativeEvent));
      currentY = getTouchOrMouseClientY(event_0.nativeEvent);
      if (abs_1(this.startX - currentX) > 3 || abs_1(this.startY - currentY) > 3) {
        $removeStartPreviewHandler(this.this$01);
        $startDrag(this.this$01, this.val$dragStartingEvent2, event_0, this.val$callback3);
      }

      $stopPropagation(event_0.nativeEvent);
      $preventDefault(event_0.nativeEvent);
      event_0.isCanceled = true;
      break;
    default:$removeStartPreviewHandler(this.this$01);
  }
}
;
_.startX = 0;
_.startY = 0;
var Lcom_vaadin_client_ui_dd_DragAndDropHandler$3_2_classLit = createForClass('com.vaadin.client.ui.dd', 'DragAndDropHandler/3', 268);
function $addStyleName_0(this$static, styleName){
  $addClassName(this$static.element, styleName);
}

function $removeFromParent_1(this$static){
  if (this$static.parent_0) {
    $removeChild(this$static.parent_0, this$static.element);
    this$static.parent_0 = null;
  }
}

function $removeStyleName_0(this$static, styleName){
  $removeClassName(this$static.element, styleName);
}

function DragHandle(baseName, callback){
  this.parent_0 = null;
  this.element = ($clinit_DOM() , $createElement($doc, 'div'));
  this.baseClassName = baseName;
  this.userCallback = callback;
  $addStyleName_0(this, this.baseClassName);
  this.dndCallback = new DragHandle$1(this);
  this.dndHandler = new DragAndDropHandler;
  sinkEvents(this.element, 1048580);
  setEventListener(this.element, new DragHandle$2(this));
}

defineClass(263, 1, {}, DragHandle);
var Lcom_vaadin_client_ui_dd_DragHandle_2_classLit = createForClass('com.vaadin.client.ui.dd', 'DragHandle', 263);
function DragHandle$1(this$0){
  this.this$01 = this$0;
}

defineClass(264, 1, {}, DragHandle$1);
_.onDragCancel = function onDragCancel(){
  $removeStyleName_0(this.this$01, this.this$01.baseClassName + '-dragged');
  $onCancel(this.this$01.userCallback);
}
;
_.onDragEnd = function onDragEnd(){
}
;
_.onDragStart = function onDragStart(e){
  $addStyleName_0(this.this$01, this.this$01.baseClassName + '-dragged');
  this.startX = ($clinit_WidgetUtil() , $clinit_WidgetUtil() , $indexOf_0(($clinit_DOMImpl() , e).type, 'touch') != -1?$getClientX(e.changedTouches[0]):toInt32(e.clientX || 0));
  this.startY = (null , $indexOf_0(e.type, 'touch') != -1?$getClientY(e.changedTouches[0]):toInt32(e.clientY || 0));
  $onStart(this.this$01.userCallback);
  return true;
}
;
_.onDragUpdate = function onDragUpdate(e){
  var dx;
  dx = ($clinit_WidgetUtil() , $clinit_WidgetUtil() , ($indexOf_0(($clinit_DOMImpl() , e).type, 'touch') != -1?$getClientX(e.changedTouches[0]):toInt32(e.clientX || 0)) - this.startX);
  ($indexOf_0(e.type, 'touch') != -1?$getClientY(e.changedTouches[0]):toInt32(e.clientY || 0)) - this.startY;
  $onUpdate_0(this.this$01.userCallback, dx);
}
;
_.onDrop = function onDrop(){
  $removeStyleName_0(this.this$01, this.this$01.baseClassName + '-dragged');
  $onComplete_0(this.this$01.userCallback);
}
;
_.startX = 0;
_.startY = 0;
var Lcom_vaadin_client_ui_dd_DragHandle$1_2_classLit = createForClass('com.vaadin.client.ui.dd', 'DragHandle/1', 264);
function DragHandle$2(this$0){
  this.this$01 = this$0;
}

defineClass(265, 1, {21:1}, DragHandle$2);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  $onDragStartOnDraggableElement(this.this$01.dndHandler, event_0, this.this$01.dndCallback);
  ($clinit_DOMImpl() , impl_0).eventStopPropagation(event_0);
}
;
var Lcom_vaadin_client_ui_dd_DragHandle$2_2_classLit = createForClass('com.vaadin.client.ui.dd', 'DragHandle/2', 265);
function Cell(row, column, element){
  this.row = row;
  this.column = column;
  this.element = element;
}

defineClass(99, 1, {}, Cell);
_.column = 0;
_.row = 0;
var Lcom_vaadin_client_widget_escalator_Cell_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'Cell', 99);
function $clinit_EscalatorUpdater(){
  $clinit_EscalatorUpdater = emptyMethod;
  NULL = new EscalatorUpdater$1;
}

var NULL;
function EscalatorUpdater$1(){
}

defineClass(248, 1, {}, EscalatorUpdater$1);
_.postAttach = function postAttach(row, attachedCells){
}
;
_.postDetach = function postDetach(row, detachedCells){
}
;
_.preAttach = function preAttach(row, cellsToAttach){
}
;
_.preDetach = function preDetach(row, cellsToDetach){
}
;
_.update = function update(row, cellsToUpdate){
}
;
var Lcom_vaadin_client_widget_escalator_EscalatorUpdater$1_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'EscalatorUpdater/1', 248);
function $adjustCellWidthForSpan(this$static, numberOfCells){
  var cellsToTheRight, i_0, selfWidth, widthsOfColumnsToTheRight;
  cellsToTheRight = $rawPeekNext(this$static.currentIterator, numberOfCells - 1).size_0;
  selfWidth = $getColumnWidth(this$static.row, this$static.column);
  widthsOfColumnsToTheRight = 0;
  for (i_0 = 0; i_0 < cellsToTheRight; i_0++) {
    widthsOfColumnsToTheRight += $getColumnWidth(this$static.row, this$static.column + i_0 + 1);
  }
  this$static.element.style['width'] = selfWidth + widthsOfColumnsToTheRight + ($clinit_Style$Unit() , 'px');
}

function $hideOrRevealAdjacentCellElements(this$static, numberOfCells, prevColSpan){
  var affectedCells, affectedCellsNumber, i_0;
  affectedCellsNumber = prevColSpan > numberOfCells?prevColSpan:numberOfCells;
  affectedCells = $rawPeekNext(this$static.currentIterator, affectedCellsNumber - 1);
  if (prevColSpan < numberOfCells) {
    for (i_0 = 0; i_0 < affectedCells.size_0; i_0++) {
      (checkCriticalElementIndex(prevColSpan + i_0 - 1, affectedCells.size_0) , castTo(affectedCells.wrapped.get_0(affectedCells.fromIndex + (prevColSpan + i_0 - 1)), 36)).element.style['display'] = ($clinit_Style$Display() , 'none');
    }
  }
   else if (prevColSpan > numberOfCells) {
    for (i_0 = 0; i_0 < affectedCells.size_0; i_0++) {
      (checkCriticalElementIndex(numberOfCells + i_0 - 1, affectedCells.size_0) , castTo(affectedCells.wrapped.get_0(affectedCells.fromIndex + (numberOfCells + i_0 - 1)), 36)).element.style['display'] = '';
    }
  }
}

function $setColSpan_0(this$static, numberOfCells){
  var prevColSpan;
  if (numberOfCells < 1) {
    throw toJs(new IllegalArgumentException('Number of cells should be more than 0'));
  }
  prevColSpan = $getPropertyInt(this$static.element, 'colSpan');
  if (numberOfCells == 1 && prevColSpan == 1) {
    return;
  }
  this$static.element['colSpan'] = numberOfCells;
  $adjustCellWidthForSpan(this$static, numberOfCells);
  $hideOrRevealAdjacentCellElements(this$static, numberOfCells, prevColSpan);
  $setSkipNext(this$static.currentIterator, numberOfCells - 1);
}

function $setup(this$static, iterator){
  var e;
  this$static.currentIterator = iterator;
  if (iterator.cellsAttached) {
    e = this$static.row.element.cells[this$static.column];
    e['colSpan'] = 1;
    $getColumnWidth(this$static.row, this$static.column) >= 0 && (e.style['width'] = $getColumnWidth(this$static.row, this$static.column) + ($clinit_Style$Unit() , 'px') , undefined);
    e.style['display'] = '';
    this$static.element = e;
  }
}

function FlyweightCell(row, column){
  this.row = row;
  this.column = column;
}

defineClass(36, 1, {36:1}, FlyweightCell);
_.column = 0;
_.currentIterator = null;
_.element = null;
var Lcom_vaadin_client_widget_escalator_FlyweightCell_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'FlyweightCell', 36);
function $addCells(this$static, index_0, numberOfColumns){
  var col, i_0;
  for (i_0 = 0; i_0 < numberOfColumns; i_0++) {
    col = index_0 + i_0;
    $add_5(this$static.cells_0, col, new FlyweightCell(this$static, col));
  }
  $updateRestOfCells(this$static, index_0 + numberOfColumns);
}

function $getCells(this$static){
  return new FlyweightRow$1(this$static, 0, this$static.cells_0.array.length);
}

function $getColumnWidth(this$static, column){
  return this$static.columnWidths[column];
}

function $removeCells(this$static, numberOfColumns){
  $clear_1(new AbstractList$SubList(this$static.cells_0, 0, numberOfColumns));
  $updateRestOfCells(this$static, 0);
}

function $setup_0(this$static, e, row, columnWidths){
  this$static.element = e;
  this$static.row = row;
  this$static.columnWidths = columnWidths;
}

function $updateRestOfCells(this$static, startPos){
  var col;
  for (col = startPos; col < this$static.cells_0.array.length; col++) {
    $set_5(this$static.cells_0, col, new FlyweightCell(this$static, col));
  }
}

function FlyweightRow(){
  this.cells_0 = new ArrayList;
}

defineClass(435, 1, {}, FlyweightRow);
_.columnWidths = null;
_.row = 0;
var Lcom_vaadin_client_widget_escalator_FlyweightRow_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'FlyweightRow', 435);
function FlyweightRow$1(this$0, val$offset, val$numberOfCells){
  this.this$01 = this$0;
  this.val$offset2 = val$offset;
  this.val$numberOfCells3 = val$numberOfCells;
}

defineClass(131, 1, {}, FlyweightRow$1);
_.iterator_0 = function iterator_3(){
  return new FlyweightRow$CellIterator(new AbstractList$SubList(this.this$01.cells_0, this.val$offset2, this.val$offset2 + this.val$numberOfCells3), true);
}
;
_.val$numberOfCells3 = 0;
_.val$offset2 = 0;
var Lcom_vaadin_client_widget_escalator_FlyweightRow$1_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'FlyweightRow/1', 131);
function FlyweightRow$2(this$0, val$offset, val$numberOfCells){
  this.this$01 = this$0;
  this.val$offset2 = val$offset;
  this.val$numberOfCells3 = val$numberOfCells;
}

defineClass(172, 1, {}, FlyweightRow$2);
_.iterator_0 = function iterator_4(){
  return new FlyweightRow$CellIterator(new AbstractList$SubList(this.this$01.cells_0, this.val$offset2, this.val$offset2 + this.val$numberOfCells3), false);
}
;
_.val$numberOfCells3 = 0;
_.val$offset2 = 0;
var Lcom_vaadin_client_widget_escalator_FlyweightRow$2_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'FlyweightRow/2', 172);
function $next_1(this$static){
  var cell, i_0;
  for (i_0 = 0; i_0 < this$static.skipNext; i_0++) {
    $remove_10(this$static.cells_0, this$static.cursor);
  }
  this$static.skipNext = 0;
  cell = castTo($get_6(this$static.cells_0, this$static.cursor++), 36);
  $setup(cell, this$static);
  return cell;
}

function $rawPeekNext(this$static, n){
  var cell, cell$iterator, from, nextCells, to;
  from = min_0(this$static.cursor, this$static.cells_0.array.length);
  to = min_0(this$static.cursor + n, this$static.cells_0.array.length);
  nextCells = new AbstractList$SubList(this$static.cells_0, from, to);
  for (cell$iterator = new AbstractList$IteratorImpl(nextCells); cell$iterator.i < cell$iterator.this$01_0.size_1();) {
    cell = (checkCriticalElement(cell$iterator.i < cell$iterator.this$01_0.size_1()) , castTo(cell$iterator.this$01_0.get_0(cell$iterator.last_0 = cell$iterator.i++), 36));
    $setup(cell, this$static);
  }
  return nextCells;
}

function $setSkipNext(this$static, colspan){
  this$static.skipNext = colspan;
}

function FlyweightRow$CellIterator(cells_0, attached){
  this.cells_0 = new ArrayList_1(cells_0);
  this.cellsAttached = attached;
}

defineClass(95, 1, {}, FlyweightRow$CellIterator);
_.next_1 = function next_2(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.cursor + this.skipNext < this.cells_0.array.length;
}
;
_.remove_0 = function remove_5(){
  throw toJs(new UnsupportedOperationException_0('Cannot remove cells via iterator'));
}
;
_.cellsAttached = false;
_.cursor = 0;
_.skipNext = 0;
var Lcom_vaadin_client_widget_escalator_FlyweightRow$CellIterator_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'FlyweightRow/CellIterator', 95);
function PositionFunction$AbsolutePosition(){
}

defineClass(114, 1, {114:1}, PositionFunction$AbsolutePosition);
_.reset_0 = function reset_0(e){
  e.style['left'] = '';
  e.style['top'] = '';
}
;
_.set_0 = function set_1(e, x_0, y_0){
  e.style['left'] = x_0 + ($clinit_Style$Unit() , 'px');
  e.style['top'] = y_0 + 'px';
}
;
var Lcom_vaadin_client_widget_escalator_PositionFunction$AbsolutePosition_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'PositionFunction/AbsolutePosition', 114);
function PositionFunction$Translate3DPosition(){
}

defineClass(415, 1, {}, PositionFunction$Translate3DPosition);
_.reset_0 = function reset_1(e){
  e.style['transform'] = '';
}
;
_.set_0 = function set_2(e, x_0, y_0){
  e.style['transform'] = 'translate3d(' + x_0 + 'px, ' + y_0 + 'px, 0)';
}
;
var Lcom_vaadin_client_widget_escalator_PositionFunction$Translate3DPosition_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'PositionFunction/Translate3DPosition', 415);
function PositionFunction$TranslatePosition(){
}

defineClass(416, 1, {}, PositionFunction$TranslatePosition);
_.reset_0 = function reset_2(e){
  e.style['transform'] = '';
}
;
_.set_0 = function set_3(e, x_0, y_0){
  e.style['transform'] = 'translate(' + x_0 + 'px,' + y_0 + 'px)';
}
;
var Lcom_vaadin_client_widget_escalator_PositionFunction$TranslatePosition_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'PositionFunction/TranslatePosition', 416);
function PositionFunction$WebkitTranslate3DPosition(){
}

defineClass(417, 1, {}, PositionFunction$WebkitTranslate3DPosition);
_.reset_0 = function reset_3(e){
  e.style['webkitTransform'] = '';
}
;
_.set_0 = function set_4(e, x_0, y_0){
  e.style['webkitTransform'] = 'translate3d(' + x_0 + 'px,' + y_0 + 'px,0)';
}
;
var Lcom_vaadin_client_widget_escalator_PositionFunction$WebkitTranslate3DPosition_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'PositionFunction/WebkitTranslate3DPosition', 417);
function $clinit_RowVisibilityChangeEvent(){
  $clinit_RowVisibilityChangeEvent = emptyMethod;
  TYPE_7 = new GwtEvent$Type;
}

function $dispatch_0(this$static, handler){
  $onRowVisibilityChange(handler, this$static);
}

function RowVisibilityChangeEvent(firstVisibleRow, visibleRowCount){
  $clinit_RowVisibilityChangeEvent();
  this.visibleRows = withLength(firstVisibleRow, visibleRowCount);
}

defineClass(166, 578, {}, RowVisibilityChangeEvent);
_.dispatch = function dispatch_7(handler){
  $dispatch_0(this, castTo(handler, 616));
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_vaadin_client_widget_escalator_RowVisibilityChangeEvent_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'RowVisibilityChangeEvent', 166);
function $addScrollHandler(this$static, handler){
  return $addHandler((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager(this$static)) , this$static.handlerManager), ($clinit_ScrollEvent() , TYPE_12), handler);
}

function $addVisibilityHandler(this$static, handler){
  return $addHandler((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager(this$static)) , this$static.handlerManager), ($clinit_ScrollbarBundle$VisibilityChangeEvent() , TYPE_8), handler);
}

function $fireVisibilityChangeIfNeeded(this$static){
  var event_0, oldHandleIsVisible;
  oldHandleIsVisible = this$static.scrollHandleIsVisible;
  this$static.scrollHandleIsVisible = parseCssDimensionToPixels(this$static.internalGetScrollSize()) - parseCssDimensionToPixels(this$static.internalGetOffsetSize()) > $intern_45;
  if (oldHandleIsVisible != this$static.scrollHandleIsVisible) {
    event_0 = new ScrollbarBundle$VisibilityChangeEvent;
    $fireEvent((!this$static.handlerManager && (this$static.handlerManager = new HandlerManager(this$static)) , this$static.handlerManager), event_0);
  }
}

function $forceScrollbar(this$static, enable){
  enable?(this$static.root.style['display'] = '' , undefined):(this$static.root.style['display'] = ($clinit_Style$Display() , 'none') , undefined);
  this$static.internalForceScrollbar(enable);
}

function $getHandlerManager(this$static){
  !this$static.handlerManager && (this$static.handlerManager = new HandlerManager(this$static));
  return this$static.handlerManager;
}

function $getScrollbarThickness(this$static){
  return this$static.isInvisibleScrollbar?0:parseCssDimensionToPixels(this$static.internalGetScrollbarThickness());
}

function $onLoad(this$static){
  this$static.internalSetScrollPos(toInt32_0(this$static.scrollPos));
}

function $recalculateMaxScrollPos(this$static){
  var offsetSize, scrollSize;
  scrollSize = parseCssDimensionToPixels(this$static.internalGetScrollSize());
  offsetSize = parseCssDimensionToPixels(this$static.internalGetOffsetSize());
  this$static.maxScrollPos = $wnd.Math.max(0, scrollSize - offsetSize);
  $setScrollPos(this$static, this$static.scrollPos);
}

function $setOffsetSize(this$static, px){
  var newOffsetSizeIsGreaterThanScrollSize, offsetSizeBecomesGreaterThanScrollSize;
  newOffsetSizeIsGreaterThanScrollSize = px > parseCssDimensionToPixels(this$static.internalGetScrollSize());
  offsetSizeBecomesGreaterThanScrollSize = parseCssDimensionToPixels(this$static.internalGetScrollSize()) - parseCssDimensionToPixels(this$static.internalGetOffsetSize()) > $intern_45 && newOffsetSizeIsGreaterThanScrollSize;
  if (offsetSizeBecomesGreaterThanScrollSize && this$static.scrollPos != 0) {
    this$static.offsetSizeTemporaryScrollHandler = $addScrollHandler(this$static, new ScrollbarBundle$1(this$static, px));
    $setScrollPos(this$static, 0);
  }
   else {
    $setOffsetSizeNow(this$static, px);
  }
}

function $setOffsetSizeNow(this$static, px){
  this$static.internalSetOffsetSize($wnd.Math.max(0, px));
  $recalculateMaxScrollPos(this$static);
  $forceScrollbar(this$static, parseCssDimensionToPixels(this$static.internalGetScrollSize()) - parseCssDimensionToPixels(this$static.internalGetOffsetSize()) > $intern_45);
  $fireVisibilityChangeIfNeeded(this$static);
  if (this$static.offsetSizeTemporaryScrollHandler) {
    $removeHandler(this$static.offsetSizeTemporaryScrollHandler.real);
    this$static.offsetSizeTemporaryScrollHandler = null;
  }
}

function $setScrollPos(this$static, px){
  var oldScrollPos;
  oldScrollPos = this$static.scrollPos;
  this$static.scrollPos = $wnd.Math.max(0, $wnd.Math.min(this$static.maxScrollPos, px > 0?$wnd.Math.floor(px):$wnd.Math.ceil(px)));
  if (!pixelValuesEqual(oldScrollPos, this$static.scrollPos)) {
    this$static.isInvisibleScrollbar && $show_0(this$static.invisibleScrollbarTemporaryResizer);
    this$static.internalSetScrollPos(toInt32_0(this$static.scrollPos));
  }
}

function $setScrollPosByDelta(this$static, delta){
  delta != 0 && $setScrollPos(this$static, this$static.scrollPos + delta);
}

function $setScrollSize(this$static, px){
  var newScrollSizeIsSmallerThanOffsetSize, scrollSizeBecomesSmallerThanOffsetSize;
  newScrollSizeIsSmallerThanOffsetSize = px <= parseCssDimensionToPixels(this$static.internalGetOffsetSize());
  scrollSizeBecomesSmallerThanOffsetSize = parseCssDimensionToPixels(this$static.internalGetScrollSize()) - parseCssDimensionToPixels(this$static.internalGetOffsetSize()) > $intern_45 && newScrollSizeIsSmallerThanOffsetSize;
  if (scrollSizeBecomesSmallerThanOffsetSize && this$static.scrollPos != 0) {
    this$static.scrollSizeTemporaryScrollHandler = $addScrollHandler(this$static, new ScrollbarBundle$2(this$static, px));
    $setScrollPos(this$static, 0);
  }
   else {
    $setScrollSizeNow(this$static, px);
  }
}

function $setScrollSizeNow(this$static, px){
  this$static.internalSetScrollSize($wnd.Math.max(0, px));
  $recalculateMaxScrollPos(this$static);
  $forceScrollbar(this$static, parseCssDimensionToPixels(this$static.internalGetScrollSize()) - parseCssDimensionToPixels(this$static.internalGetOffsetSize()) > $intern_45);
  $fireVisibilityChangeIfNeeded(this$static);
  if (this$static.scrollSizeTemporaryScrollHandler) {
    $removeHandler(this$static.scrollSizeTemporaryScrollHandler.real);
    this$static.scrollSizeTemporaryScrollHandler = null;
  }
}

function $setScrollbarThickness(this$static, px){
  this$static.isInvisibleScrollbar = px == 0;
  if (this$static.isInvisibleScrollbar) {
    sinkEvents_0(this$static.root, $intern_26);
    $clinit_DOM();
    setEventListener(this$static.root, new ScrollbarBundle$3(this$static));
    this$static.root.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  }
   else {
    sinkEvents_0(this$static.root, 0);
    $clinit_DOM();
    this$static.root.__listener = null;
    this$static.root.style['visibility'] = '';
  }
  this$static.internalSetScrollbarThickness($wnd.Math.max(1, px));
}

function $showsScrollHandle(this$static){
  return parseCssDimensionToPixels(this$static.internalGetScrollSize()) - parseCssDimensionToPixels(this$static.internalGetOffsetSize()) > $intern_45;
}

function $updateScrollPosFromDom(this$static){
  var newScrollPos;
  newScrollPos = this$static.internalGetScrollPos();
  this$static.scrollPos = newScrollPos;
  $scheduleEvent(this$static.scrollEventFirer);
}

function ScrollbarBundle(){
  this.root = ($clinit_DOM() , $createDivElement($doc));
  this.scrollSizeElement = $createDivElement($doc);
  this.invisibleScrollbarTemporaryResizer = new ScrollbarBundle$TemporaryResizer(this);
  this.scrollEventFirer = new ScrollbarBundle$ScrollEventFirer(this);
  $appendChild(this.root, this.scrollSizeElement);
  this.root.style['display'] = ($clinit_Style$Display() , 'none');
  this.root.tabIndex = -1;
}

function parseCssDimensionToPixels(size_0){
  return ($clinit_String() , size_0).length == 0?0:__parseAndValidateDouble($substring_0(size_0, 0, size_0.length - 2));
}

function toInt32_0(val){
  return Math.round(val) | 0;
}

defineClass(155, 1, {});
_.getElement = function getElement(){
  return this.root;
}
;
_.updateScrollPosFromDom = function updateScrollPosFromDom(){
  $updateScrollPosFromDom(this);
}
;
_.isInvisibleScrollbar = false;
_.maxScrollPos = 0;
_.scrollHandleIsVisible = false;
_.scrollPos = 0;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle', 155);
function ScrollbarBundle$1(this$0, val$px){
  this.this$01 = this$0;
  this.val$px2 = val$px;
}

defineClass(328, 1, $intern_46, ScrollbarBundle$1);
_.onScroll = function onScroll(event_0){
  $setOffsetSizeNow(this.this$01, this.val$px2);
}
;
_.val$px2 = 0;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$1_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/1', 328);
function ScrollbarBundle$2(this$0, val$px){
  this.this$01 = this$0;
  this.val$px2 = val$px;
}

defineClass(329, 1, $intern_46, ScrollbarBundle$2);
_.onScroll = function onScroll_0(event_0){
  $setScrollSizeNow(this.this$01, this.val$px2);
}
;
_.val$px2 = 0;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$2_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/2', 329);
function ScrollbarBundle$3(this$0){
  this.this$01 = this$0;
}

defineClass(330, 1, {21:1}, ScrollbarBundle$3);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  $show_0(this.this$01.invisibleScrollbarTemporaryResizer);
}
;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$3_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/3', 330);
function $setStylePrimaryName_0(this$static, primaryStyleName){
  $setClassName(this$static.root, primaryStyleName + '-scroller');
  $addClassName(this$static.root, primaryStyleName + '-scroller-horizontal');
}

function ScrollbarBundle$HorizontalScrollbarBundle(){
  ScrollbarBundle.call(this);
}

defineClass(324, 155, {}, ScrollbarBundle$HorizontalScrollbarBundle);
_.internalForceScrollbar = function internalForceScrollbar(enable){
  enable?(this.root.style['overflowX'] = ($clinit_Style$Overflow() , 'scroll') , undefined):(this.root.style['overflowX'] = '' , undefined);
}
;
_.internalGetOffsetSize = function internalGetOffsetSize(){
  return $getProperty(this.root.style, 'width');
}
;
_.internalGetScrollPos = function internalGetScrollPos(){
  return $getScrollLeft(this.root);
}
;
_.internalGetScrollSize = function internalGetScrollSize(){
  return $getProperty(this.scrollSizeElement.style, 'width');
}
;
_.internalGetScrollbarThickness = function internalGetScrollbarThickness(){
  return $getProperty(this.scrollSizeElement.style, 'height');
}
;
_.internalSetOffsetSize = function internalSetOffsetSize(px){
  this.root.style['width'] = px + ($clinit_Style$Unit() , 'px');
}
;
_.internalSetScrollPos = function internalSetScrollPos(px){
  $setScrollLeft(this.root, px);
}
;
_.internalSetScrollSize = function internalSetScrollSize(px){
  this.scrollSizeElement.style['width'] = px + ($clinit_Style$Unit() , 'px');
}
;
_.internalSetScrollbarThickness = function internalSetScrollbarThickness(px){
  this.root.style['paddingBottom'] = px + ($clinit_Style$Unit() , 'px');
  this.root.style['height'] = '0.0px';
  this.scrollSizeElement.style['height'] = px + 'px';
}
;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$HorizontalScrollbarBundle_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/HorizontalScrollbarBundle', 324);
function $scheduleEvent(this$static){
  if (!this$static.isBeingFired) {
    $scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), this$static.fireEventCommand);
    this$static.isBeingFired = true;
  }
}

function ScrollbarBundle$ScrollEventFirer(this$0){
  this.this$01 = this$0;
  this.fireEventCommand = new ScrollbarBundle$ScrollEventFirer$1(this);
}

defineClass(320, 1, {}, ScrollbarBundle$ScrollEventFirer);
_.isBeingFired = false;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$ScrollEventFirer_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/ScrollEventFirer', 320);
function ScrollbarBundle$ScrollEventFirer$1(this$1){
  this.this$11 = this$1;
}

defineClass(325, 1, {}, ScrollbarBundle$ScrollEventFirer$1);
_.execute_1 = function execute_13(){
  $updateScrollPosFromDom(this.this$11.this$01);
  $fireEvent($getHandlerManager(this.this$11.this$01), new ScrollEvent);
  this.this$11.isBeingFired = false;
}
;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$ScrollEventFirer$1_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/ScrollEventFirer/1', 325);
function $show_0(this$static){
  this$static.this$01.internalSetScrollbarThickness(13);
  this$static.this$01.root.style['visibility'] = ($clinit_Style$Visibility() , 'visible');
  $schedule(this$static.timer, 1000);
}

function ScrollbarBundle$TemporaryResizer(this$0){
  this.this$01 = this$0;
  this.timer = new ScrollbarBundle$TemporaryResizer$1(this);
}

defineClass(321, 1, {}, ScrollbarBundle$TemporaryResizer);
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$TemporaryResizer_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/TemporaryResizer', 321);
function ScrollbarBundle$TemporaryResizer$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(326, 65, {}, ScrollbarBundle$TemporaryResizer$1);
_.run_0 = function run_2(){
  this.this$11.this$01.internalSetScrollbarThickness(1);
  this.this$11.this$01.root.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
}
;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$TemporaryResizer$1_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/TemporaryResizer/1', 326);
function $setStylePrimaryName_1(this$static, primaryStyleName){
  $setClassName(this$static.root, primaryStyleName + '-scroller');
  $addClassName(this$static.root, primaryStyleName + '-scroller-vertical');
}

function ScrollbarBundle$VerticalScrollbarBundle(){
  ScrollbarBundle.call(this);
}

defineClass(323, 155, {}, ScrollbarBundle$VerticalScrollbarBundle);
_.internalForceScrollbar = function internalForceScrollbar_0(enable){
  enable?(this.root.style['overflowY'] = ($clinit_Style$Overflow() , 'scroll') , undefined):(this.root.style['overflowY'] = '' , undefined);
}
;
_.internalGetOffsetSize = function internalGetOffsetSize_0(){
  return $getProperty(this.root.style, 'height');
}
;
_.internalGetScrollPos = function internalGetScrollPos_0(){
  return (this.root.scrollTop || 0) | 0;
}
;
_.internalGetScrollSize = function internalGetScrollSize_0(){
  return $getProperty(this.scrollSizeElement.style, 'height');
}
;
_.internalGetScrollbarThickness = function internalGetScrollbarThickness_0(){
  return $getProperty(this.scrollSizeElement.style, 'width');
}
;
_.internalSetOffsetSize = function internalSetOffsetSize_0(px){
  this.root.style['height'] = px + ($clinit_Style$Unit() , 'px');
}
;
_.internalSetScrollPos = function internalSetScrollPos_0(px){
  $setScrollTop(this.root, px);
}
;
_.internalSetScrollSize = function internalSetScrollSize_0(px){
  this.scrollSizeElement.style['height'] = px + ($clinit_Style$Unit() , 'px');
}
;
_.internalSetScrollbarThickness = function internalSetScrollbarThickness_0(px){
  this.root.style['paddingRight'] = px + ($clinit_Style$Unit() , 'px');
  this.root.style['width'] = '0.0px';
  this.scrollSizeElement.style['width'] = px + 'px';
}
;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$VerticalScrollbarBundle_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/VerticalScrollbarBundle', 323);
function $clinit_ScrollbarBundle$VisibilityChangeEvent(){
  $clinit_ScrollbarBundle$VisibilityChangeEvent = emptyMethod;
  TYPE_8 = new ScrollbarBundle$VisibilityChangeEvent$1;
}

function ScrollbarBundle$VisibilityChangeEvent(){
  $clinit_ScrollbarBundle$VisibilityChangeEvent();
}

defineClass(322, 578, {}, ScrollbarBundle$VisibilityChangeEvent);
_.dispatch = function dispatch_8(handler){
  $visibilityChanged(castTo(handler, 618));
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$VisibilityChangeEvent_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/VisibilityChangeEvent', 322);
function ScrollbarBundle$VisibilityChangeEvent$1(){
  GwtEvent$Type.call(this);
}

defineClass(327, 38, {}, ScrollbarBundle$VisibilityChangeEvent$1);
_.toString_0 = function toString_16(){
  return 'VisibilityChangeEvent';
}
;
var Lcom_vaadin_client_widget_escalator_ScrollbarBundle$VisibilityChangeEvent$1_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'ScrollbarBundle/VisibilityChangeEvent/1', 327);
function $clinit_SpacerUpdater(){
  $clinit_SpacerUpdater = emptyMethod;
  NULL_0 = new SpacerUpdater$1;
}

var NULL_0;
function SpacerUpdater$1(){
}

defineClass(247, 1, {}, SpacerUpdater$1);
_.destroy = function destroy(spacer){
}
;
_.init_0 = function init_2(spacer){
}
;
var Lcom_vaadin_client_widget_escalator_SpacerUpdater$1_2_classLit = createForClass('com.vaadin.client.widget.escalator', 'SpacerUpdater/1', 247);
function $getMaxScrollLeft(this$static){
  return parseCssDimensionToPixels($getProperty(this$static.grid.escalator.horizontalScrollbar.scrollSizeElement.style, 'width')) - ((($getParentElement($getTableElement(this$static)).offsetWidth || 0) | 0) - 0);
}

function $getMaxScrollTop(this$static){
  var table, table0;
  return parseCssDimensionToPixels($getProperty(this$static.grid.escalator.verticalScrollbar.scrollSizeElement.style, 'height')) - (((table0 = $getTableElement(this$static) , table0?table0.tFoot:null).offsetHeight || 0) | 0) - (((table = $getTableElement(this$static) , table?table.tHead:null).offsetHeight || 0) | 0);
}

function $getTableElement(this$static){
  var root, tablewrapper;
  root = $getElement(this$static.grid);
  tablewrapper = root.childNodes[2];
  return tablewrapper?$getFirstChildElement_0(($clinit_DOMImpl() , tablewrapper)):null;
}

function $removeNativeHandler(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
}

function $start(this$static, startEvent, scrollAxis, callback){
  this$static.scrollDirection = scrollAxis;
  this$static.callback = callback;
  $removeNativeHandler(this$static);
  this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new AutoScroller$TouchEventHandler(this$static));
  $updateScrollBounds(this$static);
  this$static.handlerRegistration = addNativePreviewHandler(this$static.scrollPreviewHandler);
  this$static.autoScroller = new AutoScroller$AutoScrollingFrame(this$static, round_int($wnd.Math.ceil(this$static.startingBound)), this$static.endingBound, this$static.gradientArea);
  $start_0(this$static.autoScroller);
  ($clinit_DOMImpl() , impl_0).eventPreventDefault(startEvent);
  impl_0.eventStopPropagation(startEvent);
}

function $stop(this$static){
  if (this$static.handlerRegistration) {
    $removeHandler(this$static.handlerRegistration.real);
    this$static.handlerRegistration = null;
  }
  if (this$static.autoScroller) {
    $stop_0(this$static.autoScroller);
    this$static.autoScroller = null;
  }
  $removeNativeHandler(this$static);
}

function $updateScrollBounds(this$static){
  var adjustment, endBorder, startBorder, table, table0;
  startBorder = this$static.scrollDirection == ($clinit_AutoScroller$ScrollAxis() , VERTICAL)?$getAbsoluteBottom((table0 = $getTableElement(this$static) , table0?table0.tHead:null)) + 1:$getAbsoluteLeft($getTableElement(this$static));
  endBorder = this$static.scrollDirection == VERTICAL?$getAbsoluteTop((table = $getTableElement(this$static) , table?table.tFoot:null)) - 1:$getAbsoluteRight($getTableElement(this$static));
  startBorder += 0;
  this$static.startingBound = startBorder + this$static.scrollAreaPX;
  this$static.endingBound = endBorder - this$static.scrollAreaPX;
  this$static.gradientArea = this$static.scrollAreaPX;
  if (this$static.endingBound - this$static.startingBound < 50) {
    adjustment = 50 - (this$static.endingBound - this$static.startingBound);
    this$static.startingBound -= adjustment / 2;
    this$static.endingBound = round_int(this$static.endingBound + adjustment / 2);
    this$static.gradientArea = round_int(this$static.gradientArea - adjustment / 2);
  }
}

function AutoScroller(grid){
  this.scrollPreviewHandler = new AutoScroller$1(this);
  this.grid = grid;
}

defineClass(269, 1, {}, AutoScroller);
_.endingBound = -1;
_.gradientArea = 0;
_.scrollAreaPX = 100;
_.startingBound = -1;
var Lcom_vaadin_client_widget_grid_AutoScroller_2_classLit = createForClass('com.vaadin.client.widget.grid', 'AutoScroller', 269);
function AutoScroller$1(this$0){
  this.this$01 = this$0;
}

defineClass(272, 1, $intern_40, AutoScroller$1);
_.onPreviewNativeEvent = function onPreviewNativeEvent_2(event_0){
  var nativeEvent, pageX, pageY;
  if (!this.this$01.autoScroller) {
    $stop(this.this$01);
    return;
  }
  nativeEvent = event_0.nativeEvent;
  switch ($getTypeInt(event_0.nativeEvent)) {
    case 64:
    case $intern_30:
      pageY = ($clinit_WidgetUtil() , getTouchOrMouseClientY(nativeEvent));
      pageX = getTouchOrMouseClientX(nativeEvent);
      $updatePointerCoords(this.this$01.autoScroller, pageX, pageY);
      break;
    case 8:
    case $intern_17:
    case $intern_31:
      $stop(this.this$01);
  }
}
;
var Lcom_vaadin_client_widget_grid_AutoScroller$1_2_classLit = createForClass('com.vaadin.client.widget.grid', 'AutoScroller/1', 272);
function $doScrollAreaChecks(this$static, pageCordinate){
  var endDidNotMove, oldBottomBound, oldTopBound, startDidNotMove, wasMovement;
  if (this$static.startBound == -1) {
    this$static.startBound = min_0(this$static.finalStartBound, pageCordinate);
    this$static.endBound = max_0(this$static.finalEndBound, pageCordinate);
  }
   else {
    oldTopBound = this$static.startBound;
    this$static.startBound < this$static.finalStartBound && (this$static.startBound = max_0(this$static.startBound, min_0(this$static.finalStartBound, pageCordinate)));
    oldBottomBound = this$static.endBound;
    this$static.endBound > this$static.finalEndBound && (this$static.endBound = min_0(this$static.endBound, max_0(this$static.finalEndBound, pageCordinate)));
    startDidNotMove = oldTopBound == this$static.startBound;
    endDidNotMove = oldBottomBound == this$static.endBound;
    wasMovement = pageCordinate != this$static.scrollingAxisPageCoordinate;
    this$static.scrollAreaShouldRebound = startDidNotMove && endDidNotMove && wasMovement;
  }
}

function $reboundScrollArea(this$static, timeDiff){
  var reboundPx;
  if (!this$static.scrollAreaShouldRebound) {
    return;
  }
  reboundPx = round_int($wnd.Math.ceil(0.001 * timeDiff));
  if (this$static.startBound < this$static.finalStartBound) {
    this$static.startBound += reboundPx;
    this$static.startBound = min_0(this$static.startBound, this$static.finalStartBound);
    $updateScrollSpeed(this$static, this$static.scrollingAxisPageCoordinate);
  }
   else if (this$static.endBound > this$static.finalEndBound) {
    this$static.endBound -= reboundPx;
    this$static.endBound = max_0(this$static.endBound, this$static.finalEndBound);
    $updateScrollSpeed(this$static, this$static.scrollingAxisPageCoordinate);
  }
}

function $start_0(this$static){
  this$static.running = true;
  this$static.running && this$static.gradientArea >= 10 && (this$static.handle = (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static, $getElement(this$static.this$01.grid)));
}

function $stop_0(this$static){
  this$static.running = false;
  if (this$static.handle) {
    this$static.handle.cancel();
    this$static.handle = null;
  }
}

function $updatePointerCoords(this$static, pageX, pageY){
  var pageCordinate;
  this$static.this$01.scrollDirection == ($clinit_AutoScroller$ScrollAxis() , VERTICAL)?(pageCordinate = pageY):(pageCordinate = pageX);
  $doScrollAreaChecks(this$static, pageCordinate);
  $updateScrollSpeed(this$static, pageCordinate);
  this$static.scrollingAxisPageCoordinate = pageCordinate;
}

function $updateScrollSpeed(this$static, pointerPageCordinate){
  var distance, ratio;
  if (pointerPageCordinate < this$static.startBound) {
    distance = pointerPageCordinate - this$static.startBound;
    ratio = $wnd.Math.max(-1, distance / this$static.gradientArea);
  }
   else if (pointerPageCordinate > this$static.endBound) {
    distance = pointerPageCordinate - this$static.endBound;
    ratio = $wnd.Math.min(1, distance / this$static.gradientArea);
  }
   else {
    ratio = 0;
  }
  this$static.scrollSpeed = ratio * 500;
}

function AutoScroller$AutoScrollingFrame(this$0, startBound, endBound, gradientArea){
  this.this$01 = this$0;
  this.finalStartBound = startBound;
  this.finalEndBound = endBound;
  this.gradientArea = gradientArea;
}

defineClass(271, 1, {}, AutoScroller$AutoScrollingFrame);
_.execute = function execute_14(timestamp){
  var intPixelsToScroll, maxScrollPos, newScrollPos, scrollPos, timeDiff;
  timeDiff = timestamp - this.prevTimestamp;
  this.prevTimestamp = timestamp;
  $reboundScrollArea(this, timeDiff);
  this.pixelsToScroll += this.scrollSpeed * (timeDiff / 1000);
  intPixelsToScroll = round_int(this.pixelsToScroll);
  this.pixelsToScroll -= intPixelsToScroll;
  if (intPixelsToScroll != 0) {
    if (this.this$01.scrollDirection == ($clinit_AutoScroller$ScrollAxis() , VERTICAL)) {
      scrollPos = this.this$01.grid.escalator.verticalScrollbar.scrollPos;
      maxScrollPos = $getMaxScrollTop(this.this$01);
    }
     else {
      scrollPos = this.this$01.grid.escalator.horizontalScrollbar.scrollPos;
      maxScrollPos = $getMaxScrollLeft(this.this$01);
    }
    if (intPixelsToScroll > 0 && scrollPos < maxScrollPos || intPixelsToScroll < 0 && scrollPos > 0) {
      newScrollPos = scrollPos + intPixelsToScroll;
      this.this$01.scrollDirection == VERTICAL?$setScrollTop_1(this.this$01.grid, newScrollPos):$setScrollLeft_1(this.this$01.grid, newScrollPos);
      $onAutoScroll(this.this$01.callback, intPixelsToScroll);
      newScrollPos <= 0?$onAutoScrollReachedMin(this.this$01.callback):newScrollPos >= maxScrollPos && $onAutoScrollReachedMax(this.this$01.callback);
    }
  }
  this.running && this.gradientArea >= 10 && (this.handle = (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this, $getElement(this.this$01.grid)));
}
;
_.endBound = -1;
_.finalEndBound = 0;
_.finalStartBound = 0;
_.gradientArea = 0;
_.pixelsToScroll = 0;
_.prevTimestamp = 0;
_.running = false;
_.scrollAreaShouldRebound = false;
_.scrollSpeed = 0;
_.scrollingAxisPageCoordinate = 0;
_.startBound = -1;
var Lcom_vaadin_client_widget_grid_AutoScroller$AutoScrollingFrame_2_classLit = createForClass('com.vaadin.client.widget.grid', 'AutoScroller/AutoScrollingFrame', 271);
function $clinit_AutoScroller$ScrollAxis(){
  $clinit_AutoScroller$ScrollAxis = emptyMethod;
  VERTICAL = new AutoScroller$ScrollAxis('VERTICAL', 0);
  HORIZONTAL = new AutoScroller$ScrollAxis('HORIZONTAL', 1);
}

function AutoScroller$ScrollAxis(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_AutoScroller$ScrollAxis();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_client_widget_grid_AutoScroller$ScrollAxis_2_classLit, 1), $intern_1, 110, 0, [VERTICAL, HORIZONTAL]);
}

defineClass(110, 4, {110:1, 3:1, 5:1, 4:1}, AutoScroller$ScrollAxis);
var HORIZONTAL, VERTICAL;
var Lcom_vaadin_client_widget_grid_AutoScroller$ScrollAxis_2_classLit = createForEnum('com.vaadin.client.widget.grid', 'AutoScroller/ScrollAxis', 110, values_6);
function AutoScroller$TouchEventHandler(this$0){
  this.this$01 = this$0;
}

defineClass(270, 1, $intern_40, AutoScroller$TouchEventHandler);
_.onPreviewNativeEvent = function onPreviewNativeEvent_3(event_0){
  switch ($getTypeInt(event_0.nativeEvent)) {
    case $intern_29:
      {
        $getTouches(event_0.nativeEvent).length == 1 && $stop(this.this$01);
        break;
      }

    case $intern_30:
      event_0.isCanceled = true;
      break;
    case $intern_17:
    case $intern_31:
      $stop(this.this$01);
  }
}
;
var Lcom_vaadin_client_widget_grid_AutoScroller$TouchEventHandler_2_classLit = createForClass('com.vaadin.client.widget.grid', 'AutoScroller/TouchEventHandler', 270);
function $set_0(this$static, columnIndexDOM, columnIndex, column){
  this$static.columnIndexDOM = columnIndexDOM;
  this$static.columnIndex = columnIndex;
  this$static.column = column;
}

function CellReference(rowReference){
  this.rowReference = rowReference;
}

defineClass(127, 1, {}, CellReference);
_.columnIndex = 0;
_.columnIndexDOM = 0;
var Lcom_vaadin_client_widget_grid_CellReference_2_classLit = createForClass('com.vaadin.client.widget.grid', 'CellReference', 127);
function $clinit_DataAvailableEvent(){
  $clinit_DataAvailableEvent = emptyMethod;
  TYPE_9 = new GwtEvent$Type;
}

function DataAvailableEvent(rowsAvailable){
  $clinit_DataAvailableEvent();
  this.rowsAvailable = rowsAvailable;
}

defineClass(168, 578, {}, DataAvailableEvent);
_.dispatch = function dispatch_9(handler){
  castTo(handler, 560).onDataAvailable(this);
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
var TYPE_9;
var Lcom_vaadin_client_widget_grid_DataAvailableEvent_2_classLit = createForClass('com.vaadin.client.widget.grid', 'DataAvailableEvent', 168);
function $clinit_DetailsGenerator(){
  $clinit_DetailsGenerator = emptyMethod;
  NULL_1 = new DetailsGenerator$1;
}

var NULL_1;
function DetailsGenerator$1(){
}

defineClass(364, 1, {}, DetailsGenerator$1);
var Lcom_vaadin_client_widget_grid_DetailsGenerator$1_2_classLit = createForClass('com.vaadin.client.widget.grid', 'DetailsGenerator/1', 364);
function $set_1(this$static, targetCell, section){
  var column, columnIndex, columnIndexDOM, grid, row, rowObject;
  grid = this$static.rowReference.grid;
  columnIndexDOM = targetCell.column;
  column = null;
  columnIndexDOM >= 0 && columnIndexDOM < $getVisibleColumns(grid).coll.size_1() && (column = castTo($get_7($getVisibleColumns(grid), columnIndexDOM), 14));
  row = targetCell.row;
  section == ($clinit_GridConstants$Section() , BODY) && row >= 0 && row < grid.dataSource.ds.array.length?(rowObject = $getRow(grid.dataSource, row)):(rowObject = null);
  $set_3(this$static.rowReference, row, rowObject);
  columnIndex = $indexOf_4(unmodifiableList(new ArrayList_1(grid.columns)), column);
  $set_0(this$static, columnIndexDOM, columnIndex, column);
  this$static.element = targetCell.element;
}

function EventCellReference(grid){
  CellReference.call(this, new RowReference(grid));
}

defineClass(358, 127, {}, EventCellReference);
var Lcom_vaadin_client_widget_grid_EventCellReference_2_classLit = createForClass('com.vaadin.client.widget.grid', 'EventCellReference', 358);
function $set_2(this$static, cell, columnIndex, column){
  this$static.cell = cell;
  $set_0(this$static, cell.column, columnIndex, column);
}

function RendererCellReference(rowReference){
  CellReference.call(this, rowReference);
}

defineClass(365, 127, {}, RendererCellReference);
var Lcom_vaadin_client_widget_grid_RendererCellReference_2_classLit = createForClass('com.vaadin.client.widget.grid', 'RendererCellReference', 365);
function $set_3(this$static, rowIndex, row){
  this$static.rowIndex = rowIndex;
  this$static.row = row;
}

function RowReference(grid){
  this.grid = grid;
}

defineClass(165, 1, {}, RowReference);
_.rowIndex = 0;
var Lcom_vaadin_client_widget_grid_RowReference_2_classLit = createForClass('com.vaadin.client.widget.grid', 'RowReference', 165);
function $ensureAvailability(this$static, firstRowIndex, numberOfRows){
  if (firstRowIndex >= this$static.ds.array.length) {
    throw toJs(new IllegalStateException_0('Trying to fetch rows outside of array'));
  }
  !!this$static.changeHandler && $dataAvailable(this$static.changeHandler, firstRowIndex, numberOfRows);
}

function $getRow(this$static, rowIndex){
  return $get_6(this$static.ds, rowIndex);
}

function $setDataChangeHandler(this$static, dataChangeHandler){
  this$static.changeHandler = dataChangeHandler;
}

function ListDataSource(datasource){
  if (!datasource) {
    throw toJs(new IllegalArgumentException('datasource cannot be null'));
  }
  this.ds = new ArrayList_1(datasource);
  new ListDataSource$ListWrapper(this);
}

defineClass(440, 1, {}, ListDataSource);
var Lcom_vaadin_client_widget_grid_datasources_ListDataSource_2_classLit = createForClass('com.vaadin.client.widget.grid.datasources', 'ListDataSource', 440);
function ListDataSource$ListWrapper(this$0){
  this.this$01 = this$0;
}

defineClass(441, 1, $intern_47, ListDataSource$ListWrapper);
_.equals = function equals_4(other){
  return this === other;
}
;
_.hashCode = function hashCode_6(){
  return getObjectIdentityHashCode(this);
}
;
_.add_0 = function add_1(e){
  if ($add_6(this.this$01.ds, e)) {
    !!this.this$01.changeHandler && $dataAdded(this.this$01.changeHandler, this.this$01.ds.array.length - 1);
    return true;
  }
  return false;
}
;
_.contains_0 = function contains(o){
  return $indexOf_3(this.this$01.ds, o, 0) != -1;
}
;
_.get_0 = function get_1(index_0){
  return $get_6(this.this$01.ds, index_0);
}
;
_.indexOf_0 = function indexOf(o){
  return $indexOf_3(this.this$01.ds, o, 0);
}
;
_.isEmpty = function isEmpty(){
  return this.this$01.ds.array.length == 0;
}
;
_.iterator_0 = function iterator_5(){
  return new ListDataSource$ListWrapperIterator(new ArrayList$1(this.this$01.ds));
}
;
_.listIterator = function listIterator(){
  throw toJs(new UnsupportedOperationException_0('List iterators not supported at this time.'));
}
;
_.listIterator_0 = function listIterator_0(index_0){
  throw toJs(new UnsupportedOperationException_0('List iterators not supported at this time.'));
}
;
_.remove_1 = function remove_6(o){
  var index_0;
  index_0 = $indexOf_3(this.this$01.ds, o, 0);
  if ($remove_11(this.this$01.ds, o)) {
    !!this.this$01.changeHandler && $dataRemoved(this.this$01.changeHandler, index_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_1(){
  return this.this$01.ds.array.length;
}
;
_.subList = function subList(fromIndex, toIndex){
  throw toJs(new UnsupportedOperationException_0('Sub lists not supported.'));
}
;
_.toArray = function toArray(){
  return $toArray_0(this.this$01.ds);
}
;
var Lcom_vaadin_client_widget_grid_datasources_ListDataSource$ListWrapper_2_classLit = createForClass('com.vaadin.client.widget.grid.datasources', 'ListDataSource/ListWrapper', 441);
function ListDataSource$ListWrapperIterator(iterator){
  this.iterator = iterator;
}

defineClass(442, 1, {}, ListDataSource$ListWrapperIterator);
_.hasNext_0 = function hasNext_2(){
  return $hasNext_0(this.iterator);
}
;
_.next_1 = function next_3(){
  return $next_4(this.iterator);
}
;
_.remove_0 = function remove_7(){
  throw toJs(new UnsupportedOperationException_0('Iterator.remove() is not supported by this iterator.'));
}
;
var Lcom_vaadin_client_widget_grid_datasources_ListDataSource$ListWrapperIterator_2_classLit = createForClass('com.vaadin.client.widget.grid.datasources', 'ListDataSource/ListWrapperIterator', 442);
function $equalsExplicit(this$static, obj){
  var rhi;
  if (instanceOf(obj, 87)) {
    rhi = castTo(obj, 87);
    return equals_6(this$static.row, rhi.row);
  }
   else {
    return false;
  }
}

function ListDataSource$RowHandleImpl(row){
  this.row = row;
}

defineClass(87, 603, {87:1}, ListDataSource$RowHandleImpl);
var Lcom_vaadin_client_widget_grid_datasources_ListDataSource$RowHandleImpl_2_classLit = createForClass('com.vaadin.client.widget.grid.datasources', 'ListDataSource/RowHandleImpl', 87);
function $clinit_ColumnReorderEvent(){
  $clinit_ColumnReorderEvent = emptyMethod;
  TYPE_10 = new GwtEvent$Type;
}

function ColumnReorderEvent(){
  $clinit_ColumnReorderEvent();
}

defineClass(558, 578, {}, ColumnReorderEvent);
_.dispatch = function dispatch_10(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_vaadin_client_widget_grid_events_ColumnReorderEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'ColumnReorderEvent', 558);
function $clinit_ColumnResizeEvent(){
  $clinit_ColumnResizeEvent = emptyMethod;
  TYPE_11 = new GwtEvent$Type;
}

function ColumnResizeEvent(){
  $clinit_ColumnResizeEvent();
}

defineClass(178, 578, {}, ColumnResizeEvent);
_.dispatch = function dispatch_11(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_12(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_vaadin_client_widget_grid_events_ColumnResizeEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'ColumnResizeEvent', 178);
function $dispatch_1(this$static, handler){
  var container, section, target, targetElement;
  target = $getEventTarget(this$static.nativeEvent);
  if (!is_0(target)) {
    return;
  }
  targetElement = target;
  if ($isElementInChildWidget(this$static.grid, targetElement)) {
    return;
  }
  container = $findRowContainer(this$static.grid.escalator, targetElement);
  if (!container) {
    return;
  }
  section = ($clinit_GridConstants$Section() , FOOTER);
  container == this$static.grid.escalator.header_0?(section = HEADER):container == this$static.grid.escalator.body_0 && (section = BODY);
  this$static.doDispatch(handler, section);
}

function Grid$AbstractGridMouseEvent(grid, targetCell){
  this.associatedType = new DomEvent$Type(this.getBrowserEventType(), this);
  this.grid = grid;
  this.targetCell = targetCell;
}

defineClass(164, 593, {});
_.dispatch = function dispatch_12(handler){
  $dispatch_1(this, castTo(handler, 608));
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return this.associatedType;
}
;
var Lcom_vaadin_client_widgets_Grid$AbstractGridMouseEvent_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/AbstractGridMouseEvent', 164);
function GridClickEvent(grid, targetCell){
  Grid$AbstractGridMouseEvent.call(this, grid, targetCell);
}

defineClass(362, 164, {}, GridClickEvent);
_.doDispatch = function doDispatch(handler, section){
  var row;
  (section == ($clinit_GridConstants$Section() , BODY) && !!handler || section == HEADER && false || section == FOOTER && false) && (row = this.targetCell.rowReference.row , $isSelected_0(handler.this$01.grid, row)?handler.this$01.deselectAllowed && $deselect_0(handler.this$01.grid, row):$select_2(handler.this$01.grid, row));
}
;
_.getBrowserEventType = function getBrowserEventType(){
  return 'click';
}
;
var Lcom_vaadin_client_widget_grid_events_GridClickEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'GridClickEvent', 362);
function $doDispatch(section){
  (section == ($clinit_GridConstants$Section() , BODY) && false || section == HEADER && false || section == FOOTER && false) && null.$_nullMethod();
}

function GridDoubleClickEvent(grid, targetCell){
  Grid$AbstractGridMouseEvent.call(this, grid, targetCell);
}

defineClass(363, 164, {}, GridDoubleClickEvent);
_.doDispatch = function doDispatch_0(handler, section){
  $doDispatch((throwClassCastExceptionUnlessNull(handler) , section));
}
;
_.getBrowserEventType = function getBrowserEventType_0(){
  return 'dblclick';
}
;
var Lcom_vaadin_client_widget_grid_events_GridDoubleClickEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'GridDoubleClickEvent', 363);
function $dispatch_2(this$static, handler){
  var container, section, target;
  target = $getEventTarget(this$static.nativeEvent);
  if (is_0(target) && !$isElementInChildWidget(this$static.grid, target)) {
    section = ($clinit_GridConstants$Section() , FOOTER);
    container = this$static.grid.cellFocusHandler.containerWithFocus;
    container == this$static.grid.escalator.header_0?(section = HEADER):container == this$static.grid.escalator.body_0 && (section = BODY);
    this$static.doDispatch_0(handler, section);
  }
}

function Grid$AbstractGridKeyEvent(grid, targetCell){
  this.associatedType = new DomEvent$Type(this.getBrowserEventType(), this);
  this.grid = grid;
  this.targetCell = targetCell;
}

defineClass(128, 591, {});
_.dispatch = function dispatch_13(handler){
  $dispatch_2(this, castTo(handler, 180));
}
;
_.getAssociatedType_0 = function getAssociatedType_14(){
  return this.associatedType;
}
;
var Lcom_vaadin_client_widgets_Grid$AbstractGridKeyEvent_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/AbstractGridKeyEvent', 128);
function $doDispatch_0(this$static, handler, section){
  (section == ($clinit_GridConstants$Section() , BODY) && !!handler || section == HEADER && false || section == FOOTER && false) && $onKeyDown(handler, this$static);
}

function GridKeyDownEvent(grid, targetCell){
  Grid$AbstractGridKeyEvent.call(this, grid, targetCell);
}

defineClass(359, 128, {}, GridKeyDownEvent);
_.doDispatch_0 = function doDispatch_1(handler, section){
  $doDispatch_0(this, castTo(handler, 612), section);
}
;
_.getBrowserEventType = function getBrowserEventType_1(){
  return 'keydown';
}
;
var Lcom_vaadin_client_widget_grid_events_GridKeyDownEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'GridKeyDownEvent', 359);
function $doDispatch_1(section){
  (section == ($clinit_GridConstants$Section() , BODY) && false || section == HEADER && false || section == FOOTER && false) && null.$_nullMethod();
}

function GridKeyPressEvent(grid, targetCell){
  Grid$AbstractGridKeyEvent.call(this, grid, targetCell);
}

defineClass(361, 128, {}, GridKeyPressEvent);
_.doDispatch_0 = function doDispatch_2(handler, section){
  $doDispatch_1((throwClassCastExceptionUnlessNull(handler) , section));
}
;
_.getBrowserEventType = function getBrowserEventType_2(){
  return 'keypress';
}
;
var Lcom_vaadin_client_widget_grid_events_GridKeyPressEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'GridKeyPressEvent', 361);
function $doDispatch_2(this$static, handler, section){
  (section == ($clinit_GridConstants$Section() , BODY) && instanceOf(handler, 137) || section == HEADER && instanceOf(handler, 611) || section == FOOTER && false) && handler.onKeyUp(this$static);
}

function GridKeyUpEvent(grid, targetCell){
  Grid$AbstractGridKeyEvent.call(this, grid, targetCell);
}

defineClass(360, 128, {}, GridKeyUpEvent);
_.doDispatch_0 = function doDispatch_3(handler, section){
  $doDispatch_2(this, castTo(handler, 559), section);
}
;
_.getBrowserEventType = function getBrowserEventType_3(){
  return 'keyup';
}
;
var Lcom_vaadin_client_widget_grid_events_GridKeyUpEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'GridKeyUpEvent', 360);
function $clinit_ScrollEvent(){
  $clinit_ScrollEvent = emptyMethod;
  TYPE_12 = new GwtEvent$Type;
}

function ScrollEvent(){
  $clinit_ScrollEvent();
}

defineClass(129, 578, {}, ScrollEvent);
_.dispatch = function dispatch_14(handler){
  castTo(handler, 119).onScroll(this);
}
;
_.getAssociatedType = function getAssociatedType_15(){
  return TYPE_12;
}
;
var TYPE_12;
var Lcom_vaadin_client_widget_grid_events_ScrollEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.events', 'ScrollEvent', 129);
defineClass(596, 1, {});
var Lcom_vaadin_client_widget_grid_selection_AbstractRowHandleSelectionModel_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'AbstractRowHandleSelectionModel', 596);
function $setDeselectAllowed(this$static, deselectAllowed){
  this$static.deselectAllowed = deselectAllowed;
}

function ClickSelectHandler(grid){
  this.grid = grid;
  this.clickHandler = $addBodyClickHandler(grid, new ClickSelectHandler$RowClickHandler(this));
}

defineClass(450, 1, {}, ClickSelectHandler);
_.deselectAllowed = true;
var Lcom_vaadin_client_widget_grid_selection_ClickSelectHandler_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'ClickSelectHandler', 450);
function ClickSelectHandler$RowClickHandler(this$0){
  this.this$01 = this$0;
}

defineClass(451, 1, {17:1, 608:1}, ClickSelectHandler$RowClickHandler);
var Lcom_vaadin_client_widget_grid_selection_ClickSelectHandler$RowClickHandler_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'ClickSelectHandler/RowClickHandler', 451);
function $clinit_SelectionEvent(){
  $clinit_SelectionEvent = emptyMethod;
  eventType_0 = new GwtEvent$Type;
}

function SelectionEvent(grid, added, removed){
  $clinit_SelectionEvent();
  this.grid = grid;
  added != null?($clinit_Collections() , new Collections$SingletonList(added)):($clinit_Collections() , $clinit_Collections() , EMPTY_LIST);
  removed != null?($clinit_Collections() , new Collections$SingletonList(removed)):($clinit_Collections() , $clinit_Collections() , EMPTY_LIST);
}

defineClass(167, 578, {}, SelectionEvent);
_.dispatch = function dispatch_15(handler){
  $refreshBody(castTo(handler, 617).this$01);
}
;
_.getSource = function getSource_0(){
  return this.grid;
}
;
_.getAssociatedType = function getAssociatedType_16(){
  return eventType_0;
}
;
var eventType_0;
var Lcom_vaadin_client_widget_grid_selection_SelectionEvent_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'SelectionEvent', 167);
function $deselect(this$static, row){
  if (row == null) {
    throw toJs(new IllegalArgumentException('Row cannot be null'));
  }
  if (!!this$static.selectedRow && $equalsExplicit(this$static.selectedRow, new ListDataSource$RowHandleImpl(row))) {
    $deselectByHandle(this$static, this$static.selectedRow);
    $fireEvent_0(this$static.grid, new SelectionEvent(this$static.grid, null, row));
    return true;
  }
  return false;
}

function $deselectByHandle(this$static, handle){
  if (!!handle && $equalsExplicit(handle, this$static.selectedRow)) {
    this$static.selectedRow = null;
    return true;
  }
   else {
    return false;
  }
}

function $isSelected(this$static, row){
  return !!this$static.selectedRow && $equalsExplicit(this$static.selectedRow, new ListDataSource$RowHandleImpl(row));
}

function $reset(this$static){
  !!this$static.selectedRow && $deselect(this$static, this$static.selectedRow?this$static.selectedRow.row:null);
}

function $select_1(this$static, row){
  var removed;
  if (row == null) {
    throw toJs(new IllegalArgumentException('Row cannot be null'));
  }
  removed = this$static.selectedRow?this$static.selectedRow.row:null;
  if ($selectByHandle(this$static, new ListDataSource$RowHandleImpl(row))) {
    $fireEvent_0(this$static.grid, new SelectionEvent(this$static.grid, row, removed));
    return true;
  }
  return false;
}

function $selectByHandle(this$static, handle){
  if ($equalsExplicit(handle, this$static.selectedRow)) {
    return false;
  }
   else {
    $deselectByHandle(this$static, this$static.selectedRow);
    this$static.selectedRow = handle;
    return true;
  }
}

function $setGrid(this$static, grid){
  if (!!this$static.grid && !!grid) {
    throw toJs(new IllegalStateException_0('Selection model is already attached to a grid. Remove the selection model first from the grid and then add it.'));
  }
  this$static.grid = grid;
  if (this$static.grid) {
    this$static.spaceSelectHandler = new SpaceSelectHandler(grid);
    this$static.clickSelectHandler = new ClickSelectHandler(grid);
    !!this$static.spaceSelectHandler && $setDeselectAllowed_0(this$static.spaceSelectHandler, this$static.deselectAllowed);
    !!this$static.clickSelectHandler && $setDeselectAllowed(this$static.clickSelectHandler, this$static.deselectAllowed);
  }
   else {
    $removeHandler_0(this$static.spaceSelectHandler);
    $removeHandler(this$static.clickSelectHandler.clickHandler.real);
    this$static.spaceSelectHandler = null;
    this$static.clickSelectHandler = null;
  }
}

function SelectionModelSingle(){
}

defineClass(427, 596, {}, SelectionModelSingle);
_.deselectAllowed = true;
var Lcom_vaadin_client_widget_grid_selection_SelectionModelSingle_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'SelectionModelSingle', 427);
function $removeHandler_0(this$static){
  $removeHandler(this$static.spaceDownHandler.real);
  $removeHandler(this$static.spaceUpHandler.real);
}

function $setDeselectAllowed_0(this$static, deselectAllowed){
  this$static.deselectAllowed = deselectAllowed;
}

function SpaceSelectHandler(grid){
  this.grid = grid;
  this.spaceDownHandler = $addBodyKeyDownHandler(grid, new SpaceSelectHandler$SpaceKeyDownHandler(this));
  this.spaceUpHandler = $addBodyKeyUpHandler(grid, new SpaceSelectHandler$1(this));
}

defineClass(447, 1, {}, SpaceSelectHandler);
_.deselectAllowed = true;
_.spaceDown = false;
var Lcom_vaadin_client_widget_grid_selection_SpaceSelectHandler_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'SpaceSelectHandler', 447);
function SpaceSelectHandler$1(this$0){
  this.this$01 = this$0;
}

defineClass(137, 1, {17:1, 180:1, 559:1, 137:1}, SpaceSelectHandler$1);
_.onKeyUp = function onKeyUp(event_0){
  $getKeyCode(event_0.nativeEvent) == 32 && (this.this$01.spaceDown = false);
}
;
var Lcom_vaadin_client_widget_grid_selection_SpaceSelectHandler$1_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'SpaceSelectHandler/1', 137);
function $onKeyDown(this$static, event_0){
  var rowIndex;
  if ($getKeyCode(event_0.nativeEvent) != 32 || this$static.this$01.spaceDown) {
    return;
  }
  $preventDefault(event_0.nativeEvent);
  this$static.this$01.spaceDown = true;
  rowIndex = event_0.targetCell.rowReference.rowIndex;
  if (this$static.scrollHandler) {
    $removeHandler(this$static.scrollHandler.real);
    this$static.scrollHandler = null;
  }
  this$static.scrollHandler = $addDataAvailableHandler(this$static.this$01.grid, new SpaceSelectHandler$SpaceKeyDownHandler$1(this$static, rowIndex));
  $scrollToRow(this$static.this$01.grid, rowIndex, ($clinit_ScrollDestination() , ANY));
}

function $setSelected(this$static, grid, rowIndex){
  var row;
  row = $getRow(grid.dataSource, rowIndex);
  $isSelected(grid.selectionModel, row)?this$static.this$01.deselectAllowed && $deselect_0(grid, row):$select_2(grid, row);
}

function SpaceSelectHandler$SpaceKeyDownHandler(this$0){
  this.this$01 = this$0;
}

defineClass(448, 1, {17:1, 180:1, 612:1}, SpaceSelectHandler$SpaceKeyDownHandler);
_.scrollHandler = null;
var Lcom_vaadin_client_widget_grid_selection_SpaceSelectHandler$SpaceKeyDownHandler_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'SpaceSelectHandler/SpaceKeyDownHandler', 448);
function SpaceSelectHandler$SpaceKeyDownHandler$1(this$1, val$rowIndex){
  this.this$11 = this$1;
  this.val$rowIndex2 = val$rowIndex;
}

defineClass(449, 1, $intern_48, SpaceSelectHandler$SpaceKeyDownHandler$1);
_.onDataAvailable = function onDataAvailable(dataAvailableEvent){
  if ($contains(dataAvailableEvent.rowsAvailable, this.val$rowIndex2)) {
    $setSelected(this.this$11, this.this$11.this$01.grid, this.val$rowIndex2);
    $removeHandler(this.this$11.scrollHandler.real);
    this.this$11.scrollHandler = null;
  }
}
;
_.val$rowIndex2 = 0;
var Lcom_vaadin_client_widget_grid_selection_SpaceSelectHandler$SpaceKeyDownHandler$1_2_classLit = createForClass('com.vaadin.client.widget.grid.selection', 'SpaceSelectHandler/SpaceKeyDownHandler/1', 449);
function $clinit_Escalator(){
  $clinit_Escalator = emptyMethod;
  $clinit_UIObject();
  1 / $wnd.Math.sqrt(3);
  $wnd.Math.tan(0.6981317007977318);
}

function $detectAndApplyPositionFunction(this$static){
  var docStyle;
  if ($indexOf_0($wnd.navigator.userAgent, 'Firefox') != -1) {
    this$static.position_0 = new PositionFunction$AbsolutePosition;
    return;
  }
  docStyle = $doc.body.style;
  docStyle['transform'] !== undefined?docStyle['transformStyle'] !== undefined?(this$static.position_0 = new PositionFunction$Translate3DPosition):(this$static.position_0 = new PositionFunction$TranslatePosition):docStyle['webkitTransform'] !== undefined?(this$static.position_0 = new PositionFunction$WebkitTranslate3DPosition):(this$static.position_0 = new PositionFunction$AbsolutePosition);
}

function $findRowContainer(this$static, element){
  if (this$static.header_0.root != element && $isOrHasChild(this$static.header_0.root, element)) {
    return this$static.header_0;
  }
   else if (this$static.body_0.root != element && $isOrHasChild(this$static.body_0.root, element)) {
    return this$static.body_0;
  }
   else if (this$static.footer.root != element && $isOrHasChild(this$static.footer.root, element)) {
    return this$static.footer;
  }
  return null;
}

function $fireRowVisibilityChangeEvent(this$static){
  var visibleRangeEnd, visibleRangeStart, visibleRowCount;
  if (this$static.body_0.visualRowOrder.size_0 == 0) {
    $fireEvent_0(this$static, new RowVisibilityChangeEvent(0, 0));
  }
   else {
    visibleRangeStart = $getLogicalRowIndex(this$static.body_0, castToJso($getFirst(this$static.body_0.visualRowOrder)));
    visibleRangeEnd = $getLogicalRowIndex(this$static.body_0, castToJso($getLast(this$static.body_0.visualRowOrder))) + 1;
    visibleRowCount = visibleRangeEnd - visibleRangeStart;
    $fireEvent_0(this$static, new RowVisibilityChangeEvent(visibleRangeStart, visibleRowCount));
  }
}

function $getMinCellWidth(this$static, colIndex){
  return $getMinCellWidth_0(this$static.columnConfiguration, colIndex);
}

function $getViewportPixels(this$static){
  var from, to;
  from = round_int($wnd.Math.floor(this$static.verticalScrollbar.scrollPos));
  to = round_int($getHeightOfSection(this$static.body_0));
  return withLength(from, to);
}

function $getVisibleRowRange(this$static){
  return this$static.body_0.visualRowOrder.size_0 == 0?withLength(0, 0):withLength(this$static.body_0.topRowLogicalIndex, this$static.body_0.visualRowOrder.size_0);
}

function $hasColumnAndRowData(this$static){
  return (this$static.header_0.rows_0 > 0 || this$static.body_0.rows_0 > 0 || this$static.footer.rows_0 > 0) && this$static.columnConfiguration.columns.array.length > 0;
}

function $hasSomethingInDom(this$static){
  return this$static.headElem.hasChildNodes() || this$static.bodyElem.hasChildNodes() || this$static.footElem.hasChildNodes();
}

function $recalculateElementSizes(this$static){
  if (!this$static.attached) {
    return;
  }
  this$static.widthOfEscalator = $wnd.Math.max(0, getRequiredWidthBoundingClientRectDouble(($clinit_DOM() , this$static.element)));
  this$static.heightOfEscalator = $wnd.Math.max(0, getRequiredHeightBoundingClientRectDouble(this$static.element));
  $recalculateSectionHeight(this$static.header_0);
  $recalculateSectionHeight(this$static.footer);
  $recalculateScrollbarsForVirtualViewport(this$static.scroller);
  $verifyEscalatorCount(this$static.body_0);
  $reapplySpacerWidths(this$static.body_0.spacerContainer);
}

function $scrollToColumn(this$static, columnIndex, destination){
  validateScrollDestination(destination, 10);
  $verifyValidColumnIndex(this$static, columnIndex);
  if (columnIndex < this$static.columnConfiguration.frozenColumns) {
    throw toJs(new IllegalArgumentException('The given column index ' + columnIndex + ' is frozen.'));
  }
  $scrollToColumn_0(this$static.scroller, columnIndex, destination);
}

function $scrollToRowAndSpacer(this$static, rowIndex, destination, padding){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Escalator$6(this$static, destination, padding, rowIndex));
}

function $setHeight_0(this$static, height){
  ($clinit_String() , height).length != 0;
  $setHeightInternal(this$static, height);
}

function $setHeightInternal(this$static, height){
  var escalatorRowsBefore;
  escalatorRowsBefore = this$static.body_0.visualRowOrder.size_0;
  height != null && ($clinit_String() , height).length != 0?(($clinit_DOM() , this$static.element).style['height'] = height , undefined):(($clinit_DOM() , this$static.element).style['height'] = '400.0px' , undefined);
  $recalculateElementSizes(this$static);
  escalatorRowsBefore != this$static.body_0.visualRowOrder.size_0 && $fireRowVisibilityChangeEvent(this$static);
}

function $setScrollLeft_0(this$static, scrollLeft){
  $setScrollPos(this$static.horizontalScrollbar, scrollLeft);
}

function $setScrollTop_0(this$static, scrollTop){
  $setScrollPos(this$static.verticalScrollbar, scrollTop);
}

function $setStylePrimaryName_2(this$static, style){
  setStylePrimaryName(($clinit_DOM() , this$static.element), style);
  $setStylePrimaryName_1(this$static.verticalScrollbar, style);
  $setStylePrimaryName_0(this$static.horizontalScrollbar, style);
  setStylePrimaryName(this$static.tableWrapper, style + '-tablewrapper');
  setStylePrimaryName(this$static.headerDeco, style + '-header-deco');
  setStylePrimaryName(this$static.footerDeco, style + '-footer-deco');
  setStylePrimaryName(this$static.horizontalScrollbarDeco, style + '-horizontal-scrollbar-deco');
  setStylePrimaryName(this$static.spacerDecoContainer, style + '-spacer-deco-container');
  $setStylePrimaryName_6(this$static.header_0, style);
  $setStylePrimaryName_4(this$static.body_0, style);
  $setStylePrimaryName_5(this$static.footer, style);
}

function $setWidth(this$static){
  ($clinit_String() , '100%').length != 0?(($clinit_DOM() , this$static.element).style['width'] = '100%' , undefined):(($clinit_DOM() , this$static.element).style['width'] = '500.0px' , undefined);
  $recalculateElementSizes(this$static);
}

function $setupScrollbars(this$static, root){
  var scrollHandler, scrollbarThickness, vScrollStyle;
  scrollHandler = new Escalator$2(this$static);
  scrollbarThickness = getNativeScrollbarSize();
  ($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1).browserDetails.isIE && ($isIE9((!instance_1 && (instance_1 = new BrowserInfo) , instance_1))?(scrollbarThickness += 2):(scrollbarThickness += 1));
  $appendChild(root, this$static.verticalScrollbar.root);
  $addScrollHandler(this$static.verticalScrollbar, scrollHandler);
  $setScrollbarThickness(this$static.verticalScrollbar, scrollbarThickness);
  if ($isIE8((!instance_1 && (instance_1 = new BrowserInfo) , instance_1))) {
    vScrollStyle = this$static.verticalScrollbar.root.style;
    vScrollStyle['right'] = $getScrollbarThickness(this$static.verticalScrollbar) - 1 + ($clinit_Style$Unit() , 'px');
  }
  $appendChild(root, this$static.horizontalScrollbar.root);
  $addScrollHandler(this$static.horizontalScrollbar, scrollHandler);
  $setScrollbarThickness(this$static.horizontalScrollbar, scrollbarThickness);
  $addVisibilityHandler(this$static.horizontalScrollbar, new Escalator$3);
  if (getNativeScrollbarSize() == 0) {
    this$static.verticalScrollbar.root.style['zIndex'] = '90';
    this$static.horizontalScrollbar.root.style['zIndex'] = '90';
  }
}

function $verifyValidColumnIndex(this$static, columnIndex){
  if (columnIndex < 0 || columnIndex >= this$static.columnConfiguration.columns.array.length) {
    throw toJs(new IndexOutOfBoundsException_0('The given column index ' + columnIndex + ' does not exist.'));
  }
}

function $verifyValidRowIndex(this$static, rowIndex){
  if (rowIndex < 0 || rowIndex >= this$static.body_0.rows_0) {
    throw toJs(new IndexOutOfBoundsException_0('The given row index ' + rowIndex + ' does not exist.'));
  }
}

function Escalator(){
  $clinit_Escalator();
  var fCornerStyle, hCornerStyle, hWrapperStyle, root, table;
  this.flyweightRow = new FlyweightRow;
  this.headElem = ($clinit_DOM() , $createTHeadElement($doc));
  this.bodyElem = $createTBodyElement($doc);
  this.footElem = $createTFootElement($doc);
  this.verticalScrollbar = new ScrollbarBundle$VerticalScrollbarBundle;
  this.horizontalScrollbar = new ScrollbarBundle$HorizontalScrollbarBundle;
  this.header_0 = new Escalator$HeaderRowContainer(this, this.headElem);
  this.body_0 = new Escalator$BodyRowContainerImpl(this, this.bodyElem);
  this.footer = new Escalator$FooterRowContainer(this, this.footElem);
  this.scroller = new Escalator$Scroller(this);
  this.columnConfiguration = new Escalator$ColumnConfigurationImpl(this);
  this.horizontalScrollbarDeco = $createDivElement($doc);
  this.headerDeco = $createDivElement($doc);
  this.footerDeco = $createDivElement($doc);
  this.spacerDecoContainer = $createDivElement($doc);
  new Escalator$1(this);
  this.positions = new Escalator$ElementPositionBookkeeper(this);
  $detectAndApplyPositionFunction(this);
  $info_1(getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Escalator_2_classLit) , Lcom_vaadin_client_widgets_Escalator_2_classLit.typeName)), 'Using ' + $getSimpleName(getClass__Ljava_lang_Class___devirtual$(this.position_0)) + ' for position');
  root = $createDivElement($doc);
  $setElement_0(this, root);
  $setupScrollbars(this, root);
  this.tableWrapper = $createDivElement($doc);
  $appendChild(root, this.tableWrapper);
  table = $createTableElement($doc);
  $appendChild(this.tableWrapper, table);
  $appendChild(table, this.headElem);
  $appendChild(table, this.bodyElem);
  $appendChild(table, this.footElem);
  hCornerStyle = this.headerDeco.style;
  hCornerStyle['width'] = $getScrollbarThickness(this.verticalScrollbar) + ($clinit_Style$Unit() , 'px');
  hCornerStyle['display'] = ($clinit_Style$Display() , 'none');
  $appendChild(root, this.headerDeco);
  fCornerStyle = this.footerDeco.style;
  fCornerStyle['width'] = $getScrollbarThickness(this.verticalScrollbar) + 'px';
  fCornerStyle['display'] = 'none';
  $appendChild(root, this.footerDeco);
  hWrapperStyle = this.horizontalScrollbarDeco.style;
  hWrapperStyle['display'] = 'none';
  hWrapperStyle['height'] = $getScrollbarThickness(this.horizontalScrollbar) + 'px';
  $appendChild(root, this.horizontalScrollbarDeco);
  $setStylePrimaryName_2(this, 'v-escalator');
  this.spacerDecoContainer.setAttribute('aria-hidden', 'true');
  $setHeightInternal(this, null);
  this.element.style['width'] = '500.0px';
  $recalculateElementSizes(this);
}

function getScrollPos(destination, targetStartPx, targetEndPx, viewportStartPx, viewportEndPx, padding){
  $clinit_Escalator();
  var endScrollPos, startScrollPos, targetMiddle, viewportLength;
  viewportLength = viewportEndPx - viewportStartPx;
  switch (destination.ordinal) {
    case 0:
      {
        startScrollPos = targetStartPx - padding;
        endScrollPos = targetEndPx + padding - viewportLength;
        return startScrollPos < viewportStartPx?startScrollPos:targetEndPx + padding > viewportEndPx?endScrollPos:viewportStartPx;
      }

    case 3:
      {
        return targetEndPx + padding - viewportLength;
      }

    case 2:
      {
        targetMiddle = targetStartPx + (targetEndPx - targetStartPx) / 2;
        return targetMiddle - viewportLength / 2;
      }

    case 1:
      {
        return targetStartPx - padding;
      }

    default:{
        throw toJs(new IllegalArgumentException('Internal: ScrollDestination has been modified, but Escalator.getScrollPos has not been updated to match new values.'));
      }

  }
}

function validateScrollDestination(destination, padding){
  $clinit_Escalator();
  if (!destination) {
    throw toJs(new IllegalArgumentException('Destination cannot be null'));
  }
  if (destination == ($clinit_ScrollDestination() , MIDDLE) && padding != 0) {
    throw toJs(new IllegalArgumentException('You cannot have a padding with a MIDDLE destination'));
  }
}

defineClass(299, 16, $intern_36, Escalator);
_.logWarning = function logWarning(message){
  $clinit_Escalator();
  $warning(getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Escalator_2_classLit) , Lcom_vaadin_client_widgets_Escalator_2_classLit.typeName)), message);
}
;
_.onLoad = function onLoad_0(){
  var column, column$iterator, columnChanged, columnsChanged;
  $autodetectRowHeightLater(this.header_0);
  $autodetectRowHeightLater(this.body_0);
  $autodetectRowHeightLater(this.footer);
  $paintInsertStaticRows(this.header_0, 0, this.header_0.rows_0);
  $paintInsertStaticRows(this.footer, 0, this.footer.rows_0);
  $scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), new Escalator$4(this));
  columnsChanged = false;
  for (column$iterator = new ArrayList$1(this.columnConfiguration.columns); column$iterator.i < column$iterator.this$01.array.length;) {
    column = castTo($next_4(column$iterator), 68);
    columnChanged = $measureAndSetWidthIfNeeded(column);
    columnChanged && (columnsChanged = true);
  }
  if (columnsChanged) {
    $reapplyColumnWidths(this.header_0);
    $reapplyColumnWidths(this.body_0);
    $reapplyColumnWidths(this.footer);
  }
  $onLoad(this.verticalScrollbar);
  $onLoad(this.horizontalScrollbar);
  $attachScrollListener(this.scroller, this.verticalScrollbar.root);
  $attachScrollListener(this.scroller, this.horizontalScrollbar.root);
  $attachMousewheelListener(this.scroller, ($clinit_DOM() , this.element));
  $attachTouchListeners(this.scroller, this.element);
}
;
_.onUnload = function onUnload_1(){
  var i_0, index_0, rowsToRemove, tr;
  $detachScrollListener(this.scroller, this.verticalScrollbar.root);
  $detachScrollListener(this.scroller, this.horizontalScrollbar.root);
  $detachMousewheelListener(this.scroller, ($clinit_DOM() , this.element));
  $detachTouchListeners(this.scroller, this.element);
  $paintRemoveRows(this.header_0, 0, this.header_0.rows_0);
  $paintRemoveRows(this.footer, 0, this.footer.rows_0);
  rowsToRemove = $getDomRowCount(this.body_0);
  for (i_0 = 0; i_0 < rowsToRemove; i_0++) {
    index_0 = rowsToRemove - i_0 - 1;
    tr = this.bodyElem.rows[index_0];
    $paintRemoveRow(this.body_0, tr, index_0);
    $remove_5(this.positions, tr);
  }
  $reset_1(this.body_0.visualRowOrder);
  $setTopRowLogicalIndex(this.body_0, 0);
}
;
_.heightOfEscalator = 0;
_.tBodyScrollLeft = 0;
_.tBodyScrollTop = 0;
_.widthOfEscalator = 0;
var Lcom_vaadin_client_widgets_Escalator_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator', 299);
function Escalator$1(this$0){
  this.this$01 = this$0;
}

defineClass(314, 1, {}, Escalator$1);
_.execute_1 = function execute_15(){
  $recalculateElementSizes(this.this$01);
}
;
var Lcom_vaadin_client_widgets_Escalator$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/1', 314);
function Escalator$2(this$0){
  this.this$01 = this$0;
}

defineClass(315, 1, $intern_46, Escalator$2);
_.onScroll = function onScroll_1(event_0){
  $onScroll(this.this$01.scroller);
  $fireEvent_0(this.this$01, new ScrollEvent);
}
;
var Lcom_vaadin_client_widgets_Escalator$2_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/2', 315);
function $visibilityChanged(this$static){
  if (this$static.queued) {
    return;
  }
  this$static.queued = true;
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Escalator$3$1(this$static));
}

function Escalator$3(){
}

defineClass(316, 1, {17:1, 618:1}, Escalator$3);
_.queued = false;
var Lcom_vaadin_client_widgets_Escalator$3_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/3', 316);
function Escalator$3$1(this$1){
  this.this$11 = this$1;
}

defineClass(317, 1, {}, Escalator$3$1);
_.execute_1 = function execute_16(){
  this.this$11.queued = false;
}
;
var Lcom_vaadin_client_widgets_Escalator$3$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/3/1', 317);
function Escalator$4(this$0){
  this.this$01 = this$0;
}

defineClass(318, 1, {}, Escalator$4);
_.execute_1 = function execute_17(){
  $recalculateElementSizes(this.this$01);
}
;
var Lcom_vaadin_client_widgets_Escalator$4_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/4', 318);
function Escalator$6(this$0, val$destination, val$padding, val$rowIndex){
  this.this$01 = this$0;
  this.val$destination2 = val$destination;
  this.val$padding3 = val$padding;
  this.val$rowIndex4 = val$rowIndex;
}

defineClass(319, 1, {}, Escalator$6);
_.execute_1 = function execute_18(){
  var rowHeight, rowRange, rowTop, scrollPos, spacer, spacerHeight, spacerRange, spacerTop, targetEnd, targetRange, targetStart, viewportEnd, viewportStart;
  validateScrollDestination(this.val$destination2, this.val$padding3);
  this.val$rowIndex4 != -1 && $verifyValidRowIndex(this.this$01, this.val$rowIndex4);
  if (this.val$rowIndex4 != -1) {
    rowTop = round_int($wnd.Math.floor($getRowTop_0(this.this$01.body_0, this.val$rowIndex4)));
    rowHeight = round_int($wnd.Math.ceil(this.this$01.body_0.defaultRowHeight));
    rowRange = withLength(rowTop, rowHeight);
  }
   else {
    rowRange = withLength(0, 0);
  }
  spacer = $getSpacer(this.this$01.body_0.spacerContainer, this.val$rowIndex4);
  if (this.val$rowIndex4 == -1 && !spacer) {
    throw toJs(new IllegalArgumentException('Cannot scroll to row index -1, as there is no spacer open at that index.'));
  }
  if (spacer) {
    spacerTop = round_int($wnd.Math.floor($getTop(spacer.this$11.this$01.positions, spacer.root)));
    spacerHeight = round_int($wnd.Math.ceil(spacer.height_0));
    spacerRange = withLength(spacerTop, spacerHeight);
    targetRange = $combineWith(rowRange, spacerRange);
  }
   else {
    targetRange = rowRange;
  }
  targetStart = targetRange.start_0;
  targetEnd = targetRange.end;
  viewportStart = this.this$01.verticalScrollbar.scrollPos;
  viewportEnd = viewportStart + $getHeightOfSection(this.this$01.body_0);
  scrollPos = getScrollPos(this.val$destination2, targetStart, targetEnd, viewportStart, viewportEnd, this.val$padding3);
  $setScrollTop_0(this.this$01, scrollPos);
}
;
_.val$padding3 = 0;
_.val$rowIndex4 = 0;
var Lcom_vaadin_client_widgets_Escalator$6_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/6', 319);
function $assertArgumentsAreValidAndWithinRange(this$static, index_0, numberOfRows){
  if (numberOfRows < 1) {
    throw toJs(new IllegalArgumentException('Number of rows must be 1 or greater (was ' + numberOfRows + ')'));
  }
  if (index_0 < 0 || index_0 + numberOfRows > this$static.rows_0) {
    throw toJs(new IndexOutOfBoundsException_0('The given row range (' + index_0 + '..' + (index_0 + numberOfRows) + ') was outside of the current number of rows (' + this$static.rows_0 + ')'));
  }
}

function $autodetectRowHeightLater(this$static){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Escalator$AbstractRowContainer$1(this$static));
}

function $autodetectRowHeightNow(this$static){
  var boundingHeight, cellElem, detectionTr;
  if (!this$static.this$01_1.attached) {
    this$static.defaultRowHeightShouldBeAutodetected = true;
    return;
  }
  detectionTr = ($clinit_DOM() , $createTRElement($doc));
  $setClassName(detectionTr, this$static.primaryStyleName + '-row');
  cellElem = createElement_1(this$static.getCellElementTagName());
  $setClassName(cellElem, this$static.primaryStyleName + '-cell');
  ($clinit_DOMImpl() , impl_0).setInnerText(cellElem, 'Ij');
  detectionTr.appendChild(cellElem);
  $appendChild(this$static.root, detectionTr);
  boundingHeight = getRequiredHeightBoundingClientRectDouble(cellElem);
  this$static.defaultRowHeight = $wnd.Math.max(1, boundingHeight);
  $removeChild(this$static.root, detectionTr);
  this$static.root.hasChildNodes() && this$static.reapplyDefaultRowHeights();
}

function $calculateTotalRowHeight(this$static){
  return this$static.defaultRowHeight * this$static.rows_0;
}

function $createCellElement(this$static, width_0){
  var cellElem, height;
  cellElem = createElement_1(this$static.getCellElementTagName());
  height = this$static.defaultRowHeight;
  cellElem.style['height'] = height + ($clinit_Style$Unit() , 'px');
  width_0 >= 0 && (cellElem.style['width'] = width_0 + 'px' , undefined);
  $addClassName(cellElem, this$static.primaryStyleName + '-cell');
  return cellElem;
}

function $getCell(this$static, element){
  var cellElement, cellElementCandidate, domColumnIndex, domRowIndex, e, e0;
  if (!element) {
    throw toJs(new IllegalArgumentException('Element cannot be null'));
  }
  if (this$static.root == element || $getParentElement_0(($clinit_DOMImpl() , element)) == this$static.root || !$isOrHasChild(this$static.root, element)) {
    return null;
  }
  cellElementCandidate = element;
  while ($getParentElement($getParentElement_0(($clinit_DOMImpl() , cellElementCandidate))) != this$static.root) {
    cellElementCandidate = $getParentElement_0(cellElementCandidate);
  }
  cellElement = cellElementCandidate;
  domColumnIndex = -1;
  for (e0 = cellElement; e0; e0 = $getPreviousSiblingElement(e0)) {
    ++domColumnIndex;
  }
  domRowIndex = -1;
  for (e = $getParentElement_0(cellElement); e; e = $getPreviousSiblingElement(e)) {
    ++domRowIndex;
  }
  return new Cell(domRowIndex, domColumnIndex, cellElement);
}

function $getRowTop(this$static, tr){
  return $getTop(this$static.this$01_1.positions, tr);
}

function $insertAfterReferenceAndUpdateIt(parent_0, elem, referenceNode){
  var next;
  referenceNode?(next = !referenceNode?null:referenceNode.nextSibling , !next?parent_0.appendChild(elem):parent_0.insertBefore(elem, next)):$insertBefore(parent_0, elem, parent_0.firstChild);
  return elem;
}

function $insertRows(this$static, index_0, numberOfRows){
  var col, colWidths, i_0, width_0;
  if (index_0 < 0 || index_0 > this$static.rows_0) {
    throw toJs(new IndexOutOfBoundsException_0('The given index (' + index_0 + ') was outside of the current number of rows (0..' + this$static.rows_0 + ')'));
  }
  if (numberOfRows < 1) {
    throw toJs(new IllegalArgumentException('Number of rows must be 1 or greater (was ' + numberOfRows + ')'));
  }
  this$static.rows_0 += numberOfRows;
  if (this$static.this$01_1.attached) {
    this$static.paintInsertRows(index_0, numberOfRows);
    if (this$static.rows_0 == numberOfRows) {
      colWidths = new HashMap;
      for (i_0 = 0; i_0 < this$static.this$01_1.columnConfiguration.columns.array.length; i_0++) {
        width_0 = $getColumnWidth_0(this$static.this$01_1.columnConfiguration, i_0);
        col = valueOf(i_0);
        $put_3(colWidths.hashCodeMap, col, width_0);
      }
      $setColumnWidths(this$static.this$01_1.columnConfiguration, colWidths);
    }
  }
}

function $measureMinCellWidth(this$static, colIndex, withContent){
  var cell, cellWidth, minCellWidth, row, rows_0, cellHasColspan, cellIsHidden, cellClone, requiredWidth, parent_0;
  minCellWidth = -1;
  rows_0 = this$static.root.rows;
  for (row = 0; row < rows_0.length; row++) {
    cell = rows_0[row].cells[colIndex];
    if (!!cell && !(cellHasColspan = cell.colSpan > 1 , cellIsHidden = $equals_0(($clinit_Style$Display() , 'none'), $getDisplay(cell.style)) , cellHasColspan || cellIsHidden)) {
      cellWidth = (cellClone = cell.cloneNode(withContent) , cellClone.style['height'] = '' , cellClone.style['width'] = '' , $insertBefore($getParentElement_0(($clinit_DOMImpl() , cell)), cellClone, cell) , requiredWidth = getRequiredWidthBoundingClientRectDouble(cellClone) , ($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1).browserDetails.isIE && (requiredWidth += 0.01) , parent_0 = $getParentElement_0(cellClone) , !!parent_0 && parent_0.removeChild(cellClone) , requiredWidth);
      minCellWidth = $wnd.Math.max(minCellWidth, cellWidth);
    }
  }
  return minCellWidth;
}

function $paintInsertCells(this$static, tr, logicalRowIndex, offset, numberOfCells){
  var cell, cell$iterator, cell$iterator0, cellElem, cells_0, colWidth, referenceCell;
  $setup_0(this$static.this$01_1.flyweightRow, tr, logicalRowIndex, $getCalculatedColumnWidths(this$static.this$01_1.columnConfiguration));
  cells_0 = new FlyweightRow$2(this$static.this$01_1.flyweightRow, offset, numberOfCells);
  for (cell$iterator0 = new FlyweightRow$CellIterator(new AbstractList$SubList(cells_0.this$01.cells_0, cells_0.val$offset2, cells_0.val$offset2 + cells_0.val$numberOfCells3), false); cell$iterator0.cursor + cell$iterator0.skipNext < cell$iterator0.cells_0.array.length;) {
    cell = $next_1(cell$iterator0);
    colWidth = $getColumnWidthActual(this$static.this$01_1.columnConfiguration, cell.column);
    cellElem = $createCellElement(this$static, colWidth);
    cell.element = cellElem;
  }
  this$static.updater.preAttach(this$static.this$01_1.flyweightRow, cells_0);
  offset != 0?(referenceCell = tr.childNodes[offset - 1]):(referenceCell = null);
  for (cell$iterator = new FlyweightRow$CellIterator(new AbstractList$SubList(cells_0.this$01.cells_0, cells_0.val$offset2, cells_0.val$offset2 + cells_0.val$numberOfCells3), false); cell$iterator.cursor + cell$iterator.skipNext < cell$iterator.cells_0.array.length;) {
    cell = $next_1(cell$iterator);
    referenceCell = $insertAfterReferenceAndUpdateIt(tr, cell.element, referenceCell);
  }
  this$static.updater.postAttach(this$static.this$01_1.flyweightRow, cells_0);
  this$static.updater.update(this$static.this$01_1.flyweightRow, cells_0);
}

function $paintInsertColumns(this$static, offset, numberOfColumns, frozen){
  var col, logicalRowIndex, row, tr;
  for (row = 0; row < this$static.getDomRowCount(); row++) {
    tr = this$static.getTrByVisualIndex(row);
    logicalRowIndex = this$static.getLogicalRowIndex(tr);
    $paintInsertCells(this$static, tr, logicalRowIndex, offset, numberOfColumns);
  }
  $reapplyRowWidths(this$static);
  if (frozen) {
    for (col = offset; col < offset + numberOfColumns; col++) {
      $toggleFrozenColumnClass(this$static, col, true, 'frozen');
      $updateFreezePosition(this$static, col, this$static.this$01_1.scroller.lastScrollLeft);
    }
  }
}

function $paintInsertRow(this$static, referenceRow, tr, logicalRowIndex){
  $setup_0(this$static.this$01_1.flyweightRow, tr, logicalRowIndex, $getCalculatedColumnWidths(this$static.this$01_1.columnConfiguration));
  this$static.updater.preAttach(this$static.this$01_1.flyweightRow, $getCells(this$static.this$01_1.flyweightRow));
  referenceRow = $insertAfterReferenceAndUpdateIt(this$static.root, tr, referenceRow);
  this$static.updater.postAttach(this$static.this$01_1.flyweightRow, $getCells(this$static.this$01_1.flyweightRow));
  this$static.updater.update(this$static.this$01_1.flyweightRow, $getCells(this$static.this$01_1.flyweightRow));
  return referenceRow;
}

function $paintInsertStaticRows(this$static, visualIndex, numberOfRows){
  var addedRows, cellElem, col, colWidth, referenceRow, row, tr;
  addedRows = new ArrayList;
  if (numberOfRows < 1) {
    return addedRows;
  }
  this$static.root.childNodes.length != 0 && visualIndex != 0?(referenceRow = $getChild(this$static.root, visualIndex - 1)):(referenceRow = null);
  for (row = visualIndex; row < visualIndex + numberOfRows; row++) {
    tr = ($clinit_DOM() , $createTRElement($doc));
    addedRows.array[addedRows.array.length] = tr;
    $addClassName(tr, this$static.primaryStyleName + '-row');
    for (col = 0; col < this$static.this$01_1.columnConfiguration.columns.array.length; col++) {
      colWidth = $getColumnWidthActual(this$static.this$01_1.columnConfiguration, col);
      cellElem = $createCellElement(this$static, colWidth);
      tr.appendChild(cellElem);
      if (col < this$static.this$01_1.columnConfiguration.frozenColumns) {
        $addClassName(cellElem, 'frozen');
        this$static.this$01_1.position_0.set_0(cellElem, this$static.this$01_1.scroller.lastScrollLeft, 0);
      }
      this$static.this$01_1.columnConfiguration.frozenColumns > 0 && col == this$static.this$01_1.columnConfiguration.frozenColumns - 1 && $addClassName(cellElem, 'last-frozen');
    }
    referenceRow = $paintInsertRow(this$static, referenceRow, tr, row);
  }
  $reapplyRowWidths(this$static);
  this$static.recalculateSectionHeight();
  return addedRows;
}

function $paintRemoveColumns(this$static, numberOfColumns){
  var attachedCells, detachedCells, i_0, j, row;
  for (i_0 = 0; i_0 < this$static.getDomRowCount(); i_0++) {
    row = this$static.getTrByVisualIndex(i_0);
    $setup_0(this$static.this$01_1.flyweightRow, row, i_0, $getCalculatedColumnWidths(this$static.this$01_1.columnConfiguration));
    attachedCells = new FlyweightRow$1(this$static.this$01_1.flyweightRow, 0, numberOfColumns);
    this$static.updater.preDetach(this$static.this$01_1.flyweightRow, attachedCells);
    for (j = 0; j < numberOfColumns; j++) {
      $removeFromParent(row.cells[0]);
    }
    detachedCells = new FlyweightRow$2(this$static.this$01_1.flyweightRow, 0, numberOfColumns);
    this$static.updater.postDetach(this$static.this$01_1.flyweightRow, detachedCells);
  }
}

function $paintRemoveRow(this$static, tr, logicalRowIndex){
  var parent_0;
  $setup_0(this$static.this$01_1.flyweightRow, tr, logicalRowIndex, $getCalculatedColumnWidths(this$static.this$01_1.columnConfiguration));
  this$static.updater.preDetach(this$static.this$01_1.flyweightRow, $getCells(this$static.this$01_1.flyweightRow));
  parent_0 = $getParentElement_0(($clinit_DOMImpl() , tr));
  !!parent_0 && parent_0.removeChild(tr);
  this$static.updater.postDetach(this$static.this$01_1.flyweightRow, $getCells(this$static.this$01_1.flyweightRow));
}

function $reapplyColumnWidths(this$static){
  var cell, columnIndex, row, width_0, colspan, spannedColumns;
  row = $getFirstChildElement(this$static.root);
  while (row) {
    if (!$isSpacer(this$static.this$01_1.body_0.spacerContainer, row)) {
      cell = $getFirstChildElement_0(($clinit_DOMImpl() , row));
      columnIndex = 0;
      while (cell) {
        width_0 = (colspan = parseInt(cell['colSpan']) | 0 , spannedColumns = withLength(columnIndex, colspan) , spannedColumns.end > this$static.this$01_1.columnConfiguration.columns.array.length && (spannedColumns = new Range_0(columnIndex, this$static.this$01_1.columnConfiguration.columns.array.length)) , $getCalculatedColumnsWidth(this$static.this$01_1.columnConfiguration, spannedColumns));
        cell.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
        cell = $getNextSiblingElement(cell);
        ++columnIndex;
      }
    }
    row = $getNextSiblingElement(($clinit_DOMImpl() , row));
  }
  $reapplyRowWidths(this$static);
}

function $reapplyRowHeight(tr, heightPx){
  var cellElem;
  cellElem = $getFirstChildElement_0(($clinit_DOMImpl() , tr));
  while (cellElem) {
    cellElem.style['height'] = heightPx + ($clinit_Style$Unit() , 'px');
    cellElem = $getNextSiblingElement(cellElem);
  }
}

function $reapplyRowWidths(this$static){
  var row, rowWidth;
  rowWidth = $calculateRowWidth(this$static.this$01_1.columnConfiguration);
  if (rowWidth < 0) {
    return;
  }
  row = $getFirstChildElement(this$static.root);
  while (row) {
    row.style['width'] = ($clinit_WidgetUtil() , roundSize(rowWidth, true) + ($clinit_Style$Unit() , 'px'));
    row = $getNextSiblingElement(($clinit_DOMImpl() , row));
  }
}

function $refreshRow(this$static, tr, logicalRowIndex, colRange){
  var cellsToUpdate;
  $setup_0(this$static.this$01_1.flyweightRow, tr, logicalRowIndex, $getCalculatedColumnWidths(this$static.this$01_1.columnConfiguration));
  cellsToUpdate = new FlyweightRow$1(this$static.this$01_1.flyweightRow, colRange.start_0, colRange.end - colRange.start_0);
  this$static.updater.update(this$static.this$01_1.flyweightRow, cellsToUpdate);
}

function $refreshRows(this$static, index_0, numberOfRows){
  var colRange, rowRange;
  rowRange = withLength(index_0, numberOfRows);
  colRange = withLength(0, this$static.this$01_1.columnConfiguration.columns.array.length);
  this$static.refreshCells(rowRange, colRange);
}

function $removeRows(this$static, index_0, numberOfRows){
  $assertArgumentsAreValidAndWithinRange(this$static, index_0, numberOfRows);
  this$static.rows_0 -= numberOfRows;
  if (!this$static.this$01_1.attached) {
    return;
  }
  $hasSomethingInDom(this$static.this$01_1) && this$static.paintRemoveRows(index_0, numberOfRows);
}

function $setColumnFrozen(this$static, column, frozen){
  $toggleFrozenColumnClass(this$static, column, frozen, 'frozen');
  frozen && $updateFreezePosition(this$static, column, this$static.this$01_1.scroller.lastScrollLeft);
}

function $setEscalatorUpdater(this$static, escalatorUpdater){
  this$static.updater = escalatorUpdater;
  $hasColumnAndRowData(this$static.this$01_1) && this$static.rows_0 > 0 && $refreshRows(this$static, 0, this$static.rows_0);
}

function $setRowPosition(this$static, tr, y_0){
  $set_4(this$static.this$01_1.positions, tr, 0, y_0);
}

function $setStylePrimaryName_3(this$static, primaryStyleName){
  var cell, oldStyle, row;
  oldStyle = this$static.primaryStyleName;
  if (equals_6(oldStyle, primaryStyleName)) {
    return;
  }
  this$static.primaryStyleName = primaryStyleName;
  row = this$static.root.rows[0];
  while (row) {
    setStylePrimaryName(row, primaryStyleName + '-row');
    cell = row.cells[0];
    while (cell) {
      setStylePrimaryName(cell, primaryStyleName + '-cell');
      cell = $getNextSiblingElement(($clinit_DOMImpl() , cell));
    }
    row = $getNextSiblingElement(($clinit_DOMImpl() , row));
  }
}

function $toggleFrozenColumnClass(this$static, column, frozen, className){
  var cell, childRows, row, tr;
  childRows = this$static.root.rows;
  for (row = 0; row < childRows.length; row++) {
    tr = childRows[row];
    if (!this$static.rowCanBeFrozen(tr)) {
      continue;
    }
    cell = tr.cells[column];
    if (frozen) {
      $addClassName(cell, className);
    }
     else {
      $removeClassName(cell, className);
      this$static.this$01_1.position_0.reset_0(cell);
    }
  }
}

function $updateFreezePosition(this$static, column, scrollLeft){
  var cell, childRows, row, tr;
  childRows = this$static.root.rows;
  for (row = 0; row < childRows.length; row++) {
    tr = childRows[row];
    if (this$static.rowCanBeFrozen(tr)) {
      cell = tr.cells[column];
      this$static.this$01_1.position_0.set_0(cell, scrollLeft, 0);
    }
  }
}

function Escalator$AbstractRowContainer(this$0, rowContainerElement){
  this.this$01_1 = this$0;
  this.updater = ($clinit_EscalatorUpdater() , NULL);
  this.root = rowContainerElement;
}

defineClass(153, 1, {});
_.getCell = function getCell(element){
  return $getCell(this, element);
}
;
_.getDefaultRowHeight = function getDefaultRowHeight(){
  return this.defaultRowHeight;
}
;
_.getLogicalRowIndex = function getLogicalRowIndex(tr){
  return tr.sectionRowIndex;
}
;
_.getRowCount = function getRowCount(){
  return this.rows_0;
}
;
_.getRowElement = function getRowElement(index_0){
  return this.getTrByVisualIndex(index_0);
}
;
_.refreshRows = function refreshRows(index_0, numberOfRows){
  $refreshRows(this, index_0, numberOfRows);
}
;
_.defaultRowHeight = 20;
_.defaultRowHeightShouldBeAutodetected = true;
_.primaryStyleName = null;
_.rows_0 = 0;
var Lcom_vaadin_client_widgets_Escalator$AbstractRowContainer_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/AbstractRowContainer', 153);
function Escalator$AbstractRowContainer$1(this$1){
  this.this$11 = this$1;
}

defineClass(311, 1, {}, Escalator$AbstractRowContainer$1);
_.execute_1 = function execute_19(){
  if (this.this$11.defaultRowHeightShouldBeAutodetected && this.this$11.this$01_1.attached) {
    $autodetectRowHeightNow(this.this$11);
    this.this$11.defaultRowHeightShouldBeAutodetected = false;
  }
}
;
var Lcom_vaadin_client_widgets_Escalator$AbstractRowContainer$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/AbstractRowContainer/1', 311);
function $getTrByVisualIndex(this$static, index_0){
  if (index_0 >= 0 && index_0 < this$static.root.childNodes.length) {
    return this$static.root.rows[index_0];
  }
   else {
    throw toJs(new IndexOutOfBoundsException_0('No such visual index: ' + index_0));
  }
}

function $paintRemoveRows(this$static, index_0, numberOfRows){
  var i_0, tr;
  for (i_0 = index_0; i_0 < index_0 + numberOfRows; i_0++) {
    tr = this$static.root.rows[index_0];
    $paintRemoveRow(this$static, tr, index_0);
  }
  $recalculateSectionHeight(this$static);
}

function $recalculateSectionHeight(this$static){
  var newHeight;
  newHeight = this$static.defaultRowHeight * this$static.rows_0;
  if (newHeight != this$static.heightOfSection) {
    this$static.heightOfSection = newHeight;
    this$static.sectionHeightCalculated();
    $setOffsetSize(this$static.this$01_0.verticalScrollbar, this$static.this$01_0.heightOfEscalator - $wnd.Math.max(0, this$static.this$01_0.header_0.heightOfSection) - $wnd.Math.max(0, this$static.this$01_0.footer.heightOfSection));
    $verifyEscalatorCount(this$static.this$01_0.body_0);
    $updateSpacerDecosVisibility(this$static.this$01_0.body_0.spacerContainer);
  }
}

function Escalator$AbstractStaticRowContainer(this$0, headElement){
  this.this$01_0 = this$0;
  Escalator$AbstractRowContainer.call(this, this$0, headElement);
}

defineClass(154, 153, {});
_.getDomRowCount = function getDomRowCount(){
  return this.root.childNodes.length;
}
;
_.getTrByVisualIndex = function getTrByVisualIndex(index_0){
  return $getTrByVisualIndex(this, index_0);
}
;
_.paintInsertRows = function paintInsertRows(visualIndex, numberOfRows){
  $paintInsertStaticRows(this, visualIndex, numberOfRows);
}
;
_.paintRemoveRows = function paintRemoveRows(index_0, numberOfRows){
  $paintRemoveRows(this, index_0, numberOfRows);
}
;
_.reapplyDefaultRowHeights = function reapplyDefaultRowHeights(){
  var tr;
  if (this.root.childNodes.length == 0) {
    return;
  }
  tr = this.root.rows[0];
  while (tr) {
    $reapplyRowHeight(tr, this.defaultRowHeight);
    tr = $getNextSiblingElement(($clinit_DOMImpl() , tr));
  }
  $recalculateSectionHeight(this);
}
;
_.recalculateSectionHeight = function recalculateSectionHeight(){
  $recalculateSectionHeight(this);
}
;
_.refreshCells = function refreshCells(logicalRowRange, colRange){
  var row, tr;
  $assertArgumentsAreValidAndWithinRange(this, logicalRowRange.start_0, logicalRowRange.end - logicalRowRange.start_0);
  if (!this.this$01_0.attached) {
    return;
  }
  if ($hasColumnAndRowData(this.this$01_0)) {
    for (row = logicalRowRange.start_0; row < logicalRowRange.end; row++) {
      tr = $getTrByVisualIndex(this, row);
      $refreshRow(this, tr, row, colRange);
    }
  }
}
;
_.rowCanBeFrozen = function rowCanBeFrozen(tr){
  return true;
}
;
_.heightOfSection = 0;
var Lcom_vaadin_client_widgets_Escalator$AbstractStaticRowContainer_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/AbstractStaticRowContainer', 154);
function $convertToVisual(this$static, logicalRange){
  var currentTopRowIndex, insideRange, maxEscalatorRowCapacity, maxEscalatorRows, partitions;
  if (logicalRange.start_0 >= logicalRange.end) {
    return logicalRange;
  }
   else if (this$static.visualRowOrder.size_0 == 0) {
    return withLength(0, 0);
  }
  maxEscalatorRows = (maxEscalatorRowCapacity = round_int($wnd.Math.ceil($getHeightOfSection(this$static) / this$static.defaultRowHeight)) + 1 , 0 > maxEscalatorRowCapacity?0:maxEscalatorRowCapacity);
  currentTopRowIndex = $getLogicalRowIndex(this$static, castToJso($getFirst(this$static.visualRowOrder)));
  partitions = $partitionWith(logicalRange, withLength(currentTopRowIndex, maxEscalatorRows));
  insideRange = partitions[1];
  return -currentTopRowIndex == 0?insideRange:new Range_0(insideRange.start_0 + -currentTopRowIndex, insideRange.end + -currentTopRowIndex);
}

function $fillAndPopulateEscalatorRowsIfNeeded(this$static, index_0, numberOfRows){
  var addedRows, escalatorRowsNeeded, escalatorRowsStillFit, i_0, maxEscalatorRowCapacity, tr, y_0;
  escalatorRowsStillFit = (maxEscalatorRowCapacity = round_int($wnd.Math.ceil($getHeightOfSection(this$static) / this$static.defaultRowHeight)) + 1 , (0 > maxEscalatorRowCapacity?0:maxEscalatorRowCapacity) - (this$static.root.childNodes.length - ($clinit_Collections() , (new Collections$UnmodifiableCollection(new AbstractMap$2(this$static.spacerContainer.rowIndexToSpacer))).coll.size_1())));
  escalatorRowsNeeded = numberOfRows < escalatorRowsStillFit?numberOfRows:escalatorRowsStillFit;
  if (escalatorRowsNeeded > 0) {
    addedRows = $paintInsertStaticRows(this$static, index_0, escalatorRowsNeeded);
    $addAll_0(this$static.visualRowOrder, index_0, addedRows);
    y_0 = index_0 * this$static.defaultRowHeight + $getSpacerHeightsSumUntilIndex(this$static.spacerContainer, index_0);
    for (i_0 = index_0; i_0 < this$static.visualRowOrder.size_0; i_0++) {
      i_0 - index_0 < addedRows.array.length?(tr = (checkCriticalElementIndex(i_0 - index_0, addedRows.array.length) , castToJso(addedRows.array[i_0 - index_0]))):(tr = castToJso($get_5(this$static.visualRowOrder, i_0)));
      $set_4(this$static.this$01_1.positions, tr, 0, y_0);
      y_0 += this$static.defaultRowHeight;
      y_0 += $getSpacerHeight(this$static.spacerContainer, i_0);
    }
    return addedRows;
  }
   else {
    return null , EMPTY_LIST;
  }
}

function $getDomRowCount(this$static){
  return this$static.root.childNodes.length - ($clinit_Collections() , (new Collections$UnmodifiableCollection(new AbstractMap$2(this$static.spacerContainer.rowIndexToSpacer))).coll.size_1());
}

function $getHeightOfSection(this$static){
  var footerHeight, headerHeight, heightOfSection, tableHeight;
  tableHeight = (this$static.this$01.tableWrapper.offsetHeight || 0) | 0;
  footerHeight = $wnd.Math.max(0, this$static.this$01.footer.heightOfSection);
  headerHeight = $wnd.Math.max(0, this$static.this$01.header_0.heightOfSection);
  heightOfSection = tableHeight - footerHeight - headerHeight;
  return $wnd.Math.max(0, heightOfSection);
}

function $getLogicalRowIndex(this$static, tr){
  var internalIndex;
  internalIndex = $indexOf_2(this$static.visualRowOrder, tr);
  return this$static.topRowLogicalIndex + internalIndex;
}

function $getMaxEscalatorRowCapacity(this$static){
  var maxEscalatorRowCapacity;
  maxEscalatorRowCapacity = round_int($wnd.Math.ceil($getHeightOfSection(this$static) / this$static.defaultRowHeight)) + 1;
  return 0 > maxEscalatorRowCapacity?0:maxEscalatorRowCapacity;
}

function $getRowElement(this$static, index_0){
  var visualIndex;
  if (index_0 < 0 || index_0 >= this$static.rows_0) {
    throw toJs(new IndexOutOfBoundsException_0('No such logical index: ' + index_0));
  }
  visualIndex = index_0 - $getLogicalRowIndex(this$static, castToJso($getFirst(this$static.visualRowOrder)));
  if (visualIndex >= 0 && visualIndex < this$static.visualRowOrder.size_0) {
    return $getTrByVisualIndex_0(this$static, visualIndex);
  }
   else {
    throw toJs(new IllegalStateException_0('Row with logical index ' + index_0 + ' is currently not available in the DOM'));
  }
}

function $getRowHeightsSumBetweenPx(this$static, y1, y2){
  var spacerPx, viewportPx;
  viewportPx = y2 - y1;
  spacerPx = $getSpacerHeightsSumBetweenPx(this$static.spacerContainer, y1, ($clinit_Escalator$SpacerInclusionStrategy() , PARTIAL), y2, PARTIAL);
  return viewportPx - spacerPx;
}

function $getRowTop_0(this$static, logicalIndex){
  var top_0;
  top_0 = $getSpacerHeightsSumUntilIndex(this$static.spacerContainer, logicalIndex);
  return top_0 + logicalIndex * this$static.defaultRowHeight;
}

function $getRowWithFocus(this$static){
  var e, focusedElement, rowContainingFocus;
  rowContainingFocus = null;
  focusedElement = getFocusedElement();
  if (!!focusedElement && $isOrHasChild(this$static.root, focusedElement)) {
    e = focusedElement;
    while (!!e && e != this$static.root) {
      !!e && equalsIgnoreCase('tr', ($clinit_DOMImpl() , impl_0).getTagName(e)) && (rowContainingFocus = e);
      e = $getParentElement_0(($clinit_DOMImpl() , e));
    }
  }
  return rowContainingFocus;
}

function $getTrByVisualIndex_0(this$static, index_0){
  if (index_0 >= 0 && index_0 < this$static.visualRowOrder.size_0) {
    return castToJso($get_5(this$static.visualRowOrder, index_0));
  }
   else {
    throw toJs(new IndexOutOfBoundsException_0('No such visual index: ' + index_0));
  }
}

function $getVisibleRowsAfter(this$static, logicalRow){
  var allRowsAreInView, fromIndex, noRowsAreInView, sublist, toIndex, visibleRowLogicalRange;
  visibleRowLogicalRange = $getVisibleRowRange(this$static.this$01);
  allRowsAreInView = logicalRow < visibleRowLogicalRange.start_0;
  noRowsAreInView = logicalRow >= visibleRowLogicalRange.end - 1;
  if (allRowsAreInView) {
    return unmodifiableList(this$static.visualRowOrder);
  }
   else if (noRowsAreInView) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
   else {
    fromIndex = logicalRow - visibleRowLogicalRange.start_0 + 1;
    toIndex = visibleRowLogicalRange.end - visibleRowLogicalRange.start_0;
    sublist = new AbstractList$SubList(this$static.visualRowOrder, fromIndex, toIndex);
    return $clinit_Collections() , new Collections$UnmodifiableList(sublist);
  }
}

function $moveAndUpdateEscalatorRows(this$static, visualSourceRange, visualTargetIndex, logicalTargetIndex){
  var adjustedVisualTargetIndex, i_0, iter, logicalIndex, newRowTop, removedRows, top_0, tr;
  if (visualSourceRange.start_0 >= visualSourceRange.end) {
    return;
  }
  visualSourceRange.start_0 < visualTargetIndex?(adjustedVisualTargetIndex = visualTargetIndex - (visualSourceRange.end - visualSourceRange.start_0)):(adjustedVisualTargetIndex = visualTargetIndex);
  if (visualSourceRange.start_0 != adjustedVisualTargetIndex) {
    removedRows = new ArrayList_0(visualSourceRange.end - visualSourceRange.start_0);
    for (i_0 = 0; i_0 < visualSourceRange.end - visualSourceRange.start_0; i_0++) {
      tr = castToJso($remove_9(this$static.visualRowOrder, visualSourceRange.start_0));
      removedRows.array[removedRows.array.length] = tr;
    }
    $addAll_0(this$static.visualRowOrder, adjustedVisualTargetIndex, removedRows);
  }
  iter = $listIterator(this$static.visualRowOrder, adjustedVisualTargetIndex);
  for (logicalIndex = logicalTargetIndex; logicalIndex < logicalTargetIndex + (visualSourceRange.end - visualSourceRange.start_0); logicalIndex++) {
    tr = castToJso($next_5(iter));
    $refreshRow(this$static, tr, logicalIndex, withLength(0, this$static.this$01_1.columnConfiguration.columns.array.length));
  }
  newRowTop = (top_0 = $getSpacerHeightsSumUntilIndex(this$static.spacerContainer, logicalTargetIndex) , top_0 + logicalTargetIndex * this$static.defaultRowHeight);
  iter = $listIterator(this$static.visualRowOrder, adjustedVisualTargetIndex);
  for (i_0 = 0; i_0 < visualSourceRange.end - visualSourceRange.start_0; i_0++) {
    tr = castToJso($next_5(iter));
    $set_4(this$static.this$01_1.positions, tr, 0, newRowTop);
    newRowTop += this$static.defaultRowHeight;
    newRowTop += $getSpacerHeight(this$static.spacerContainer, logicalTargetIndex + i_0);
  }
}

function $moveViewportAndContent(this$static, yDelta){
  var defaultRowHeight, newTop, rowIndexDelta, rowPxDelta, spacer, spacer$iterator, spacers, tr, tr$iterator;
  if (yDelta == 0) {
    return;
  }
  newTop = this$static.this$01.tBodyScrollTop + yDelta;
  $setScrollPos(this$static.this$01.verticalScrollbar, newTop);
  defaultRowHeight = this$static.defaultRowHeight;
  rowPxDelta = yDelta - yDelta % defaultRowHeight;
  rowIndexDelta = round_int(yDelta / defaultRowHeight);
  $clinit_WidgetUtil();
  if ((rowPxDelta <= 0?0 - rowPxDelta:rowPxDelta) > $intern_45) {
    spacers = $getSpacersAfterPx(this$static.spacerContainer, this$static.this$01.tBodyScrollTop, ($clinit_Escalator$SpacerInclusionStrategy() , PARTIAL));
    for (spacer$iterator = spacers.iterator_0(); spacer$iterator.hasNext_0();) {
      spacer = castTo(spacer$iterator.next_1(), 23);
      $setPosition_0(spacer, $getLeft(spacer.this$11.this$01.positions, spacer.root), $getTop(spacer.this$11.this$01.positions, spacer.root) + rowPxDelta);
      $setRowIndex(spacer, spacer.rowIndex + rowIndexDelta);
    }
    for (tr$iterator = $listIterator(this$static.visualRowOrder, 0); tr$iterator.currentNode != tr$iterator.this$01.tail;) {
      tr = castToJso($next_5(tr$iterator));
      $setRowPosition(this$static, tr, $getTop(this$static.this$01_1.positions, tr) + rowPxDelta);
    }
  }
  $setBodyScrollPosition(this$static, this$static.this$01.tBodyScrollLeft, newTop);
}

function $paintRemoveRowsAtBottom(this$static, removedLogicalInside, removedVisualInside){
  var firstUpdatedIndex, i_0, iterator, logicalTargetIndex, rowTop, spacer, tr;
  logicalTargetIndex = $getLogicalRowIndex(this$static, castToJso($getFirst(this$static.visualRowOrder))) - (removedVisualInside.end - removedVisualInside.start_0);
  $moveAndUpdateEscalatorRows(this$static, removedVisualInside, 0, logicalTargetIndex);
  firstUpdatedIndex = removedVisualInside.end;
  iterator = $listIterator(this$static.visualRowOrder, firstUpdatedIndex);
  rowTop = $getRowTop_0(this$static, removedLogicalInside.start_0);
  i_0 = 0;
  while (iterator.currentNode != iterator.this$01.tail) {
    tr = castToJso($next_5(iterator));
    $set_4(this$static.this$01_1.positions, tr, 0, rowTop);
    rowTop += this$static.defaultRowHeight;
    rowTop += (spacer = $getSpacer(this$static.spacerContainer, firstUpdatedIndex + i_0++) , spacer?spacer.height_0:0);
  }
}

function $paintRemoveRowsAtMiddle(this$static, removedLogicalInside, removedVisualInside){
  var escalatorRowCount, i_0, iterator, logicalTargetIndex, rowTop, spacer, tr;
  escalatorRowCount = this$static.visualRowOrder.size_0;
  logicalTargetIndex = $getLogicalRowIndex(this$static, castToJso($getLast(this$static.visualRowOrder))) - (removedVisualInside.end - removedVisualInside.start_0 - 1);
  $moveAndUpdateEscalatorRows(this$static, removedVisualInside, escalatorRowCount, logicalTargetIndex);
  iterator = $listIterator(this$static.visualRowOrder, removedVisualInside.start_0);
  rowTop = $getRowTop_0(this$static, removedLogicalInside.start_0);
  for (i_0 = removedVisualInside.start_0; i_0 < escalatorRowCount - (removedVisualInside.end - removedVisualInside.start_0); i_0++) {
    tr = castToJso($next_5(iterator));
    $set_4(this$static.this$01_1.positions, tr, 0, rowTop);
    rowTop += this$static.defaultRowHeight;
    rowTop += (spacer = $getSpacer(this$static.spacerContainer, i_0 + removedLogicalInside.start_0) , spacer?spacer.height_0:0);
  }
}

function $setBodyScrollPosition(this$static, scrollLeft, scrollTop){
  this$static.this$01.tBodyScrollLeft = scrollLeft;
  this$static.this$01.tBodyScrollTop = scrollTop;
  this$static.this$01.position_0.set_0(this$static.this$01.bodyElem, -this$static.this$01.tBodyScrollLeft, -this$static.this$01.tBodyScrollTop);
  this$static.this$01.position_0.set_0(this$static.this$01.spacerDecoContainer, 0, -this$static.this$01.tBodyScrollTop);
}

function $setSpacer(this$static, rowIndex, height){
  $setSpacer_0(this$static.spacerContainer, rowIndex, height);
}

function $setSpacerUpdater(this$static, spacerUpdater){
  $setSpacerUpdater_0(this$static.spacerContainer, spacerUpdater);
}

function $setStylePrimaryName_4(this$static, primaryStyleName){
  $setStylePrimaryName_3(this$static, primaryStyleName);
  setStylePrimaryName(this$static.root, primaryStyleName + '-body');
  $setStylePrimaryName_7(this$static.spacerContainer, primaryStyleName);
}

function $setTopRowLogicalIndex(this$static, topRowLogicalIndex){
  $clinit_Level();
  loggingIsEnabled() && $fine($ensureLogger(getLogManager(), 'Escalator.BodyRowContainer'), 'topRowLogicalIndex: ' + this$static.topRowLogicalIndex + ' -> ' + topRowLogicalIndex);
  this$static.topRowLogicalIndex = topRowLogicalIndex;
}

function $shiftRowPositions(this$static, row, diff){
  var tr, tr$iterator;
  for (tr$iterator = $getVisibleRowsAfter(this$static, row).iterator_0(); tr$iterator.hasNext_0();) {
    tr = castToJso(tr$iterator.next_1());
    $setRowPosition(this$static, tr, $getTop(this$static.this$01_1.positions, tr) + diff);
  }
}

function $sortDomElements(this$static){
  var entry, focusedRow, i_0, i0, insertFirst, orderedBodyRows, outerIter, spacer, spacers, tr, unmovedSpacer, unmovedSpacer$iterator;
  focusedRow = $getRowWithFocus(this$static);
  orderedBodyRows = new ArrayList_1(this$static.visualRowOrder);
  spacers = new HashMap_1(this$static.this$01.body_0.spacerContainer.rowIndexToSpacer);
  for (i0 = -1; i0 < this$static.visualRowOrder.size_0; i0++) {
    spacer = castTo($remove_6(spacers, valueOf(this$static.topRowLogicalIndex + i0)), 23);
    if (spacer) {
      $add_5(orderedBodyRows, i0 + 1, spacer.root);
      spacer.root.style['display'] = '';
      spacer.deco.style['display'] = '';
    }
  }
  for (unmovedSpacer$iterator = (outerIter = (new AbstractMap$2(spacers)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); unmovedSpacer$iterator.val$outerIter2.hasNext_0();) {
    unmovedSpacer = (entry = castTo(unmovedSpacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    unmovedSpacer.root.style['display'] = ($clinit_Style$Display() , 'none');
    unmovedSpacer.deco.style['display'] = 'none';
  }
  insertFirst = !focusedRow;
  i_0 = new AbstractList$ListIteratorImpl(orderedBodyRows, orderedBodyRows.array.length);
  while (i_0.i > 0) {
    tr = (checkCriticalElement(i_0.i > 0) , castToJso(i_0.this$01.get_0(i_0.last_0 = --i_0.i)));
    tr == focusedRow?(insertFirst = true):insertFirst?$insertFirst(this$static.root, tr):$insertAfter(this$static.root, tr, focusedRow);
  }
}

function $updateEscalatorRowsOnScroll(this$static){
  var aRowWasLeftBehind, end, logicalRowIndex, maxLogicalIndex, naiveNewLogicalIndex, nextRowBottomOffset, originalRowsToMove, rowPx, rowPx0, rowsToMove, rowsWereMoved, scrollTop, start_0, strayRow, targetVisualIndex, topElementPosition, topLogicalIndex, topSpacer, viewportOffset;
  if (this$static.visualRowOrder.size_0 == 0) {
    return;
  }
  rowsWereMoved = false;
  topSpacer = $getSpacer(this$static.spacerContainer, this$static.topRowLogicalIndex - 1);
  if (topSpacer) {
    topElementPosition = $getTop(topSpacer.this$11.this$01.positions, topSpacer.root);
    nextRowBottomOffset = topSpacer.height_0 + this$static.defaultRowHeight;
  }
   else {
    topElementPosition = $getRowTop(this$static, castToJso($getFirst(this$static.visualRowOrder)));
    nextRowBottomOffset = this$static.defaultRowHeight;
  }
  scrollTop = this$static.this$01.tBodyScrollTop;
  viewportOffset = topElementPosition - scrollTop;
  if (viewportOffset > 0) {
    rowPx0 = $getRowHeightsSumBetweenPx(this$static, scrollTop, topElementPosition);
    originalRowsToMove = round_int($wnd.Math.ceil(rowPx0 / this$static.defaultRowHeight));
    rowsToMove = min_0(originalRowsToMove, this$static.visualRowOrder.size_0);
    end = this$static.visualRowOrder.size_0;
    start_0 = end - rowsToMove;
    logicalRowIndex = (rowPx = scrollTop - $getSpacerHeightsSumUntilPx(this$static.spacerContainer, scrollTop) , round_int(rowPx / this$static.defaultRowHeight));
    $moveAndUpdateEscalatorRows(this$static, new Range_0(start_0, end), 0, logicalRowIndex);
    $clinit_Level();
    loggingIsEnabled() && $fine($ensureLogger(getLogManager(), 'Escalator.BodyRowContainer'), 'topRowLogicalIndex: ' + this$static.topRowLogicalIndex + ' -> ' + logicalRowIndex);
    this$static.topRowLogicalIndex = logicalRowIndex;
    rowsWereMoved = true;
  }
   else if (viewportOffset + nextRowBottomOffset <= 0) {
    rowPx0 = $getRowHeightsSumBetweenPx(this$static, topElementPosition, scrollTop);
    originalRowsToMove = round_int(rowPx0 / this$static.defaultRowHeight);
    rowsToMove = min_0(originalRowsToMove, this$static.visualRowOrder.size_0);
    rowsToMove < this$static.visualRowOrder.size_0?(logicalRowIndex = $getLogicalRowIndex(this$static, castToJso($getLast(this$static.visualRowOrder))) + 1):(logicalRowIndex = (rowPx = scrollTop - $getSpacerHeightsSumUntilPx(this$static.spacerContainer, scrollTop) , round_int(rowPx / this$static.defaultRowHeight)));
    targetVisualIndex = this$static.visualRowOrder.size_0;
    aRowWasLeftBehind = false;
    if (logicalRowIndex + rowsToMove > this$static.rows_0) {
      --rowsToMove;
      aRowWasLeftBehind = true;
    }
    rowsToMove = max_0(0, min_0(rowsToMove, this$static.rows_0 - logicalRowIndex));
    $moveAndUpdateEscalatorRows(this$static, new Range_0(0, rowsToMove), targetVisualIndex, logicalRowIndex);
    if (aRowWasLeftBehind) {
      strayRow = new Range_0(0, 1);
      topLogicalIndex = this$static.rows_0 - this$static.visualRowOrder.size_0;
      $moveAndUpdateEscalatorRows(this$static, strayRow, 0, topLogicalIndex);
    }
    naiveNewLogicalIndex = this$static.topRowLogicalIndex + originalRowsToMove;
    maxLogicalIndex = this$static.rows_0 - this$static.visualRowOrder.size_0;
    $clinit_Level();
    loggingIsEnabled() && $fine($ensureLogger(getLogManager(), 'Escalator.BodyRowContainer'), 'topRowLogicalIndex: ' + this$static.topRowLogicalIndex + ' -> ' + (naiveNewLogicalIndex < maxLogicalIndex?naiveNewLogicalIndex:maxLogicalIndex));
    this$static.topRowLogicalIndex = naiveNewLogicalIndex < maxLogicalIndex?naiveNewLogicalIndex:maxLogicalIndex;
    rowsWereMoved = true;
  }
  if (rowsWereMoved) {
    $fireRowVisibilityChangeEvent(this$static.this$01);
    $reschedule(this$static.domSorter);
  }
}

function $updateTopRowLogicalIndex(this$static, diff){
  $setTopRowLogicalIndex(this$static, this$static.topRowLogicalIndex + diff);
}

function $verifyEscalatorCount(this$static){
  var addedRows, contentWillFit, firstRowMinTop, firstRowTop, i_0, index_0, iter, last, maxEscalatorRowCapacity, maxEscalatorRows, neededEscalatorRows, neededEscalatorRowsDiff, newLogicalIndex, nextLastLogicalIndex, oldScrollTop, parent_0;
  if (!this$static.this$01.attached) {
    return;
  }
  maxEscalatorRows = (maxEscalatorRowCapacity = round_int($wnd.Math.ceil($getHeightOfSection(this$static) / this$static.defaultRowHeight)) + 1 , 0 > maxEscalatorRowCapacity?0:maxEscalatorRowCapacity);
  neededEscalatorRows = min_0(maxEscalatorRows, this$static.this$01.body_0.rows_0);
  neededEscalatorRowsDiff = neededEscalatorRows - this$static.visualRowOrder.size_0;
  if (neededEscalatorRowsDiff > 0) {
    index_0 = this$static.visualRowOrder.size_0;
    this$static.visualRowOrder.size_0 == 0?(nextLastLogicalIndex = 0):(nextLastLogicalIndex = $getLogicalRowIndex(this$static, castToJso($getLast(this$static.visualRowOrder))) + 1);
    contentWillFit = nextLastLogicalIndex < this$static.rows_0 - neededEscalatorRowsDiff;
    if (contentWillFit) {
      addedRows = $fillAndPopulateEscalatorRowsIfNeeded(this$static, index_0, neededEscalatorRowsDiff);
      $moveAndUpdateEscalatorRows(this$static, withLength(index_0, addedRows.size_1()), index_0, nextLastLogicalIndex);
    }
     else {
      oldScrollTop = this$static.this$01.verticalScrollbar.scrollPos;
      $setScrollTop_0(this$static.this$01, 0);
      $onScroll(this$static.this$01.scroller);
      $fillAndPopulateEscalatorRowsIfNeeded(this$static, index_0, neededEscalatorRowsDiff);
      $setScrollTop_0(this$static.this$01, oldScrollTop);
      $onScroll(this$static.this$01.scroller);
    }
  }
   else if (neededEscalatorRowsDiff < 0) {
    iter = $listIterator(this$static.visualRowOrder, this$static.visualRowOrder.size_0);
    for (i_0 = 0; i_0 < -neededEscalatorRowsDiff; i_0++) {
      last = castToJso($previous(iter));
      parent_0 = $getParentElement_0(($clinit_DOMImpl() , last));
      !!parent_0 && parent_0.removeChild(last);
      $remove_20(iter);
    }
    if (this$static.visualRowOrder.size_0 != 0) {
      firstRowTop = $getRowTop(this$static, castToJso($getFirst(this$static.visualRowOrder)));
      firstRowMinTop = this$static.this$01.tBodyScrollTop - this$static.defaultRowHeight;
      if (firstRowTop < firstRowMinTop) {
        newLogicalIndex = $getLogicalRowIndex(this$static, castToJso($getLast(this$static.visualRowOrder))) + 1;
        $moveAndUpdateEscalatorRows(this$static, new Range_0(0, 1), this$static.visualRowOrder.size_0, newLogicalIndex);
      }
    }
  }
  neededEscalatorRowsDiff != 0 && $fireRowVisibilityChangeEvent(this$static.this$01);
}

function Escalator$BodyRowContainerImpl(this$0, bodyElement){
  this.this$01 = this$0;
  Escalator$AbstractRowContainer.call(this, this$0, bodyElement);
  this.visualRowOrder = new LinkedList;
  this.domSorter = new Escalator$BodyRowContainerImpl$DeferredDomSorter(this);
  this.spacerContainer = new Escalator$SpacerContainer(this.this$01);
}

defineClass(305, 153, {}, Escalator$BodyRowContainerImpl);
_.getCell = function getCell_0(element){
  var cell, internalIndex, rowElement;
  cell = $getCell(this, element);
  if (!cell) {
    return null;
  }
  rowElement = $getParentElement(cell.element);
  return new Cell((internalIndex = $indexOf_2(this.visualRowOrder, rowElement) , this.topRowLogicalIndex + internalIndex), cell.column, cell.element);
}
;
_.getCellElementTagName = function getCellElementTagName(){
  return 'td';
}
;
_.getDomRowCount = function getDomRowCount_0(){
  return $getDomRowCount(this);
}
;
_.getLogicalRowIndex = function getLogicalRowIndex_0(tr){
  return $getLogicalRowIndex(this, tr);
}
;
_.getRowElement = function getRowElement_0(index_0){
  return $getRowElement(this, index_0);
}
;
_.getTrByVisualIndex = function getTrByVisualIndex_0(index_0){
  return $getTrByVisualIndex_0(this, index_0);
}
;
_.paintInsertRows = function paintInsertRows_0(index_0, numberOfRows){
  var addedRows, addedRowsAboveCurrentViewport, addedRowsBelowCurrentViewport, e, end, i_0, logger, logicalRowIndexCursor, rowTop, rowsStillNeeded, start_0, tr, unupdatedLogicalStart, unupdatedVisual, visualOffset, visualTargetIndex, yDelta;
  if (numberOfRows == 0) {
    return;
  }
  $shiftSpacersByRows(this.spacerContainer, index_0, numberOfRows);
  addedRows = $fillAndPopulateEscalatorRowsIfNeeded(this, index_0, numberOfRows);
  $recalculateScrollbarsForVirtualViewport(this.this$01.scroller);
  addedRowsAboveCurrentViewport = index_0 * this.defaultRowHeight < this.this$01.verticalScrollbar.scrollPos;
  addedRowsBelowCurrentViewport = index_0 * this.defaultRowHeight > this.this$01.verticalScrollbar.scrollPos + $getHeightOfSection(this);
  if (addedRowsAboveCurrentViewport) {
    yDelta = numberOfRows * this.defaultRowHeight;
    $moveViewportAndContent(this, yDelta);
    $setTopRowLogicalIndex(this, this.topRowLogicalIndex + numberOfRows);
  }
   else if (addedRowsBelowCurrentViewport)
  ;
  else {
    unupdatedLogicalStart = index_0 + addedRows.size_1();
    visualOffset = $getLogicalRowIndex(this, castToJso($getFirst(this.visualRowOrder)));
    rowsStillNeeded = numberOfRows - addedRows.size_1();
    if (rowsStillNeeded > 0) {
      unupdatedVisual = $convertToVisual(this, withLength(unupdatedLogicalStart, rowsStillNeeded));
      end = this.root.childNodes.length - ($clinit_Collections() , (new Collections$UnmodifiableCollection(new AbstractMap$2(this.spacerContainer.rowIndexToSpacer))).coll.size_1());
      start_0 = end - (unupdatedVisual.end - unupdatedVisual.start_0);
      visualTargetIndex = unupdatedLogicalStart - visualOffset;
      $moveAndUpdateEscalatorRows(this, new Range_0(start_0, end), visualTargetIndex, unupdatedLogicalStart);
      rowTop = (unupdatedLogicalStart + (end - start_0)) * this.defaultRowHeight;
      try {
        i_0 = $listIterator(this.visualRowOrder, visualTargetIndex + (end - start_0));
        logicalRowIndexCursor = unupdatedLogicalStart;
        while (i_0.currentNode != i_0.this$01.tail) {
          rowTop += $getSpacerHeight(this.spacerContainer, logicalRowIndexCursor++);
          tr = castToJso($next_5(i_0));
          $set_4(this.this$01_1.positions, tr, 0, rowTop);
          rowTop += this.defaultRowHeight;
        }
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          e = $e0;
          logger = getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Escalator_2_classLit) , Lcom_vaadin_client_widgets_Escalator_2_classLit.typeName));
          $actuallyLog(logger, ($clinit_Level() , WARNING), 'Ignored out-of-bounds row element access', null);
          $warning(logger, 'Escalator state: start=' + start_0 + ', end=' + end + ', visualTargetIndex=' + visualTargetIndex + ', visualRowOrder.size()=' + this.visualRowOrder.size_0);
          $warning(logger, $toString_0(e, e.getMessage()));
        }
         else 
          throw toJs($e0);
      }
    }
    $fireRowVisibilityChangeEvent(this.this$01);
    $sortDomElements(this);
  }
}
;
_.paintRemoveRows = function paintRemoveRows_0(index_0, numberOfRows){
  var allEscalatorRows, contentBottom, dirtyRowsStart, escalatorRowCount, escalatorRowsToRemove, firstLogicalRowHeight, firstVisualRowIsRemoved, i_0, i0, i1, left, logicalTargetIndex, newScrollTop, newTop, partitions, removalScrollsToShowFirstLogicalRow, removedAbove, removedLogicalInside, removedRowsRange, removedVisualInside, rowsLeft, rowsScrolled, rowsToUpdateDataOn, start_0, top_0, tr, viewportBottom, viewportRange, visualRefreshRange, y_0, yDelta;
  if (numberOfRows == 0) {
    return;
  }
  viewportRange = $getVisibleRowRange(this.this$01);
  removedRowsRange = withLength(index_0, numberOfRows);
  $paintRemoveSpacers(this.spacerContainer, removedRowsRange);
  partitions = $partitionWith(removedRowsRange, viewportRange);
  removedAbove = partitions[0];
  removedLogicalInside = partitions[1];
  removedVisualInside = $convertToVisual(this, removedLogicalInside);
  firstVisualRowIsRemoved = removedVisualInside.start_0 < removedVisualInside.end && removedVisualInside.start_0 == 0;
  if (removedAbove.start_0 < removedAbove.end || firstVisualRowIsRemoved) {
    yDelta = (removedAbove.end - removedAbove.start_0) * this.defaultRowHeight;
    firstLogicalRowHeight = this.defaultRowHeight;
    removalScrollsToShowFirstLogicalRow = this.this$01.verticalScrollbar.scrollPos - yDelta < firstLogicalRowHeight;
    removedVisualInside.start_0 >= removedVisualInside.end && (!removalScrollsToShowFirstLogicalRow || !firstVisualRowIsRemoved)?$moveViewportAndContent(this, -yDelta):removalScrollsToShowFirstLogicalRow && $moveViewportAndContent(this, -this.this$01.verticalScrollbar.scrollPos);
  }
  if (removedVisualInside.start_0 < removedVisualInside.end) {
    escalatorRowCount = $getDomRowCount(this.this$01.body_0);
    rowsLeft = this.rows_0;
    if (rowsLeft < escalatorRowCount) {
      escalatorRowsToRemove = escalatorRowCount - rowsLeft;
      for (i0 = 0; i0 < escalatorRowsToRemove; i0++) {
        tr = castToJso($remove_9(this.visualRowOrder, removedVisualInside.start_0));
        $paintRemoveRow(this, tr, index_0);
        $remove_5(this.this$01_1.positions, tr);
      }
      escalatorRowCount -= escalatorRowsToRemove;
      $setBodyScrollPosition(this.this$01.body_0, this.this$01.tBodyScrollLeft, 0);
      dirtyRowsStart = removedLogicalInside.start_0;
      y_0 = (top_0 = $getSpacerHeightsSumUntilIndex(this.spacerContainer, dirtyRowsStart) , top_0 + dirtyRowsStart * this.defaultRowHeight);
      for (i1 = dirtyRowsStart; i1 < escalatorRowCount; i1++) {
        tr = castToJso($get_5(this.visualRowOrder, i1));
        $set_4(this.this$01_1.positions, tr, 0, y_0);
        y_0 += this.defaultRowHeight;
        y_0 += $getSpacerHeight(this.spacerContainer, i1);
      }
      rowsToUpdateDataOn = numberOfRows - escalatorRowsToRemove;
      start_0 = 0 > escalatorRowCount - rowsToUpdateDataOn?0:escalatorRowCount - rowsToUpdateDataOn;
      for (i_0 = start_0; i_0 < escalatorRowCount; i_0++) {
        tr = castToJso($get_5(this.visualRowOrder, i_0));
        $refreshRow(this, tr, i_0, withLength(0, this.this$01_1.columnConfiguration.columns.array.length));
      }
    }
     else {
      contentBottom = this.rows_0 * this.defaultRowHeight;
      viewportBottom = this.this$01.tBodyScrollTop + $getHeightOfSection(this);
      if (viewportBottom <= contentBottom) {
        $paintRemoveRowsAtMiddle(this, removedLogicalInside, removedVisualInside);
      }
       else if (removedVisualInside.start_0 <= 0 && 0 < removedVisualInside.end && numberOfRows >= this.visualRowOrder.size_0) {
        left = this.this$01.horizontalScrollbar.scrollPos;
        top_0 = contentBottom - this.visualRowOrder.size_0 * this.defaultRowHeight;
        $setBodyScrollPosition(this, left, top_0);
        allEscalatorRows = withLength(0, this.visualRowOrder.size_0);
        logicalTargetIndex = this.rows_0 - (allEscalatorRows.end - allEscalatorRows.start_0);
        $moveAndUpdateEscalatorRows(this, allEscalatorRows, 0, logicalTargetIndex);
      }
       else if (contentBottom + numberOfRows * this.defaultRowHeight - viewportBottom < this.defaultRowHeight) {
        $paintRemoveRowsAtBottom(this, removedLogicalInside, removedVisualInside);
        $updateTopRowLogicalIndex(this, -(removedLogicalInside.end - removedLogicalInside.start_0));
      }
       else {
        newTop = $getRowTop(this, castToJso($get_5(this.visualRowOrder, removedVisualInside.start_0)));
        for (i0 = 0; i0 < removedVisualInside.end - removedVisualInside.start_0; i0++) {
          tr = castToJso($remove_9(this.visualRowOrder, removedVisualInside.start_0));
          $addLast(this.visualRowOrder, tr);
        }
        for (i_0 = removedVisualInside.start_0; i_0 < escalatorRowCount; i_0++) {
          tr = castToJso($get_5(this.visualRowOrder, i_0));
          $setRowPosition(this, tr, round_int(newTop));
          newTop += this.defaultRowHeight;
          newTop += $getSpacerHeight(this.spacerContainer, i_0 + removedLogicalInside.start_0);
        }
        newScrollTop = contentBottom - $getHeightOfSection(this);
        $setScrollTop_0(this.this$01, newScrollTop);
        $onScroll(this.this$01.scroller);
        $moveAndUpdateEscalatorRows(this, new Range_0(escalatorRowCount - 1, escalatorRowCount - 1 + 1), 0, $getLogicalRowIndex(this, castToJso($getFirst(this.visualRowOrder))) - 1);
        $setTopRowLogicalIndex(this, this.topRowLogicalIndex + -1);
        rowsScrolled = round_int($wnd.Math.ceil((viewportBottom - contentBottom) / this.defaultRowHeight));
        start_0 = escalatorRowCount - (removedVisualInside.end - removedVisualInside.start_0 - rowsScrolled);
        visualRefreshRange = new Range_0(start_0, escalatorRowCount);
        logicalTargetIndex = $getLogicalRowIndex(this, castToJso($getFirst(this.visualRowOrder))) + start_0;
        $moveAndUpdateEscalatorRows(this, visualRefreshRange, start_0, logicalTargetIndex);
      }
    }
    $fireRowVisibilityChangeEvent(this.this$01);
    $sortDomElements(this);
  }
  $updateTopRowLogicalIndex(this, -(removedAbove.end - removedAbove.start_0));
  $recalculateScrollbarsForVirtualViewport(this.this$01.scroller);
}
;
_.reapplyDefaultRowHeights = function reapplyDefaultRowHeights_0(){
  var i_0, logicalIndex, logicalLogical, scrollRatio, tr;
  if (this.visualRowOrder.size_0 == 0) {
    return;
  }
  for (i_0 = 0; i_0 < this.visualRowOrder.size_0; i_0++) {
    tr = castToJso($get_5(this.visualRowOrder, i_0));
    $reapplyRowHeight(tr, this.defaultRowHeight);
    logicalIndex = this.topRowLogicalIndex + i_0;
    $setRowPosition(this, tr, logicalIndex * this.defaultRowHeight);
  }
  scrollRatio = this.this$01.verticalScrollbar.scrollPos / parseCssDimensionToPixels($getProperty(this.this$01.verticalScrollbar.scrollSizeElement.style, 'height'));
  $recalculateScrollbarsForVirtualViewport(this.this$01.scroller);
  $setScrollPos(this.this$01.verticalScrollbar, round_int(this.defaultRowHeight * this.rows_0 * scrollRatio));
  $setBodyScrollPosition(this, this.this$01.horizontalScrollbar.scrollPos, this.this$01.verticalScrollbar.scrollPos);
  $onScroll(this.this$01.scroller);
  $verifyEscalatorCount(this);
  logicalLogical = round_int($getRowTop(this, castToJso($getFirst(this.visualRowOrder))) / this.defaultRowHeight);
  $clinit_Level();
  loggingIsEnabled() && $fine($ensureLogger(getLogManager(), 'Escalator.BodyRowContainer'), 'topRowLogicalIndex: ' + this.topRowLogicalIndex + ' -> ' + logicalLogical);
  this.topRowLogicalIndex = logicalLogical;
}
;
_.recalculateSectionHeight = function recalculateSectionHeight_0(){
}
;
_.refreshCells = function refreshCells_0(logicalRowRange, colRange){
  var firstLogicalRowIndex, rowNumber, visualRange;
  visualRange = $convertToVisual(this, logicalRowRange);
  if (visualRange.start_0 < visualRange.end) {
    firstLogicalRowIndex = $getLogicalRowIndex(this, castToJso($getFirst(this.visualRowOrder)));
    for (rowNumber = visualRange.start_0; rowNumber < visualRange.end; rowNumber++) {
      $refreshRow(this, castToJso($get_5(this.visualRowOrder, rowNumber)), firstLogicalRowIndex + rowNumber, colRange);
    }
  }
}
;
_.rowCanBeFrozen = function rowCanBeFrozen_0(tr){
  return $advanceToFind(this.visualRowOrder, tr, false);
}
;
_.topRowLogicalIndex = 0;
var Lcom_vaadin_client_widgets_Escalator$BodyRowContainerImpl_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/BodyRowContainerImpl', 305);
function $reschedule(this$static){
  $resetConditions(this$static);
  this$static.animationHandle = (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.frameCounter, null);
}

function $resetConditions(this$static){
  if (this$static.animationHandle) {
    this$static.animationHandle.cancel();
    this$static.animationHandle = null;
  }
  this$static.startTime = now_1();
  this$static.framesPassed = 0;
}

function $sortIfConditionsMet(this$static){
  var conditionsMet, enoughFramesHavePassed, enoughTimeHasPassed, notTouchActivity;
  enoughFramesHavePassed = this$static.framesPassed >= 3;
  enoughTimeHasPassed = now_1() - this$static.startTime >= 50;
  notTouchActivity = !this$static.this$11.this$01.scroller.touchHandlerBundle.touching;
  conditionsMet = enoughFramesHavePassed && enoughTimeHasPassed && notTouchActivity;
  if (conditionsMet) {
    $resetConditions(this$static);
    $sortDomElements(this$static.this$11);
  }
  return conditionsMet;
}

function Escalator$BodyRowContainerImpl$DeferredDomSorter(this$1){
  this.this$11 = this$1;
  this.frameCounter = new Escalator$BodyRowContainerImpl$DeferredDomSorter$1(this);
}

defineClass(306, 1, {}, Escalator$BodyRowContainerImpl$DeferredDomSorter);
_.framesPassed = 0;
_.startTime = 0;
var Lcom_vaadin_client_widgets_Escalator$BodyRowContainerImpl$DeferredDomSorter_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/BodyRowContainerImpl/DeferredDomSorter', 306);
function Escalator$BodyRowContainerImpl$DeferredDomSorter$1(this$2){
  this.this$21 = this$2;
}

defineClass(312, 1, {}, Escalator$BodyRowContainerImpl$DeferredDomSorter$1);
_.execute = function execute_20(timestamp){
  var domWasSorted;
  ++this.this$21.framesPassed;
  domWasSorted = $sortIfConditionsMet(this.this$21);
  domWasSorted?$removeClassName(this.this$21.this$11.this$01.bodyElem, 'scrolling'):(this.this$21.animationHandle = (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this, null));
}
;
var Lcom_vaadin_client_widgets_Escalator$BodyRowContainerImpl$DeferredDomSorter$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/BodyRowContainerImpl/DeferredDomSorter/1', 312);
function $assertArgumentsAreValidAndWithinRange_0(this$static, numberOfColumns){
  if (numberOfColumns < 1) {
    throw toJs(new IllegalArgumentException("Number of columns can't be less than 1 (was " + numberOfColumns + ')'));
  }
  if (numberOfColumns > this$static.columns.array.length) {
    throw toJs(new IndexOutOfBoundsException_0('The given column range (0..' + numberOfColumns + ') was outside of the current ' + 'number of columns (' + this$static.columns.array.length + ')'));
  }
}

function $calculateRowWidth(this$static){
  return $getCalculatedColumnsWidth(this$static, new Range_0(0, this$static.columns.array.length));
}

function $checkValidColumnIndex(this$static, index_0){
  if (!$contains(withLength(0, this$static.columns.array.length), index_0)) {
    throw toJs(new IllegalArgumentException('The given column index (' + index_0 + ') does not exist'));
  }
}

function $getCalculatedColumnWidths(this$static){
  var i_0;
  if (this$static.widthsArray == null || this$static.widthsArray.length != this$static.columns.array.length) {
    this$static.widthsArray = initUnidimensionalArray(D_classLit, $intern_1, 606, this$static.columns.array.length, 15, 1);
    for (i_0 = 0; i_0 < this$static.columns.array.length; i_0++) {
      this$static.widthsArray[i_0] = $getCalculatedWidth(castTo($get_6(this$static.columns, i_0), 68));
    }
  }
  return this$static.widthsArray;
}

function $getCalculatedColumnsWidth(this$static, columns){
  var columnWidthActual, i_0, sum;
  sum = 0;
  for (i_0 = columns.start_0; i_0 < columns.end; i_0++) {
    columnWidthActual = $getCalculatedWidth(castTo($get_6(this$static.columns, i_0), 68));
    sum += columnWidthActual;
  }
  return sum;
}

function $getColumnWidth_0(this$static, index_0){
  $checkValidColumnIndex(this$static, index_0);
  return castTo($get_6(this$static.columns, index_0), 68).definedWidth;
}

function $getColumnWidthActual(this$static, index_0){
  return $getCalculatedWidth(castTo($get_6(this$static.columns, index_0), 68));
}

function $getMaxCellWidth(this$static, colIndex){
  var bodyWidth, footerWidth, headerWidth, maxWidth;
  headerWidth = $measureMinCellWidth(this$static.this$01.header_0, colIndex, true);
  bodyWidth = $measureMinCellWidth(this$static.this$01.body_0, colIndex, true);
  footerWidth = $measureMinCellWidth(this$static.this$01.footer, colIndex, true);
  maxWidth = $wnd.Math.max(headerWidth, $wnd.Math.max(bodyWidth, footerWidth));
  return maxWidth;
}

function $getMinCellWidth_0(this$static, colIndex){
  var bodyWidth, footerWidth, headerWidth, minWidth;
  headerWidth = $measureMinCellWidth(this$static.this$01.header_0, colIndex, false);
  bodyWidth = $measureMinCellWidth(this$static.this$01.body_0, colIndex, false);
  footerWidth = $measureMinCellWidth(this$static.this$01.footer, colIndex, false);
  minWidth = $wnd.Math.max(headerWidth, $wnd.Math.max(bodyWidth, footerWidth));
  return minWidth;
}

function $insertColumns(this$static, index_0, numberOfColumns){
  var col, colWidths, columnsWereAddedToTheLeftOfViewport, frozen, i_0, i0, insertedColumnsWidth, pixelsToInsertedColumn, scrollbarIsNowNeeded, scrollbarWasNeeded, width_0;
  if (index_0 < 0 || index_0 > this$static.columns.array.length) {
    throw toJs(new IndexOutOfBoundsException_0('The given index(' + index_0 + ') was outside of the current number of columns (0..' + this$static.columns.array.length + ')'));
  }
  if (numberOfColumns < 1) {
    throw toJs(new IllegalArgumentException('Number of columns must be 1 or greater (was ' + numberOfColumns));
  }
  $addCells(this$static.this$01.flyweightRow, index_0, numberOfColumns);
  for (i0 = 0; i0 < numberOfColumns; i0++) {
    $add_5(this$static.columns, index_0, new Escalator$ColumnConfigurationImpl$Column(this$static));
  }
  frozen = index_0 < this$static.frozenColumns;
  frozen && (this$static.frozenColumns += numberOfColumns);
  scrollbarWasNeeded = parseCssDimensionToPixels($getProperty(this$static.this$01.horizontalScrollbar.root.style, 'width')) < parseCssDimensionToPixels($getProperty(this$static.this$01.horizontalScrollbar.scrollSizeElement.style, 'width'));
  $recalculateScrollbarsForVirtualViewport(this$static.this$01.scroller);
  scrollbarIsNowNeeded = parseCssDimensionToPixels($getProperty(this$static.this$01.horizontalScrollbar.root.style, 'width')) < parseCssDimensionToPixels($getProperty(this$static.this$01.horizontalScrollbar.scrollSizeElement.style, 'width'));
  !scrollbarWasNeeded && scrollbarIsNowNeeded && $verifyEscalatorCount(this$static.this$01.body_0);
  $paintInsertColumns(this$static.this$01.header_0, index_0, numberOfColumns, frozen);
  $paintInsertColumns(this$static.this$01.body_0, index_0, numberOfColumns, frozen);
  $paintInsertColumns(this$static.this$01.footer, index_0, numberOfColumns, frozen);
  if (this$static.this$01.header_0.rows_0 > 0 || this$static.this$01.body_0.rows_0 > 0 || this$static.this$01.footer.rows_0 > 0) {
    colWidths = new HashMap;
    width_0 = 100;
    for (i_0 = index_0; i_0 < index_0 + numberOfColumns; i_0++) {
      col = valueOf(i_0);
      $put_3(colWidths.hashCodeMap, col, width_0);
    }
    $setColumnWidths(this$static.this$01.columnConfiguration, colWidths);
  }
  pixelsToInsertedColumn = $getCalculatedColumnsWidth(this$static.this$01.columnConfiguration, withLength(0, index_0));
  columnsWereAddedToTheLeftOfViewport = this$static.this$01.scroller.lastScrollLeft > pixelsToInsertedColumn;
  if (columnsWereAddedToTheLeftOfViewport) {
    insertedColumnsWidth = $getCalculatedColumnsWidth(this$static.this$01.columnConfiguration, withLength(index_0, numberOfColumns));
    $setScrollPos(this$static.this$01.horizontalScrollbar, this$static.this$01.scroller.lastScrollLeft + insertedColumnsWidth);
  }
}

function $reapplyRowWidths_0(container){
  container.rows_0 > 0 && $reapplyRowWidths(container);
}

function $removeColumns(this$static, numberOfColumns){
  $assertArgumentsAreValidAndWithinRange_0(this$static, numberOfColumns);
  $removeColumnsAdjustScrollbar(this$static, numberOfColumns);
  $paintRemoveColumns(this$static.this$01.header_0, numberOfColumns);
  $paintRemoveColumns(this$static.this$01.body_0, numberOfColumns);
  $paintRemoveColumns(this$static.this$01.footer, numberOfColumns);
  $removeCells(this$static.this$01.flyweightRow, numberOfColumns);
  $clear_1(new AbstractList$SubList(this$static.columns, 0, numberOfColumns));
  0 < this$static.frozenColumns && (numberOfColumns < this$static.frozenColumns?(this$static.frozenColumns -= numberOfColumns):(this$static.frozenColumns = 0));
  $recalculateScrollbarsForVirtualViewport(this$static.this$01.scroller);
  $verifyEscalatorCount(this$static.this$01.body_0);
  if (this$static.this$01.columnConfiguration.columns.array.length > 0) {
    $reapplyRowWidths_0(this$static.this$01.header_0);
    $reapplyRowWidths_0(this$static.this$01.body_0);
    $reapplyRowWidths_0(this$static.this$01.footer);
  }
}

function $removeColumnsAdjustScrollbar(this$static, numberOfColumns){
  var adjustedScrollLeft, leftPosOfFirstColumnToRemove, scrollLeft, widthOfColumnsToRemove;
  if (parseCssDimensionToPixels($getProperty(this$static.this$01.horizontalScrollbar.root.style, 'width')) >= parseCssDimensionToPixels($getProperty(this$static.this$01.horizontalScrollbar.scrollSizeElement.style, 'width'))) {
    return;
  }
  leftPosOfFirstColumnToRemove = $getCalculatedColumnsWidth(this$static, new Range_0(0, 0));
  widthOfColumnsToRemove = $getCalculatedColumnsWidth(this$static, withLength(0, numberOfColumns));
  scrollLeft = this$static.this$01.horizontalScrollbar.scrollPos;
  if (scrollLeft <= leftPosOfFirstColumnToRemove) {
    return;
  }
  adjustedScrollLeft = $wnd.Math.max(leftPosOfFirstColumnToRemove, scrollLeft - widthOfColumnsToRemove);
  $setScrollPos(this$static.this$01.horizontalScrollbar, adjustedScrollLeft);
}

function $setColumnWidths(this$static, indexWidthMap){
  var entry, entry$iterator, index_0, width_0;
  if (indexWidthMap.size_1() == 0) {
    return;
  }
  for (entry$iterator = indexWidthMap.entrySet_0().iterator_0(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 8);
    index_0 = castTo(entry.getKey(), 46).value_0;
    width_0 = checkNotNull(castToDouble(entry.getValue_0()));
    $checkValidColumnIndex(this$static, index_0);
    width_0 = ($clinit_WidgetUtil() , roundSize(width_0, false));
    $setWidth_0(castTo($get_6(this$static.columns, index_0), 68), width_0);
  }
  this$static.widthsArray = null;
  $reapplyColumnWidths(this$static.this$01.header_0);
  $reapplyColumnWidths(this$static.this$01.body_0);
  $reapplyColumnWidths(this$static.this$01.footer);
  $recalculateElementSizes(this$static.this$01);
}

function $setFrozenColumnCount(this$static, count){
  var col, firstAffectedCol, firstUnaffectedCol, frozen, oldCount;
  if (count < 0 || count > this$static.columns.array.length) {
    throw toJs(new IllegalArgumentException('count must be between 0 and the current number of columns (' + this$static.columns.array.length + ')'));
  }
  oldCount = this$static.frozenColumns;
  if (count == oldCount) {
    return;
  }
  this$static.frozenColumns = count;
  if ($hasSomethingInDom(this$static.this$01)) {
    frozen = count > oldCount;
    if (frozen) {
      firstAffectedCol = oldCount;
      firstUnaffectedCol = count;
    }
     else {
      firstAffectedCol = count;
      firstUnaffectedCol = oldCount;
    }
    if (oldCount > 0) {
      $toggleFrozenColumnClass(this$static.this$01.header_0, oldCount - 1, false, 'last-frozen');
      $toggleFrozenColumnClass(this$static.this$01.body_0, oldCount - 1, false, 'last-frozen');
      $toggleFrozenColumnClass(this$static.this$01.footer, oldCount - 1, false, 'last-frozen');
    }
    if (count > 0) {
      $toggleFrozenColumnClass(this$static.this$01.header_0, count - 1, true, 'last-frozen');
      $toggleFrozenColumnClass(this$static.this$01.body_0, count - 1, true, 'last-frozen');
      $toggleFrozenColumnClass(this$static.this$01.footer, count - 1, true, 'last-frozen');
    }
    for (col = firstAffectedCol; col < firstUnaffectedCol; col++) {
      $setColumnFrozen(this$static.this$01.header_0, col, frozen);
      $setColumnFrozen(this$static.this$01.body_0, col, frozen);
      $setColumnFrozen(this$static.this$01.footer, col, frozen);
    }
  }
  $recalculateScrollbarsForVirtualViewport(this$static.this$01.scroller);
}

function Escalator$ColumnConfigurationImpl(this$0){
  this.this$01 = this$0;
  this.columns = new ArrayList;
}

defineClass(307, 1, {}, Escalator$ColumnConfigurationImpl);
_.frozenColumns = 0;
_.widthsArray = null;
var Lcom_vaadin_client_widgets_Escalator$ColumnConfigurationImpl_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/ColumnConfigurationImpl', 307);
function $getCalculatedWidth(this$static){
  return this$static.measuringRequested?-1:this$static.calculatedWidth;
}

function $measureAndSetWidthIfNeeded(this$static){
  if (this$static.measuringRequested) {
    this$static.measuringRequested = false;
    $setWidth_0(this$static, this$static.definedWidth);
    return true;
  }
  return false;
}

function $setWidth_0(this$static, px){
  this$static.definedWidth = px;
  px < 0?this$static.this$11.this$01.attached?(this$static.calculatedWidth = $getMaxCellWidth(this$static.this$11, $indexOf_3(this$static.this$11.columns, this$static, 0))):(this$static.measuringRequested = true):(this$static.calculatedWidth = px);
}

function Escalator$ColumnConfigurationImpl$Column(this$1){
  this.this$11 = this$1;
}

defineClass(68, 1, {68:1}, Escalator$ColumnConfigurationImpl$Column);
_.calculatedWidth = 100;
_.definedWidth = -1;
_.measuringRequested = false;
var Lcom_vaadin_client_widgets_Escalator$ColumnConfigurationImpl$Column_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/ColumnConfigurationImpl/Column', 68);
function $getLeft(this$static, e){
  var left;
  left = castToDouble($get_3(this$static.elementLeftPositionMap, e));
  if (left == null) {
    throw toJs(new IllegalArgumentException('Element ' + e + ' was not found in the position bookkeeping'));
  }
  return checkCriticalNotNull(left) , left;
}

function $getTop(this$static, e){
  var top_0;
  top_0 = castToDouble($get_3(this$static.elementTopPositionMap, e));
  if (top_0 == null) {
    throw toJs(new IllegalArgumentException('Element ' + e + ' was not found in the position bookkeeping'));
  }
  return checkCriticalNotNull(top_0) , top_0;
}

function $remove_5(this$static, e){
  $remove_6(this$static.elementTopPositionMap, e);
  $remove_6(this$static.elementLeftPositionMap, e);
}

function $set_4(this$static, e, x_0, y_0){
  this$static.this$01.position_0.set_0(e, x_0, y_0);
  $put_2(this$static.elementTopPositionMap, e, y_0);
  $put_2(this$static.elementLeftPositionMap, e, x_0);
}

function Escalator$ElementPositionBookkeeper(this$0){
  this.this$01 = this$0;
  this.elementTopPositionMap = new HashMap;
  this.elementLeftPositionMap = new HashMap;
}

defineClass(309, 1, {}, Escalator$ElementPositionBookkeeper);
var Lcom_vaadin_client_widgets_Escalator$ElementPositionBookkeeper_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/ElementPositionBookkeeper', 309);
function $setStylePrimaryName_5(this$static, primaryStyleName){
  $setStylePrimaryName_3(this$static, primaryStyleName);
  setStylePrimaryName(this$static.root, primaryStyleName + '-footer');
}

function Escalator$FooterRowContainer(this$0, footElement){
  this.this$01 = this$0;
  Escalator$AbstractStaticRowContainer.call(this, this$0, footElement);
}

defineClass(304, 154, {}, Escalator$FooterRowContainer);
_.getCellElementTagName = function getCellElementTagName_0(){
  return 'td';
}
;
_.sectionHeightCalculated = function sectionHeightCalculated(){
  var footerHeight, headerHeight, horizontalScrollbarNeeded, vscrollHeight;
  headerHeight = $wnd.Math.max(0, this.this$01.header_0.heightOfSection);
  footerHeight = $wnd.Math.max(0, this.this$01.footer.heightOfSection);
  vscrollHeight = round_int($wnd.Math.floor(this.this$01.heightOfEscalator - headerHeight - footerHeight));
  horizontalScrollbarNeeded = $calculateRowWidth(this.this$01.columnConfiguration) > this.this$01.widthOfEscalator;
  horizontalScrollbarNeeded && (vscrollHeight = round_int(vscrollHeight - $getScrollbarThickness(this.this$01.horizontalScrollbar)));
  this.this$01.footerDeco.style['height'] = $wnd.Math.max(0, this.this$01.footer.heightOfSection) + ($clinit_Style$Unit() , 'px');
  $setOffsetSize(this.this$01.verticalScrollbar, vscrollHeight);
}
;
var Lcom_vaadin_client_widgets_Escalator$FooterRowContainer_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/FooterRowContainer', 304);
function $setStylePrimaryName_6(this$static, primaryStyleName){
  $setStylePrimaryName_3(this$static, primaryStyleName);
  setStylePrimaryName(this$static.root, primaryStyleName + '-header');
}

function Escalator$HeaderRowContainer(this$0, headElement){
  this.this$01 = this$0;
  Escalator$AbstractStaticRowContainer.call(this, this$0, headElement);
}

defineClass(303, 154, {}, Escalator$HeaderRowContainer);
_.getCellElementTagName = function getCellElementTagName_1(){
  return 'th';
}
;
_.sectionHeightCalculated = function sectionHeightCalculated_0(){
  var heightOfSection;
  heightOfSection = $wnd.Math.max(0, this.heightOfSection);
  this.this$01.bodyElem.style['marginTop'] = heightOfSection + ($clinit_Style$Unit() , 'px');
  this.this$01.spacerDecoContainer.style['marginTop'] = heightOfSection + 'px';
  this.this$01.verticalScrollbar.root.style['top'] = heightOfSection + 'px';
  this.this$01.headerDeco.style['height'] = heightOfSection + 'px';
}
;
var Lcom_vaadin_client_widgets_Escalator$HeaderRowContainer_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/HeaderRowContainer', 303);
function eventOnBody(escalator, event_0){
  var e;
  e = ($clinit_DOMImpl() , impl_0).eventGetTarget(event_0);
  return !!e && equalsIgnoreCase('table', impl_0.getTagName(e)) || $isOrHasChild(escalator.bodyElem, e);
}

function moveScrollFromEvent(escalator, deltaX, deltaY, event_0){
  var e, movex, movey, warrantedXScroll, warrantedYScroll;
  e = ($clinit_DOMImpl() , impl_0).eventGetTarget(event_0);
  if (!(!!e && equalsIgnoreCase('table', impl_0.getTagName(e)) || $isOrHasChild(escalator.bodyElem, e))) {
    return;
  }
  movex = !isNaN(deltaX);
  movey = !isNaN(deltaY);
  if (movex || movey) {
    $addClassName(escalator.bodyElem, 'scrolling');
    movex && $setScrollPosByDelta(escalator.horizontalScrollbar, deltaX);
    movey && $setScrollPosByDelta(escalator.verticalScrollbar, deltaY);
    $reschedule(escalator.body_0.domSorter);
    warrantedYScroll = deltaY != 0 && $showsScrollHandle(escalator.verticalScrollbar);
    warrantedXScroll = deltaX != 0 && $showsScrollHandle(escalator.horizontalScrollbar);
    (warrantedYScroll || warrantedXScroll) && impl_0.eventPreventDefault(event_0);
  }
}

function $clinit_Escalator$JsniUtil$TouchHandlerBundle(){
  $clinit_Escalator$JsniUtil$TouchHandlerBundle = emptyMethod;
  DURATION = ($clinit_Window() , $getClientHeight($doc));
}

function $easingInOutCos(val){
  return 0.5 - 0.5 * $wnd.Math.cos($intern_4 * (val > 0?1:val < 0?-1:0) * $wnd.Math.min(val <= 0?0 - val:val, 4) / 4);
}

function $getTouchEndHandler(this$static){
  var self_0 = this$static;
  return $entry(function(e){
    self_0.touchEnd(e);
  }
  );
}

function $getTouchMoveHandler(this$static){
  var self_0 = this$static;
  return $entry(function(e){
    self_0.touchMove(e);
  }
  );
}

function $getTouchStartHandler(this$static){
  var self_0 = this$static;
  return $entry(function(e){
    self_0.touchStart(e);
  }
  );
}

function Escalator$JsniUtil$TouchHandlerBundle(escalator){
  $clinit_Escalator$JsniUtil$TouchHandlerBundle();
  this.animation = new Escalator$JsniUtil$TouchHandlerBundle$1(this);
  this.escalator = escalator;
}

defineClass(300, 1, {}, Escalator$JsniUtil$TouchHandlerBundle);
_.touchEnd = function touchEnd(event_0){
  var delta, vert;
  if (this.touching) {
    $endTouch(this.xMov, event_0);
    $endTouch(this.yMov, event_0);
    $validate(this.xMov, this.yMov);
    $validate(this.yMov, this.xMov);
    vert = !this.xMov.run || this.yMov.run && abs_0(this.yMov.offset) > abs_0(this.xMov.offset);
    delta = abs_0((vert?this.yMov:this.xMov).offset);
    $run_0(this.animation, round_int(3 * DURATION * (1 - $wnd.Math.pow(2, -delta / 1000))));
  }
}
;
_.touchMove = function touchMove(event_0){
  if (this.touching && event_0.cancelable) {
    $moveTouch(this.xMov, event_0);
    $moveTouch(this.yMov, event_0);
    $validate(this.xMov, this.yMov);
    $validate(this.yMov, this.xMov);
    this.xMov.run && $setScrollPosByDelta(this.xMov.scroll_0, this.xMov.delta);
    this.yMov.run && $setScrollPosByDelta(this.yMov.scroll_0, this.yMov.delta);
    (this.xMov.run || this.yMov.run) && ($clinit_DOMImpl() , impl_0).eventPreventDefault(event_0);
  }
}
;
_.touchStart = function touchStart(event_0){
  if (eventOnBody(this.escalator, event_0) && ($clinit_DOMImpl() , event_0).touches.length == 1) {
    if (!this.yMov) {
      this.yMov = new Escalator$JsniUtil$TouchHandlerBundle$Movement(this, true);
      this.xMov = new Escalator$JsniUtil$TouchHandlerBundle$Movement(this, false);
      $addClassName(this.escalator.bodyElem, 'touch');
    }
    if (this.animation.isRunning) {
      this.acceleration = round_int(this.acceleration + 0.7);
      ($clinit_DOMImpl() , impl_0).eventPreventDefault(event_0);
      $cancel(this.animation);
    }
     else {
      this.acceleration = 1;
    }
    $startTouch(this.xMov, event_0);
    $startTouch(this.yMov, event_0);
    this.touching = true;
  }
   else {
    this.touching = false;
    $cancel(this.animation);
    this.acceleration = 1;
  }
}
;
_.acceleration = 1;
_.touching = false;
var DURATION = 0;
var Lcom_vaadin_client_widgets_Escalator$JsniUtil$TouchHandlerBundle_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/JsniUtil/TouchHandlerBundle', 300);
function $run_0(this$static, duration){
  this$static.this$21.xMov.run || this$static.this$21.yMov.run?$run(this$static, duration, now_1()):(this$static.this$21.touching = false , $reschedule(this$static.this$21.escalator.body_0.domSorter));
}

function Escalator$JsniUtil$TouchHandlerBundle$1(this$2){
  this.this$21 = this$2;
  Animation.call(this);
}

defineClass(310, 109, {}, Escalator$JsniUtil$TouchHandlerBundle$1);
_.interpolate = function interpolate_0(progress){
  return $wnd.Math.sqrt(1 - (progress - 1) * (progress - 1));
}
;
_.onComplete = function onComplete_1(){
  this.this$21.touching = false;
  $reschedule(this.this$21.escalator.body_0.domSorter);
}
;
_.onUpdate = function onUpdate_0(progress){
  $stepAnimation(this.this$21.xMov, progress);
  $stepAnimation(this.this$21.yMov, progress);
  !this.this$21.xMov.run && !this.this$21.yMov.run && $cancel(this);
}
;
var Lcom_vaadin_client_widgets_Escalator$JsniUtil$TouchHandlerBundle$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/JsniUtil/TouchHandlerBundle/1', 310);
function $endTouch(this$static, event_0){
  var s, s$iterator;
  this$static.velocity = 0;
  for (s$iterator = new ArrayList$1(this$static.speeds); s$iterator.i < s$iterator.this$01.array.length;) {
    s = checkNotNull(castToDouble($next_4(s$iterator)));
    this$static.velocity += s / this$static.speeds.array.length;
  }
  this$static.position_0 = this$static.scroll_0.scrollPos;
  this$static.offset = 1500 * this$static.velocity * this$static.this$21.acceleration * $easingInOutCos(this$static.velocity);
  this$static.run = $validSpeed(this$static.velocity);
  this$static.run && $preventDefault(event_0);
}

function $inScrollRange(this$static, p){
  return p > 0 && p < this$static.scrollMax;
}

function $moveTouch(this$static, event_0){
  var a, ellapsed, now_0, pagePosition;
  pagePosition = (a = ($clinit_DOMImpl() , event_0).touches , this$static.vertical?$getPageY(a[0]):$getPageX(a[0]));
  this$static.run = false;
  if (pagePosition > -1) {
    this$static.delta = this$static.prevPos - pagePosition;
    now_0 = now_1();
    ellapsed = now_0 - this$static.prevTime;
    this$static.velocity = this$static.delta / ellapsed;
    if (this$static.speeds.array.length > 0 && !$validSpeed(checkNotNull(castToDouble($get_6(this$static.speeds, 0))))) {
      this$static.speeds.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
      this$static.run = true;
    }
    $add_5(this$static.speeds, 0, this$static.velocity);
    this$static.prevTime = now_0;
    this$static.prevPos = pagePosition;
    this$static.position_0 = this$static.scroll_0.scrollPos;
  }
}

function $startTouch(this$static, event_0){
  var a;
  this$static.speeds.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  this$static.prevPos = (a = ($clinit_DOMImpl() , event_0).touches , this$static.vertical?$getPageY(a[0]):$getPageX(a[0]));
  this$static.prevTime = now_1();
}

function $stepAnimation(this$static, progress){
  var p;
  if (this$static.run) {
    p = this$static.position_0 + this$static.offset * progress;
    $setScrollPos(this$static.scroll_0, p);
    this$static.run = p > 0 && p < this$static.scrollMax;
  }
}

function $validSpeed(speed){
  return (speed <= 0?0 - speed:speed) > 0.6;
}

function $validate(this$static, other){
  this$static.run = this$static.delta != 0 && $inScrollRange(this$static, this$static.position_0 + this$static.delta) && abs_0(other.delta / this$static.delta) < 1;
  this$static.run || (this$static.delta = 0);
}

function Escalator$JsniUtil$TouchHandlerBundle$Movement(this$2, vertical){
  this.this$21 = this$2;
  this.speeds = new ArrayList;
  this.vertical = vertical;
  this.scroll_0 = vertical?this$2.escalator.verticalScrollbar:this$2.escalator.horizontalScrollbar;
  this.scrollMax = parseCssDimensionToPixels(this.scroll_0.internalGetScrollSize()) - parseCssDimensionToPixels(this.scroll_0.internalGetOffsetSize());
  this.delta = 0;
}

defineClass(152, 1, {}, Escalator$JsniUtil$TouchHandlerBundle$Movement);
_.delta = 0;
_.offset = 0;
_.position_0 = 0;
_.prevPos = 0;
_.prevTime = 0;
_.run = false;
_.scrollMax = 0;
_.velocity = 0;
_.vertical = false;
var Lcom_vaadin_client_widgets_Escalator$JsniUtil$TouchHandlerBundle$Movement_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/JsniUtil/TouchHandlerBundle/Movement', 152);
defineClass(301, 1, {});
var Lcom_vaadin_client_widgets_JsniWorkaround_2_classLit = createForClass('com.vaadin.client.widgets', 'JsniWorkaround', 301);
function $attachMousewheelListener(this$static, element){
  if (element.addEventListener) {
    var eventName = 'onmousewheel' in element?'mousewheel':'wheel';
    element.addEventListener(eventName, this$static.mousewheelListenerFunction);
  }
   else {
    element.attachEvent('onmousewheel', this$static.mousewheelListenerFunction);
  }
}

function $attachScrollListener(this$static, element){
  element.addEventListener?element.addEventListener('scroll', this$static.scrollListenerFunction):element.attachEvent('onscroll', this$static.scrollListenerFunction);
}

function $attachTouchListeners(this$static, element){
  if (element.addEventListener) {
    element.addEventListener('touchstart', this$static.touchStartFunction);
    element.addEventListener('touchmove', this$static.touchMoveFunction);
    element.addEventListener('touchend', this$static.touchEndFunction);
    element.addEventListener('touchcancel', this$static.touchEndFunction);
  }
}

function $createMousewheelListenerFunction(esc){
  return $entry(function(e){
    var deltaX = e.deltaX?e.deltaX:-0.5 * e.wheelDeltaX;
    var deltaY = e.deltaY?e.deltaY:-0.5 * e.wheelDeltaY;
    if (e.deltaMode === 1) {
      var brc = esc.body_0;
      deltaY *= brc.getDefaultRowHeight();
    }
    if (e.deltaMode !== undefined && (e.deltaMode >= 2 || e.deltaMode < 0)) {
      var msg = 'Unsupported wheel delta mode "' + e.deltaMode + '"';
      esc.logWarning(msg);
    }
    isNaN(deltaY) && (deltaY = -0.5 * e.wheelDelta);
    moveScrollFromEvent(esc, deltaX, deltaY, e);
  }
  );
}

function $createScrollListenerFunction(esc){
  var vScroll = esc.verticalScrollbar;
  var vScrollElem = vScroll.getElement();
  var hScroll = esc.horizontalScrollbar;
  var hScrollElem = hScroll.getElement();
  return $entry(function(e){
    var target = e.target || e.srcElement;
    target === vScrollElem?vScroll.updateScrollPosFromDom():target === hScrollElem?hScroll.updateScrollPosFromDom():$wnd.console.error('unexpected scroll target: ' + target);
  }
  );
}

function $detachMousewheelListener(this$static, element){
  if (element.addEventListener) {
    var eventName = element.onwheel === undefined?'mousewheel':'wheel';
    element.removeEventListener(eventName, this$static.mousewheelListenerFunction);
  }
   else {
    element.detachEvent('onmousewheel', this$static.mousewheelListenerFunction);
  }
}

function $detachScrollListener(this$static, element){
  element.addEventListener?element.removeEventListener('scroll', this$static.scrollListenerFunction):element.detachEvent('onscroll', this$static.scrollListenerFunction);
}

function $detachTouchListeners(this$static, element){
  if (element.removeEventListener) {
    element.removeEventListener('touchstart', this$static.touchStartFunction);
    element.removeEventListener('touchmove', this$static.touchMoveFunction);
    element.removeEventListener('touchend', this$static.touchEndFunction);
    element.removeEventListener('touchcancel', this$static.touchEndFunction);
  }
}

function $onScroll(this$static){
  var i_0, scrollLeft, scrollTop;
  scrollTop = this$static.this$01.verticalScrollbar.scrollPos;
  scrollLeft = this$static.this$01.horizontalScrollbar.scrollPos;
  if (this$static.lastScrollLeft != scrollLeft) {
    for (i_0 = 0; i_0 < this$static.this$01.columnConfiguration.frozenColumns; i_0++) {
      $updateFreezePosition(this$static.this$01.header_0, i_0, scrollLeft);
      $updateFreezePosition(this$static.this$01.body_0, i_0, scrollLeft);
      $updateFreezePosition(this$static.this$01.footer, i_0, scrollLeft);
    }
    this$static.this$01.position_0.set_0(this$static.this$01.headElem, -scrollLeft, 0);
    instanceOf(this$static.this$01.position_0, 114)?(this$static.this$01.footElem.style['left'] = -scrollLeft + ($clinit_Style$Unit() , 'px') , undefined):this$static.this$01.position_0.set_0(this$static.this$01.footElem, -scrollLeft, 0);
    this$static.lastScrollLeft = scrollLeft;
  }
  $setBodyScrollPosition(this$static.this$01.body_0, scrollLeft, scrollTop);
  $updateEscalatorRowsOnScroll(this$static.this$01.body_0);
  $updateSpacerDecosVisibility(this$static.this$01.body_0.spacerContainer);
}

function $recalculateScrollbarsForVirtualViewport(this$static){
  var fCornerStyle, footerHeight, frozenPixels, hCornerStyle, hScrollOffsetWidth, headerHeight, horizontalScrollNeeded, offset, prevScrollPos, scrollContentHeight, scrollContentWidth, tableWrapperHeight, tableWrapperWidth, unfrozenPixels, vScrollbarHeight, verticalScrollNeeded;
  scrollContentHeight = $calculateTotalRowHeight(this$static.this$01.body_0) + $getHeights(new AbstractMap$2(this$static.this$01.body_0.spacerContainer.rowIndexToSpacer));
  scrollContentWidth = $calculateRowWidth(this$static.this$01.columnConfiguration);
  tableWrapperHeight = this$static.this$01.heightOfEscalator;
  tableWrapperWidth = this$static.this$01.widthOfEscalator;
  verticalScrollNeeded = scrollContentHeight > tableWrapperHeight + $intern_45 - $wnd.Math.max(0, this$static.this$01.header_0.heightOfSection) - $wnd.Math.max(0, this$static.this$01.footer.heightOfSection);
  horizontalScrollNeeded = scrollContentWidth > tableWrapperWidth + $intern_45;
  verticalScrollNeeded != horizontalScrollNeeded && (!verticalScrollNeeded && horizontalScrollNeeded?(verticalScrollNeeded = scrollContentHeight > tableWrapperHeight + $intern_45 - $wnd.Math.max(0, this$static.this$01.header_0.heightOfSection) - $wnd.Math.max(0, this$static.this$01.footer.heightOfSection) - $getScrollbarThickness(this$static.this$01.horizontalScrollbar)):(horizontalScrollNeeded = scrollContentWidth > tableWrapperWidth + $intern_45 - $getScrollbarThickness(this$static.this$01.verticalScrollbar)));
  if (verticalScrollNeeded) {
    tableWrapperWidth -= $getScrollbarThickness(this$static.this$01.verticalScrollbar);
    tableWrapperWidth = $wnd.Math.max(0, tableWrapperWidth);
  }
  if (horizontalScrollNeeded) {
    tableWrapperHeight -= $getScrollbarThickness(this$static.this$01.horizontalScrollbar);
    tableWrapperHeight = $wnd.Math.max(0, tableWrapperHeight);
  }
  this$static.this$01.tableWrapper.style['height'] = tableWrapperHeight + ($clinit_Style$Unit() , 'px');
  this$static.this$01.tableWrapper.style['width'] = tableWrapperWidth + 'px';
  footerHeight = $wnd.Math.max(0, this$static.this$01.footer.heightOfSection);
  headerHeight = $wnd.Math.max(0, this$static.this$01.header_0.heightOfSection);
  vScrollbarHeight = $wnd.Math.max(0, tableWrapperHeight - footerHeight - headerHeight);
  $setOffsetSize(this$static.this$01.verticalScrollbar, vScrollbarHeight);
  $setScrollSize(this$static.this$01.verticalScrollbar, scrollContentHeight);
  prevScrollPos = this$static.this$01.horizontalScrollbar.scrollPos;
  unfrozenPixels = $getCalculatedColumnsWidth(this$static.this$01.columnConfiguration, new Range_0(this$static.this$01.columnConfiguration.frozenColumns, this$static.this$01.columnConfiguration.columns.array.length));
  frozenPixels = scrollContentWidth - unfrozenPixels;
  hScrollOffsetWidth = tableWrapperWidth - frozenPixels;
  $setOffsetSize(this$static.this$01.horizontalScrollbar, hScrollOffsetWidth);
  $setScrollSize(this$static.this$01.horizontalScrollbar, unfrozenPixels);
  this$static.this$01.horizontalScrollbar.root.style['left'] = frozenPixels + 'px';
  $setScrollPos(this$static.this$01.horizontalScrollbar, prevScrollPos);
  $showsScrollHandle(this$static.this$01.horizontalScrollbar)?(this$static.this$01.horizontalScrollbarDeco.style['display'] = '' , undefined):(this$static.this$01.horizontalScrollbarDeco.style['display'] = ($clinit_Style$Display() , 'none') , undefined);
  hCornerStyle = this$static.this$01.headerDeco.style;
  fCornerStyle = this$static.this$01.footerDeco.style;
  if ($showsScrollHandle(this$static.this$01.verticalScrollbar)) {
    hCornerStyle['display'] = '';
    fCornerStyle['display'] = '';
    if ($showsScrollHandle(this$static.this$01.horizontalScrollbar)) {
      offset = $getScrollbarThickness(this$static.this$01.horizontalScrollbar);
      fCornerStyle['bottom'] = offset + 'px';
    }
     else {
      fCornerStyle['bottom'] = '';
    }
  }
   else {
    hCornerStyle['display'] = ($clinit_Style$Display() , 'none');
    fCornerStyle['display'] = 'none';
  }
}

function $scrollToColumn_0(this$static, columnIndex, destination){
  var frozenPixels, scrollLeft, targetEndPx, targetStartPx, viewportEndPx, viewportStartPx;
  frozenPixels = $getCalculatedColumnsWidth(this$static.this$01.columnConfiguration, withLength(0, this$static.this$01.columnConfiguration.frozenColumns));
  targetStartPx = $getCalculatedColumnsWidth(this$static.this$01.columnConfiguration, withLength(0, columnIndex)) - frozenPixels;
  targetEndPx = targetStartPx + $getColumnWidthActual(this$static.this$01.columnConfiguration, columnIndex);
  viewportStartPx = this$static.this$01.horizontalScrollbar.scrollPos;
  viewportEndPx = viewportStartPx + getRequiredWidthBoundingClientRectDouble($getElement(this$static.this$01)) - frozenPixels;
  $showsScrollHandle(this$static.this$01.verticalScrollbar) && (viewportEndPx -= getNativeScrollbarSize());
  scrollLeft = getScrollPos(destination, targetStartPx, targetEndPx, viewportStartPx, viewportEndPx, 10);
  $setScrollLeft_0(this$static.this$01, scrollLeft);
}

function Escalator$Scroller(this$0){
  this.this$01 = this$0;
  this.scrollListenerFunction = $createScrollListenerFunction(this$0);
  this.mousewheelListenerFunction = $createMousewheelListenerFunction(this$0);
  this.touchHandlerBundle = new Escalator$JsniUtil$TouchHandlerBundle(this$0);
  this.touchStartFunction = $getTouchStartHandler(this.touchHandlerBundle);
  this.touchMoveFunction = $getTouchMoveHandler(this.touchHandlerBundle);
  this.touchEndFunction = $getTouchEndHandler(this.touchHandlerBundle);
}

defineClass(302, 301, {}, Escalator$Scroller);
_.lastScrollLeft = 0;
var Lcom_vaadin_client_widgets_Escalator$Scroller_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/Scroller', 302);
function $destroySpacerContent(this$static, spacers){
  var entry, outerIter, spacer, spacer$iterator;
  for (spacer$iterator = (outerIter = spacers.this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    this$static.spacerUpdater.destroy(spacer);
  }
}

function $getHeights(spacers){
  var entry, heights, outerIter, spacer, spacer$iterator;
  heights = 0;
  for (spacer$iterator = (outerIter = spacers.this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    heights += spacer.height_0;
  }
  return heights;
}

function $getSpacer(this$static, rowIndex){
  return castTo($get_4(this$static.rowIndexToSpacer, valueOf(rowIndex)), 23);
}

function $getSpacerHeight(this$static, rowIndex){
  var spacer;
  spacer = castTo($get_4(this$static.rowIndexToSpacer, valueOf(rowIndex)), 23);
  return spacer?spacer.height_0:0;
}

function $getSpacerHeightsSumBetweenPx(this$static, rangeTop, topInclusion, rangeBottom, bottomInclusion){
  var bottom, bottomIsAboveRange, bottomIsBelowRange, bottomIsInRange, entry, height, heights, outerIter, spacer, spacer$iterator, top_0, topIsAboveRange, topIsBelowRange, topIsInRange;
  heights = 0;
  for (spacer$iterator = (outerIter = (new AbstractMap$2(this$static.rowIndexToSpacer)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    top_0 = $getTop(spacer.this$11.this$01.positions, spacer.root);
    height = spacer.height_0;
    bottom = top_0 + height;
    topIsAboveRange = top_0 < rangeTop;
    topIsInRange = rangeTop <= top_0 && top_0 <= rangeBottom;
    topIsBelowRange = rangeBottom < top_0;
    bottomIsAboveRange = bottom < rangeTop;
    bottomIsInRange = rangeTop <= bottom && bottom <= rangeBottom;
    bottomIsBelowRange = rangeBottom < bottom;
    if (bottomIsAboveRange) {
      continue;
    }
     else if (topIsBelowRange) {
      return heights;
    }
     else if (topIsAboveRange && bottomIsInRange) {
      switch (topInclusion.ordinal) {
        case 1:
          heights += bottom - rangeTop;
          break;
        case 0:
          heights += height;
      }
    }
     else if (topIsAboveRange && bottomIsBelowRange) {
      switch (topInclusion.ordinal) {
        case 2:
          return 0;
        case 0:
          return height;
        case 1:
          return rangeBottom - rangeTop;
        default:throw toJs(new IllegalArgumentException('Unexpected inclusion state :' + topInclusion));
      }
    }
     else if (topIsInRange && bottomIsInRange) {
      heights += height;
    }
     else if (topIsInRange && bottomIsBelowRange) {
      switch (bottomInclusion.ordinal) {
        case 1:
          heights += rangeBottom - top_0;
          break;
        case 0:
          heights += height;
      }
      return heights;
    }
  }
  return heights;
}

function $getSpacerHeightsSumUntilIndex(this$static, logicalIndex){
  return $getHeights(new AbstractMap$2($headMap(this$static.rowIndexToSpacer, valueOf(logicalIndex))));
}

function $getSpacerHeightsSumUntilPx(this$static, px){
  return $getSpacerHeightsSumBetweenPx(this$static, 0, ($clinit_Escalator$SpacerInclusionStrategy() , PARTIAL), px, PARTIAL);
}

function $getSpacersAfterPx(this$static, px, strategy){
  var bottom, i_0, spacer, spacers, top_0;
  spacers = new ArrayList_1(new AbstractMap$2(this$static.rowIndexToSpacer));
  for (i_0 = 0; i_0 < spacers.array.length; i_0++) {
    spacer = (checkCriticalElementIndex(i_0, spacers.array.length) , castTo(spacers.array[i_0], 23));
    top_0 = $getTop(spacer.this$11.this$01.positions, spacer.root);
    bottom = top_0 + spacer.height_0;
    if (top_0 > px) {
      return new AbstractList$SubList(spacers, i_0, spacers.array.length);
    }
     else if (bottom > px) {
      return strategy == ($clinit_Escalator$SpacerInclusionStrategy() , NONE_1)?new AbstractList$SubList(spacers, i_0 + 1, spacers.array.length):new AbstractList$SubList(spacers, i_0, spacers.array.length);
    }
  }
  return $clinit_Collections() , $clinit_Collections() , EMPTY_SET;
}

function $initSpacerContent(this$static, spacers){
  var entry, outerIter, spacer, spacer$iterator;
  for (spacer$iterator = (outerIter = spacers.this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    this$static.spacerUpdater.init_0(spacer);
    $isInViewport(spacer)?(spacer.root.style['display'] = '' , undefined , spacer.deco.style['display'] = '' , undefined):(spacer.root.style['display'] = ($clinit_Style$Display() , 'none') , undefined , spacer.deco.style['display'] = 'none' , undefined);
  }
}

function $insertNewSpacer(this$static, rowIndex, height){
  var spacer, spacerRoot;
  !this$static.spacerScrollerRegistration && (this$static.spacerScrollerRegistration = $addHandler_0(this$static.this$01, this$static.spacerScroller, ($clinit_ScrollEvent() , TYPE_12)));
  spacer = new Escalator$SpacerContainer$SpacerImpl(this$static, rowIndex);
  $put_6(this$static.rowIndexToSpacer, valueOf(rowIndex), spacer);
  $set_4(this$static.this$01.positions, spacer.root, this$static.this$01.horizontalScrollbar.scrollPos, $getRowTop_0(this$static.this$01.body_0, rowIndex) + this$static.this$01.body_0.defaultRowHeight);
  spacerRoot = spacer.root;
  spacerRoot.style['width'] = $calculateRowWidth(this$static.this$01.columnConfiguration) + ($clinit_Style$Unit() , 'px');
  $appendChild(this$static.this$01.body_0.root, spacerRoot);
  spacer.root.style['width'] = getRequiredWidthBoundingClientRectDouble(spacer.this$11.this$01.tableWrapper) + 'px';
  $setHeight_1(spacer, height);
  $setColSpan(spacer.spacerElement, spacer.this$11.this$01.columnConfiguration.columns.array.length);
  $setStylePrimaryName_8(spacer, getStylePrimaryName($getStyleElement(spacer.this$11.this$01)));
  $set_4(this$static.this$01.positions, spacer.deco, 0, $getTop(spacer.this$11.this$01.positions, spacer.root) - spacer.this$11.this$01.body_0.defaultRowHeight);
  $appendChild(this$static.this$01.spacerDecoContainer, spacer.deco);
  if (!$getParentElement(this$static.this$01.spacerDecoContainer)) {
    $appendChild($getElement(this$static.this$01), this$static.this$01.spacerDecoContainer);
    this$static.spacerDecoWidth = getRequiredWidthBoundingClientRectDouble(spacer.deco);
  }
  this$static.spacerUpdater.init_0(spacer);
  $isInViewport(spacer)?(spacer.root.style['display'] = '' , undefined , spacer.deco.style['display'] = '' , undefined):(spacer.root.style['display'] = ($clinit_Style$Display() , 'none') , undefined , spacer.deco.style['display'] = 'none' , undefined);
  $sortDomElements(this$static.this$01.body_0);
}

function $isSpacer(this$static, row){
  var entry, outerIter, spacer, spacer$iterator;
  for (spacer$iterator = (outerIter = (new AbstractMap$2(this$static.rowIndexToSpacer)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    if (spacer.root == row) {
      return true;
    }
  }
  return false;
}

function $paintRemoveSpacers(this$static, removedRowsRange){
  $removeSpacers(this$static, removedRowsRange);
  $shiftSpacersByRows(this$static, removedRowsRange.start_0, -(removedRowsRange.end - removedRowsRange.start_0));
}

function $reapplySpacerWidths(this$static){
  var entry, outerIter, spacer, spacer$iterator, width_0;
  width_0 = getRequiredWidthBoundingClientRectDouble(this$static.this$01.tableWrapper) - this$static.spacerDecoWidth;
  for (spacer$iterator = (outerIter = (new AbstractMap$2(this$static.rowIndexToSpacer)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    spacer.root.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  }
}

function $removeSpacers(this$static, removedRange){
  var entry, entry0, outerIter, removedSpacers, spacer, spacer$iterator;
  removedSpacers = $subMap(this$static.rowIndexToSpacer, valueOf(removedRange.start_0), valueOf(removedRange.end));
  removedSpacers.type_0.fromKeyValid()?removedSpacers.fromInclusive?(entry0 = $getNodeAfter(removedSpacers.this$01, removedSpacers.fromKey, true)):(entry0 = $getNodeAfter(removedSpacers.this$01, removedSpacers.fromKey, false)):(entry0 = $getFirstEntry(removedSpacers.this$01));
  if (!(!!entry0 && $inRange_0(removedSpacers, entry0.key)?entry0:null)) {
    return;
  }
  for (spacer$iterator = (outerIter = (new AbstractMap$2(removedSpacers)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    this$static.spacerUpdater.destroy(spacer);
    $setHeight_1(spacer, 0);
    $removeFromParent(spacer.root);
    $removeFromParent(spacer.deco);
  }
  $clear_0(new TreeMap$SubMap$1(removedSpacers, removedSpacers));
  if (this$static.rowIndexToSpacer.size_0 == 0) {
    $removeHandler(this$static.spacerScrollerRegistration.real);
    this$static.spacerScrollerRegistration = null;
  }
}

function $setSpacer_0(this$static, rowIndex, height){
  if (rowIndex < -1 || rowIndex >= this$static.this$01.body_0.rows_0) {
    throw toJs(new IllegalArgumentException('invalid row index: ' + rowIndex + ', while the body only has ' + this$static.this$01.body_0.rows_0 + ' rows.'));
  }
  height >= 0?$containsKey_0(this$static.rowIndexToSpacer, valueOf(rowIndex))?$setHeight_1(castTo($get_4(this$static.rowIndexToSpacer, valueOf(rowIndex)), 23), height):$insertNewSpacer(this$static, rowIndex, height):$containsKey_0(this$static.rowIndexToSpacer, valueOf(rowIndex)) && $removeSpacers(this$static, new Range_0(rowIndex, rowIndex + 1));
  $updateSpacerDecosVisibility(this$static);
}

function $setSpacerUpdater_0(this$static, spacerUpdater){
  $destroySpacerContent(this$static, new AbstractMap$2(this$static.rowIndexToSpacer));
  this$static.spacerUpdater = spacerUpdater;
  $initSpacerContent(this$static, new AbstractMap$2(this$static.rowIndexToSpacer));
}

function $setStylePrimaryName_7(this$static, style){
  var entry, outerIter, spacer, spacer$iterator;
  for (spacer$iterator = (outerIter = (new AbstractMap$2(this$static.rowIndexToSpacer)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    setStylePrimaryName(spacer.root, style + '-spacer');
    setStylePrimaryName(spacer.deco, style + '-spacer-deco');
  }
}

function $shiftSpacerPositionsAfterRow(this$static, changedRowIndex, diffPx){
  var entry, outerIter, spacer, spacer$iterator;
  for (spacer$iterator = (outerIter = (new AbstractMap$2($tailMap(this$static.rowIndexToSpacer, valueOf(changedRowIndex), false))).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    $setPosition_0(spacer, $getLeft(spacer.this$11.this$01.positions, spacer.root), $getTop(spacer.this$11.this$01.positions, spacer.root) + diffPx);
  }
}

function $shiftSpacersByRows(this$static, index_0, numberOfRows){
  var pxDiff, spacer, spacer$iterator;
  pxDiff = numberOfRows * this$static.this$01.body_0.defaultRowHeight;
  for (spacer$iterator = new ArrayList$1(new ArrayList_1(new AbstractMap$2($tailMap(this$static.rowIndexToSpacer, valueOf(index_0), true)))); spacer$iterator.i < spacer$iterator.this$01.array.length;) {
    spacer = castTo($next_4(spacer$iterator), 23);
    $setPosition_0(spacer, $getLeft(spacer.this$11.this$01.positions, spacer.root), $getTop(spacer.this$11.this$01.positions, spacer.root) + pxDiff);
    $setRowIndex(spacer, spacer.rowIndex + numberOfRows);
  }
}

function $updateSpacerDecosVisibility(this$static){
  var bottom, entry, outerIter, spacer, spacer$iterator, top_0, visibleRowRange, visibleSpacers;
  visibleRowRange = $getVisibleRowRange(this$static.this$01);
  visibleSpacers = new AbstractMap$2($subMap(this$static.rowIndexToSpacer, valueOf(visibleRowRange.start_0 - 1), valueOf(visibleRowRange.end + 1)));
  if (visibleSpacers.this$01.size_1() != 0) {
    top_0 = $getAbsoluteTop(this$static.this$01.tableWrapper) + $wnd.Math.max(0, this$static.this$01.header_0.heightOfSection);
    bottom = $getAbsoluteBottom(this$static.this$01.tableWrapper) - $wnd.Math.max(0, this$static.this$01.footer.heightOfSection);
    for (spacer$iterator = (outerIter = visibleSpacers.this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
      spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
      $updateDecoClip(spacer, top_0, bottom, this$static.spacerDecoWidth);
    }
  }
}

function Escalator$SpacerContainer(this$0){
  this.this$01 = this$0;
  this.rowIndexToSpacer = new TreeMap;
  this.spacerUpdater = ($clinit_SpacerUpdater() , NULL_0);
  this.spacerScroller = new Escalator$SpacerContainer$1(this);
}

defineClass(308, 1, {}, Escalator$SpacerContainer);
_.spacerDecoWidth = 0;
var Lcom_vaadin_client_widgets_Escalator$SpacerContainer_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/SpacerContainer', 308);
function Escalator$SpacerContainer$1(this$1){
  this.this$11 = this$1;
}

defineClass(313, 1, $intern_46, Escalator$SpacerContainer$1);
_.onScroll = function onScroll_2(event_0){
  var entry, outerIter, spacer, spacer$iterator;
  if (pixelValuesEqual(this.this$11.this$01.horizontalScrollbar.scrollPos, this.prevScrollX)) {
    return;
  }
  this.prevScrollX = this.this$11.this$01.horizontalScrollbar.scrollPos;
  for (spacer$iterator = (outerIter = (new AbstractMap$2(this.this$11.rowIndexToSpacer)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter)); spacer$iterator.val$outerIter2.hasNext_0();) {
    spacer = (entry = castTo(spacer$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 23));
    $setPosition_0(spacer, this.prevScrollX, $getTop(spacer.this$11.this$01.positions, spacer.root));
  }
}
;
_.prevScrollX = 0;
var Lcom_vaadin_client_widgets_Escalator$SpacerContainer$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/SpacerContainer/1', 313);
function $isInViewport(this$static){
  var height, location_0, top_0;
  top_0 = round_int($wnd.Math.ceil($getTop(this$static.this$11.this$01.positions, this$static.root)));
  height = round_int($wnd.Math.floor(this$static.height_0));
  location_0 = withLength(top_0, height);
  return $intersects($getViewportPixels(this$static.this$11.this$01), location_0);
}

function $setHeight_1(this$static, height){
  var bottom, heightDiff, minusOneSpacerException, moveDiff, oldHeight, row, row$iterator, scrollTop, spacerIsGrowing, top_0, viewportNeedsScrolling, viewportTopIsAtMidSpacer, style;
  heightDiff = height - $wnd.Math.max(0, this$static.height_0);
  oldHeight = this$static.height_0;
  this$static.height_0 = height;
  this$static.defaultCellBorderBottomSize < 0 && (this$static.defaultCellBorderBottomSize = ($clinit_WidgetUtil() , getBorderThickness($getFirstChildElement($getRowElement(this$static.this$11.this$01.body_0, $getVisibleRowRange(this$static.this$11.this$01).start_0)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['borderBottomWidth']))));
  this$static.root.style['height'] = height + this$static.defaultCellBorderBottomSize + ($clinit_Style$Unit() , 'px');
  $shiftSpacerPositionsAfterRow(this$static.this$11, this$static.rowIndex, heightDiff);
  spacerIsGrowing = heightDiff > 0;
  spacerIsGrowing && $setScrollSize(this$static.this$11.this$01.verticalScrollbar, parseCssDimensionToPixels($getProperty(this$static.this$11.this$01.verticalScrollbar.scrollSizeElement.style, 'height')) + heightDiff);
  minusOneSpacerException = spacerIsGrowing && this$static.rowIndex == -1 && this$static.this$11.this$01.body_0.topRowLogicalIndex == 0;
  viewportNeedsScrolling = this$static.rowIndex < this$static.this$11.this$01.body_0.topRowLogicalIndex && !minusOneSpacerException;
  if (viewportNeedsScrolling) {
    for (row$iterator = $listIterator(this$static.this$11.this$01.body_0.visualRowOrder, 0); row$iterator.currentNode != row$iterator.this$01.tail;) {
      row = castToJso($next_5(row$iterator));
      $setRowPosition(this$static.this$11.this$01.body_0, row, $getRowTop(this$static.this$11.this$01.body_0, row) + heightDiff);
    }
    top_0 = $getTop(this$static.this$11.this$01.positions, this$static.root);
    bottom = top_0 + oldHeight;
    scrollTop = this$static.this$11.this$01.verticalScrollbar.scrollPos;
    viewportTopIsAtMidSpacer = top_0 < scrollTop && scrollTop < bottom;
    viewportTopIsAtMidSpacer && !spacerIsGrowing?(moveDiff = $wnd.Math.max(heightDiff, top_0 - scrollTop)):(moveDiff = heightDiff);
    $setBodyScrollPosition(this$static.this$11.this$01.body_0, this$static.this$11.this$01.tBodyScrollLeft, this$static.this$11.this$01.tBodyScrollTop + moveDiff);
    $setScrollPosByDelta(this$static.this$11.this$01.verticalScrollbar, moveDiff);
  }
   else {
    $shiftRowPositions(this$static.this$11.this$01.body_0, this$static.rowIndex, heightDiff);
  }
  spacerIsGrowing || $setScrollSize(this$static.this$11.this$01.verticalScrollbar, parseCssDimensionToPixels($getProperty(this$static.this$11.this$01.verticalScrollbar.scrollSizeElement.style, 'height')) + heightDiff);
  style = this$static.deco.style;
  this$static.decoHeight = height + this$static.this$11.this$01.body_0.defaultRowHeight;
  style['height'] = this$static.decoHeight + 'px';
}

function $setPosition_0(this$static, x_0, y_0){
  $set_4(this$static.this$11.this$01.positions, this$static.root, x_0, y_0);
  $set_4(this$static.this$11.this$01.positions, this$static.deco, 0, y_0 - this$static.this$11.this$01.body_0.defaultRowHeight);
}

function $setRowIndex(this$static, rowIndex){
  castTo($remove_21(this$static.this$11.rowIndexToSpacer, valueOf(this$static.rowIndex)), 23);
  this$static.rowIndex = rowIndex;
  this$static.root['vLogicalRow'] = rowIndex;
  $put_6(this$static.this$11.rowIndexToSpacer, valueOf(this$static.rowIndex), this$static);
}

function $setStylePrimaryName_8(this$static, style){
  setStylePrimaryName(this$static.root, style + '-spacer');
  setStylePrimaryName(this$static.deco, style + '-spacer-deco');
}

function $updateDecoClip(this$static, bodyTop, bodyBottom, decoWidth){
  var bottom, bottomClip, clip, height, top_0, topClip;
  top_0 = $getAbsoluteTop(this$static.deco);
  bottom = $getAbsoluteBottom(this$static.deco);
  height = bottom - top_0;
  if (top_0 < bodyTop || bottom > bodyBottom) {
    topClip = $wnd.Math.max(0, bodyTop - top_0);
    bottomClip = height - $wnd.Math.max(0, bottom - bodyBottom);
    clip = $append_1($append($append_1($append($append_1($append(new StringBuilder_0('rect('), topClip), 'px,'), decoWidth), 'px,'), bottomClip), 'px,0)').string;
    this$static.deco.style['clip'] = clip;
  }
   else {
    this$static.deco.style['clip'] = 'auto';
  }
}

function Escalator$SpacerContainer$SpacerImpl(this$1, rowIndex){
  this.this$11 = this$1;
  this.rowIndex = rowIndex;
  this.root = ($clinit_DOM() , $createTRElement($doc));
  this.spacerElement = $createTDElement($doc);
  $appendChild(this.root, this.spacerElement);
  this.root['vLogicalRow'] = rowIndex;
  this.deco = $createDivElement($doc);
}

defineClass(23, 1, {23:1}, Escalator$SpacerContainer$SpacerImpl);
_.decoHeight = 0;
_.defaultCellBorderBottomSize = -1;
_.height_0 = -1;
_.rowIndex = 0;
var Lcom_vaadin_client_widgets_Escalator$SpacerContainer$SpacerImpl_2_classLit = createForClass('com.vaadin.client.widgets', 'Escalator/SpacerContainer/SpacerImpl', 23);
function $clinit_Escalator$SpacerInclusionStrategy(){
  $clinit_Escalator$SpacerInclusionStrategy = emptyMethod;
  COMPLETE = new Escalator$SpacerInclusionStrategy('COMPLETE', 0);
  PARTIAL = new Escalator$SpacerInclusionStrategy('PARTIAL', 1);
  NONE_1 = new Escalator$SpacerInclusionStrategy('NONE', 2);
}

function Escalator$SpacerInclusionStrategy(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Escalator$SpacerInclusionStrategy();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_client_widgets_Escalator$SpacerInclusionStrategy_2_classLit, 1), $intern_1, 92, 0, [COMPLETE, PARTIAL, NONE_1]);
}

defineClass(92, 4, {92:1, 3:1, 5:1, 4:1}, Escalator$SpacerInclusionStrategy);
var COMPLETE, NONE_1, PARTIAL;
var Lcom_vaadin_client_widgets_Escalator$SpacerInclusionStrategy_2_classLit = createForEnum('com.vaadin.client.widgets', 'Escalator/SpacerInclusionStrategy', 92, values_7);
function $$init_1(this$static){
  this$static.eventCell = new EventCellReference(this$static);
  this$static.keyDown = new GridKeyDownEvent(this$static, this$static.eventCell);
  this$static.keyUp = new GridKeyUpEvent(this$static, this$static.eventCell);
  new GridKeyPressEvent(this$static, this$static.eventCell);
  this$static.clickEvent = new GridClickEvent(this$static, this$static.eventCell);
  new GridDoubleClickEvent(this$static, this$static.eventCell);
  this$static.escalator = new Escalator;
  this$static.header_0 = new Grid$Header;
  this$static.footer = new Grid$Footer;
  this$static.sidebar_0 = new Grid$Sidebar(this$static);
  this$static.columns = new ArrayList;
  this$static.currentDataAvailable = withLength(0, 0);
  this$static.sortOrder = new ArrayList;
  this$static.sorter = new Grid$UserSorter(this$static);
  this$static.editor = new Grid$Editor;
  this$static.autoColumnWidthsRecalculator = new Grid$AutoColumnWidthsRecalculator(this$static);
  this$static.detailsGenerator = ($clinit_DetailsGenerator() , NULL_1);
  this$static.gridSpacerUpdater = new Grid$GridSpacerUpdater(this$static);
  this$static.visibleDetails = new HashSet;
  this$static.columnHider = new Grid$ColumnHider(this$static);
  this$static.dndHandler = new DragAndDropHandler;
  this$static.autoScroller = new AutoScroller(this$static);
  this$static.headerCellDndCallback = new Grid$1(this$static);
  this$static.rowReference = new RowReference(this$static);
  new CellReference(this$static.rowReference);
  this$static.rendererCellReference = new RendererCellReference(this$static.rowReference);
}

function $addBodyClickHandler(this$static, handler){
  return $addHandler_0(this$static, handler, this$static.clickEvent.associatedType);
}

function $addBodyKeyDownHandler(this$static, handler){
  return $addHandler_0(this$static, handler, this$static.keyDown.associatedType);
}

function $addBodyKeyUpHandler(this$static, handler){
  return $addHandler_0(this$static, handler, this$static.keyUp.associatedType);
}

function $addColumn(this$static, column){
  $addColumn_0(this$static, column, this$static.columns.array.length);
  return column;
}

function $addColumn_0(this$static, column, index_0){
  $addColumnSkipSelectionColumnCheck(this$static, column, index_0);
  return column;
}

function $addColumnSkipSelectionColumnCheck(this$static, column, index_0){
  var events, events0, existingColumn;
  $add_5(this$static.columns, index_0, column);
  $addColumn_2(this$static.header_0, column);
  $addColumn_1(this$static.footer, column);
  $setGrid_0(column, this$static);
  for (existingColumn = 0; existingColumn < index_0; existingColumn++) {
    $getColumn(this$static, existingColumn);
  }
  $insertColumns(this$static.escalator.columnConfiguration, index_0, 1);
  !!column.grid && $schedule_0(column.grid.autoColumnWidthsRecalculator);
  events0 = new HashSet;
  $addAll(events0, (events = new HashSet , events));
  $sinkEvents(this$static, events0);
}

function $addDataAvailableHandler(this$static, handler){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Grid$8(this$static, handler));
  return $addHandler_0(this$static, handler, ($clinit_DataAvailableEvent() , TYPE_9));
}

function $addHeaderKeyUpHandler(this$static, handler){
  return $addHandler_0(this$static, handler, this$static.keyUp.associatedType);
}

function $deselect_0(this$static, row){
  if (this$static.selectionModel) {
    return $deselect(this$static.selectionModel, row);
  }
   else {
    throw toJs(new IllegalStateException_0('Unsupported selection model'));
  }
}

function $focus_0(this$static){
  ($clinit_DOM() , this$static.element).focus();
}

function $getColumn(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.columns.array.length) {
    throw toJs(new IllegalStateException_0('Column not found.'));
  }
  return castTo($get_6(this$static.columns, index_0), 14);
}

function $getFirstVisibleRowIndex(this$static){
  var firstRow, firstRowIndex, headerBottom;
  firstRowIndex = $getVisibleRowRange(this$static.escalator).start_0;
  headerBottom = $getAbsoluteBottom(this$static.escalator.header_0.root);
  firstRow = $getRowElement(this$static.escalator.body_0, firstRowIndex);
  while (($clinit_DOMImpl() , impl_0).getAbsoluteTop(firstRow) + ((firstRow.offsetHeight || 0) | 0) < headerBottom) {
    firstRow = $getRowElement(this$static.escalator.body_0, ++firstRowIndex);
  }
  return firstRowIndex;
}

function $getLastVisibleRowIndex(this$static){
  var footerTop, lastRow, lastRowIndex;
  lastRowIndex = $getVisibleRowRange(this$static.escalator).end;
  footerTop = $getAbsoluteTop(this$static.escalator.footer.root);
  do {
    lastRow = $getRowElement(this$static.escalator.body_0, --lastRowIndex);
  }
   while (($clinit_DOMImpl() , impl_0).getAbsoluteTop(lastRow) > footerTop);
  return lastRowIndex;
}

function $getSectionFromContainer(this$static, container){
  if (container == this$static.escalator.body_0) {
    return $clinit_GridConstants$Section() , BODY;
  }
   else if (container == this$static.escalator.footer) {
    return $clinit_GridConstants$Section() , FOOTER;
  }
   else if (container == this$static.escalator.header_0) {
    return $clinit_GridConstants$Section() , HEADER;
  }
  return null;
}

function $getVisibleColumn(this$static, index_0){
  var visibleColumns;
  visibleColumns = $getVisibleColumns(this$static);
  if (index_0 < 0 || index_0 >= visibleColumns.coll.size_1()) {
    throw toJs(new IllegalStateException_0('Column not found.'));
  }
  return castTo(visibleColumns.list.get_0(index_0), 14);
}

function $getVisibleColumns(this$static){
  var c, c$iterator, visible;
  visible = new ArrayList;
  for (c$iterator = new ArrayList$1(this$static.columns); c$iterator.i < c$iterator.this$01.array.length;) {
    c = castTo($next_4(c$iterator), 14);
    visible.array[visible.array.length] = c;
  }
  return $clinit_Collections() , new Collections$UnmodifiableRandomAccessList(visible);
}

function $handleHeaderCellDragStartEvent(this$static, event_0, container){
  if (!this$static.columnReorderingAllowed) {
    return false;
  }
  if (container != this$static.escalator.header_0) {
    return false;
  }
  if (this$static.eventCell.columnIndex < this$static.escalator.columnConfiguration.frozenColumns) {
    return false;
  }
  $clinit_DOM();
  if ($eventGetTypeInt(($clinit_DOMImpl() , event_0).type) == 4 && impl_0.eventGetButton(event_0) == 1 || $eventGetTypeInt(event_0.type) == $intern_29) {
    $onDragStartOnDraggableElement(this$static.dndHandler, event_0, this$static.headerCellDndCallback);
    impl_0.eventPreventDefault(event_0);
    impl_0.eventStopPropagation(event_0);
    return true;
  }
  return false;
}

function $handleHeaderDefaultRowEvent(this$static, container){
  if (container != this$static.escalator.header_0) {
    return false;
  }
  if (!$getRow_0(this$static.header_0, this$static.eventCell.rowReference.rowIndex).isDefault) {
    return false;
  }
  return false;
}

function $handleRendererEvent(this$static, event_0, container){
  if (container == this$static.escalator.body_0) {
    $equals_0(($clinit_DOMImpl() , event_0).type, 'keydown') && (event_0.keyCode | 0) == 13;
    $equals_0(event_0.type, 'dblclick');
  }
  return false;
}

function $isElementInChildWidget(this$static, e){
  var w;
  w = findWidget(e);
  if (w == this$static) {
    return false;
  }
  while (!!w && w != this$static) {
    w = w.parent_0;
  }
  return !!w;
}

function $isOrContainsInSpacer(this$static, node){
  var className, isElement, n;
  n = node;
  while (!!n && n != ($clinit_DOM() , this$static.element)) {
    isElement = !!n && n.nodeType == 1;
    if (isElement) {
      className = n.className || '';
      if ($indexOf_0(className, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-spacer') != -1) {
        return true;
      }
    }
    n = n.parentNode;
  }
  return false;
}

function $isSelected_0(this$static, row){
  return $isSelected(this$static.selectionModel, row);
}

function $onAttach_1(this$static){
  $onAttach_0(this$static);
  this$static.escalator.body_0.rows_0 == 0 && !!this$static.dataSource && $setEscalatorSizeFromDataSource(this$static);
  $schedule_0(this$static.autoColumnWidthsRecalculator);
}

function $refreshBody(this$static){
  $refreshRows(this$static.escalator.body_0, 0, this$static.escalator.body_0.rows_0);
}

function $refreshFooter(this$static){
  $refreshRowContainer(this$static.escalator.footer, this$static.footer);
}

function $refreshHeader(this$static){
  $refreshRowContainer(this$static.escalator.header_0, this$static.header_0);
}

function $refreshRowContainer(rows_0, section){
  var rowDiff, oldScrollPos;
  rowDiff = (section.visible?section.rows_0.array.length:0) - rows_0.rows_0;
  rowDiff > 0?($insertRows(rows_0, 0, rowDiff) , $recalculateElementSizes(rows_0.this$01_0)):rowDiff < 0 && (oldScrollPos = rows_0.this$01_0.verticalScrollbar.scrollPos , $removeRows(rows_0, 0, -rowDiff) , $recalculateElementSizes(rows_0.this$01_0) , $setScrollPos(rows_0.this$01_0.verticalScrollbar, oldScrollPos) , undefined);
  rows_0.rows_0 > 0 && $refreshRows(rows_0, 0, rows_0.rows_0);
}

function $scrollToRow(this$static, rowIndex, destination){
  $scrollToRow_0(this$static, rowIndex, destination, destination == ($clinit_ScrollDestination() , MIDDLE)?0:0);
}

function $scrollToRow_0(this$static, rowIndex, destination, paddingPx){
  var maxsize;
  maxsize = this$static.escalator.body_0.rows_0 - 1;
  if (rowIndex < 0) {
    throw toJs(new IllegalArgumentException('Row index (' + rowIndex + ') is below zero!'));
  }
  if (rowIndex > maxsize) {
    throw toJs(new IllegalArgumentException('Row index (' + rowIndex + ') is above maximum (' + maxsize + ')!'));
  }
  $scrollToRowAndSpacer(this$static.escalator, rowIndex, destination, paddingPx);
}

function $select_2(this$static, row){
  if (this$static.selectionModel) {
    return $select_1(this$static.selectionModel, row);
  }
   else {
    throw toJs(new IllegalStateException_0('Unsupported selection model'));
  }
}

function $setColumnOrder(this$static, orderedColumns){
  var column, column$index, column$iterator, column$max, conf, i_0, newOrder, row, row$iterator, row$iterator0, visibleColumns;
  conf = this$static.escalator.columnConfiguration;
  $removeColumns(conf, conf.columns.array.length);
  newOrder = new ArrayList;
  i_0 = 0;
  for (column$index = 0 , column$max = orderedColumns.length; column$index < column$max; ++column$index) {
    column = orderedColumns[column$index];
    if ($indexOf_3(this$static.columns, column, 0) != -1) {
      newOrder.array[newOrder.array.length] = column;
      ++i_0;
    }
     else {
      throw toJs(new IllegalArgumentException('Given column at index ' + i_0 + ' does not exist in Grid'));
    }
  }
  if (this$static.columns.array.length != newOrder.array.length) {
    $removeAll(this$static.columns, newOrder);
    $addAll_1(newOrder, this$static.columns);
  }
  this$static.columns = newOrder;
  visibleColumns = $getVisibleColumns(this$static);
  $insertColumns(conf, 0, visibleColumns.coll.size_1());
  $setFrozenColumnCount(this$static.escalator.columnConfiguration, 0);
  for (column$iterator = new ArrayList$1(this$static.columns); column$iterator.i < column$iterator.this$01.array.length;) {
    column = castTo($next_4(column$iterator), 14);
    !!column.grid && $schedule_0(column.grid.autoColumnWidthsRecalculator);
  }
  for (row$iterator0 = new ArrayList$1(this$static.header_0.rows_0); row$iterator0.i < row$iterator0.this$01.array.length;) {
    row = castTo($next_4(row$iterator0), 122);
    $calculateColspans(row);
  }
  for (row$iterator = new ArrayList$1(this$static.footer.rows_0); row$iterator.i < row$iterator.this$01.array.length;) {
    throwClassCastExceptionUnlessNull($next_4(row$iterator));
    null.$_nullMethod();
  }
  $updateTogglesOrder(this$static.columnHider);
  $fireEvent_0(this$static, new ColumnReorderEvent);
}

function $setDataSource(this$static, dataSource){
  var previousRowCount;
  $reset(this$static.selectionModel);
  !!this$static.dataSource && (this$static.dataSource.changeHandler = null , undefined);
  this$static.dataSource = dataSource;
  $setDataChangeHandler(dataSource, new Grid$7(this$static));
  previousRowCount = this$static.escalator.body_0.rows_0;
  previousRowCount != 0 && $removeRows(this$static.escalator.body_0, 0, previousRowCount);
  $setEscalatorSizeFromDataSource(this$static);
}

function $setDetailsVisible(this$static, rowIndex, visible){
  var isVisible, rowIndexInteger;
  if (($clinit_DetailsGenerator() , NULL_1) == this$static.detailsGenerator) {
    return;
  }
  rowIndexInteger = valueOf(rowIndex);
  isVisible = $contains_1(this$static.visibleDetails, valueOf(rowIndex));
  if (visible && !isVisible) {
    $setSpacer(this$static.escalator.body_0, rowIndex, 50);
    $add_8(this$static.visibleDetails, rowIndexInteger);
  }
   else if (!visible && isVisible) {
    $setSpacer(this$static.escalator.body_0, rowIndex, -1);
    $remove_15(this$static.visibleDetails, rowIndexInteger);
  }
}

function $setEscalatorSizeFromDataSource(this$static){
  var size_0;
  size_0 = this$static.dataSource.ds.array.length;
  size_0 == -1 && $isAttached(this$static) && (size_0 = $getMaxEscalatorRowCapacity(this$static.escalator.body_0));
  size_0 > 0 && $insertRows(this$static.escalator.body_0, 0, size_0);
}

function $setHeight_2(this$static, height){
  $setHeight_0(this$static.escalator, height);
}

function $setScrollLeft_1(this$static, px){
  $setScrollLeft_0(this$static.escalator, px);
}

function $setScrollTop_1(this$static, px){
  $setScrollTop_0(this$static.escalator, px);
}

function $setSelectionMode(this$static){
  var model;
  model = new SelectionModelSingle;
  !!this$static.selectionModel && $setGrid(this$static.selectionModel, null);
  this$static.selectionModel = model;
  $setGrid(model, this$static);
  $refreshRows(this$static.escalator.body_0, 0, this$static.escalator.body_0.rows_0);
}

function $setStylePrimaryName_9(this$static){
  var rowStyle;
  setStylePrimaryName(($clinit_DOM() , this$static.element), 'v-grid');
  $setStylePrimaryName_2(this$static.escalator, 'v-grid');
  $setStylePrimaryName_10(this$static.editor);
  $setStylePrimaryName_11(this$static.sidebar_0);
  $addStyleName_1(this$static.sidebar_0, 'v-contextmenu');
  rowStyle = getStylePrimaryName(this$static.element) + '-row';
  this$static.rowHasDataStyleName = rowStyle + '-has-data';
  this$static.rowSelectedStyleName = rowStyle + '-selected';
  this$static.rowStripeStyleName = rowStyle + '-stripe';
  this$static.cellFocusStyleName = getStylePrimaryName(this$static.element) + '-cell-focused';
  this$static.rowFocusStyleName = getStylePrimaryName(this$static.element) + '-row-focused';
  if ($isAttached(this$static)) {
    $refreshRowContainer(this$static.escalator.header_0, this$static.header_0);
    $refreshRows(this$static.escalator.body_0, 0, this$static.escalator.body_0.rows_0);
    $refreshRowContainer(this$static.escalator.footer, this$static.footer);
  }
}

function $sinkEvents(this$static, events){
  var eventsToSink, typeInt, typeName, typeName$iterator;
  eventsToSink = 0;
  for (typeName$iterator = events.iterator_0(); typeName$iterator.hasNext_0();) {
    typeName = castToString(typeName$iterator.next_1());
    typeInt = $eventGetTypeInt(($clinit_DOM() , typeName));
    typeInt < 0?sinkBitlessEvent(this$static.element, typeName):(eventsToSink |= typeInt);
  }
  eventsToSink > 0 && (this$static.eventsToSink == -1?sinkEvents(($clinit_DOM() , this$static.element), eventsToSink | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventsToSink));
}

function setCustomStyleName(element){
  $clinit_UIObject();
  var oldStyleName;
  oldStyleName = element['customStyle'] == null?null:String(element['customStyle']);
  if (!equals_6(oldStyleName, null)) {
    oldStyleName != null && ($clinit_String() , oldStyleName).length != 0 && $removeClassName(element, oldStyleName);
    element['customStyle'] = null;
  }
}

function setParent_0(widget, parent_0){
  $clinit_UIObject();
  widget.setParent(parent_0);
}

defineClass(199, 575, $intern_49);
_.doAttachChildren = function doAttachChildren_1(){
  this.sidebar_0.parent_0 == this && (this.sidebar_0.onAttach() , undefined);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  this.sidebar_0.parent_0 == this && (this.sidebar_0.onDetach() , undefined);
}
;
_.focus_1 = function focus_3(){
  $focus_0(this);
}
;
_.iterator_0 = function iterator_6(){
  throw toJs(new UnsupportedOperationException_0('Cannot iterate through widgets in Grid this way'));
}
;
_.onAttach = function onAttach_2(){
  $onAttach_1(this);
}
;
_.onBrowserEvent = function onBrowserEvent_4(event_0){
  var cell, cellElement, colIndex, container, e, eventType, rowIndex, target, navigation;
  if (!this.enabled_0) {
    return;
  }
  eventType = ($clinit_DOMImpl() , event_0).type;
  if ($equals_0(eventType, 'focus') || $equals_0(eventType, 'blur')) {
    $onBrowserEvent(this, event_0);
    this.widget.onBrowserEvent(event_0);
    return;
  }
  target = impl_0.eventGetTarget(event_0);
  if (!is_0(target) || $isOrContainsInSpacer(this, target)) {
    return;
  }
  e = target;
  container = $findRowContainer(this.escalator, e);
  if (!container) {
    if ($equals_0(eventType, 'keydown') || $equals_0(eventType, 'keyup') || $equals_0(eventType, 'keypress')) {
      cell = $getFocusedCell(this.cellFocusHandler);
      container = this.cellFocusHandler.containerWithFocus;
    }
     else {
      if (!!this.editor.editorOverlay && $isOrHasChild(this.editor.editorOverlay, e)) {
        container = this.escalator.body_0;
        rowIndex = this.editor.rowIndex;
        colIndex = $getElementColumn(this.editor, e);
        if (colIndex < 0) {
          return;
        }
        cellElement = container.getRowElement(rowIndex).cells[colIndex];
        cell = new Cell(rowIndex, colIndex, cellElement);
      }
       else {
        if ($isOrHasChild($getElement(this.escalator), e)) {
          $set_1(this.eventCell, new Cell(-1, -1, null), ($clinit_GridConstants$Section() , BODY));
          $onBrowserEvent(this, event_0);
          this.widget.onBrowserEvent(event_0);
        }
        return;
      }
    }
  }
   else {
    cell = container.getCell(e);
    $equals_0(eventType, 'mousedown')?(this.cellOnPrevMouseDown = cell):!cell && $equals_0(eventType, 'click') && (cell = this.cellOnPrevMouseDown);
  }
  $set_1(this.eventCell, cell, $getSectionFromContainer(this, container));
  $onBrowserEvent(this, event_0);
  this.widget.onBrowserEvent(event_0);
  if (!$isElementInChildWidget(this, e)) {
    if ($handleHeaderCellDragStartEvent(this, event_0, container)) {
      return;
    }
    if ($handleHeaderDefaultRowEvent(this, container)) {
      return;
    }
    if ($handleRendererEvent(this, event_0, container)) {
      return;
    }
    if (navigation = new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['keydown', 'click'])) , $indexOf_2(navigation, event_0.type) != -1 && $handleNavigationEvent(this.cellFocusHandler, event_0, this.eventCell) , false) {
      return;
    }
  }
}
;
_.onDetach = function onDetach_2(){
  var details, entry, outerIter, row, row$iterator;
  details = new HashSet_0(this.visibleDetails);
  for (row$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(details.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); row$iterator.val$outerIter2.hasNext;) {
    row = (entry = $next_2(row$iterator.val$outerIter2) , castTo(entry.getKey(), 46)).value_0;
    $setDetailsVisible(this, row, false);
  }
  $onDetach_0(this);
}
;
_.remove = function remove_8(w){
  return false;
}
;
_.setFocus = function setFocus_0(focused){
  focused?(($clinit_DOM() , this.element).focus() , undefined):(($clinit_DOM() , this.element).blur() , undefined);
}
;
_.columnReorderingAllowed = false;
_.dataIsBeingFetched = false;
_.enabled_0 = true;
var Lcom_vaadin_client_widgets_Grid_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid', 199);
function $calculatePossibleDropPositions(this$static){
  var cell, cellColumnIndex, cellColumnRightIndex, cellRange, colspan, column, draggedCellRange, draggedCellRow, draggedColumnIndex, draggedColumnRightIndex, i_0, intersects, isDraggedCellRow, leftBound, position, rightBound, row, row$iterator, rows_0, unavailableColumnDropIndices;
  $clear_2(this$static.possibleDropPositions);
  draggedColumnIndex = this$static.this$01.eventCell.columnIndex;
  draggedCellRow = $getRow_0(this$static.this$01.header_0, this$static.this$01.eventCell.rowReference.rowIndex);
  draggedColumnRightIndex = draggedColumnIndex + $getCell_0(draggedCellRow, this$static.this$01.eventCell.column).colspan;
  draggedCellRange = new Range_0(draggedColumnIndex, draggedColumnRightIndex);
  leftBound = -1;
  rightBound = this$static.this$01.columns.array.length + 1;
  unavailableColumnDropIndices = new HashSet;
  rows_0 = new ArrayList;
  $addAll_1(rows_0, this$static.this$01.header_0.rows_0);
  $addAll_1(rows_0, this$static.this$01.footer.rows_0);
  for (row$iterator = new ArrayList$1(rows_0); row$iterator.i < row$iterator.this$01.array.length;) {
    row = castTo($next_4(row$iterator), 81);
    if ($size(row.cellGroups) == 0) {
      continue;
    }
    isDraggedCellRow = row == draggedCellRow;
    for (cellColumnIndex = 0; cellColumnIndex < this$static.this$01.columns.array.length; cellColumnIndex++) {
      cell = $getCell_0(row, $getColumn(this$static.this$01, cellColumnIndex));
      colspan = cell.colspan;
      if (colspan <= 1) {
        continue;
      }
      cellColumnRightIndex = cellColumnIndex + colspan;
      cellRange = new Range_0(cellColumnIndex, cellColumnRightIndex);
      intersects = draggedCellRange.start_0 < cellRange.end && cellRange.start_0 < draggedCellRange.end;
      if (intersects && !isDraggedCellRow) {
        if ($isSubsetOf(cellRange, draggedCellRange)) {
          cellColumnIndex = cellColumnRightIndex - 1;
          continue;
        }
        if (!$isSubsetOf(draggedCellRange, cellRange)) {
          return;
        }
        cellColumnIndex <= draggedColumnIndex && cellColumnIndex > leftBound && (leftBound = cellColumnIndex);
        cellColumnRightIndex < rightBound && (rightBound = cellColumnRightIndex);
        cellColumnIndex = cellColumnRightIndex - 1;
      }
       else {
        while (colspan > 1) {
          ++cellColumnIndex;
          --colspan;
          $add_8(unavailableColumnDropIndices, valueOf(cellColumnIndex));
        }
      }
    }
  }
  if (leftBound == rightBound - 1) {
    return;
  }
  position = 0;
  for (i_0 = 0; i_0 < this$static.this$01.columns.array.length; i_0++) {
    column = $getColumn(this$static.this$01, i_0);
    !$contains_1(unavailableColumnDropIndices, valueOf(i_0)) && (leftBound != -1?i_0 >= leftBound && i_0 <= rightBound && $put_6(this$static.possibleDropPositions, position, valueOf(i_0)):$put_6(this$static.possibleDropPositions, position, valueOf(i_0)));
    position += $getColumnWidthActual(column.grid.escalator.columnConfiguration, $indexOf_4($getVisibleColumns(column.grid), column));
  }
  leftBound == -1 && $put_6(this$static.possibleDropPositions, position, valueOf(this$static.this$01.columns.array.length));
}

function $getSidebarBoundaryComparedTo(this$static, left){
  var absoluteLeft, diff, sidebarLeft;
  if (this$static.this$01.eventCell.rowReference.rowIndex == 0 && !!this$static.this$01.sidebar_0.parent_0 && !$isOpen(this$static.this$01.sidebar_0)) {
    absoluteLeft = left + $getAbsoluteLeft($getElement(this$static.this$01));
    sidebarLeft = $getAbsoluteLeft($getElement(this$static.this$01.sidebar_0));
    diff = absoluteLeft - sidebarLeft;
    if (diff > 0) {
      return left - diff;
    }
  }
  return $intern_50;
}

function $initHeaderDragElementDOM(this$static){
  var i_0, topOffset;
  if (!this$static.table) {
    this$static.tableHeader = ($clinit_DOM() , $createTHeadElement($doc));
    this$static.dropMarker = $createDivElement($doc);
    $appendChild(this$static.tableHeader, this$static.dropMarker);
    this$static.table = $createTableElement($doc);
    $appendChild(this$static.table, this$static.tableHeader);
    this$static.table.className = 'header-drag-table';
  }
  $setClassName(this$static.tableHeader, this$static.this$01.escalator.header_0.root.className || '');
  $setClassName(this$static.dropMarker, getStylePrimaryName($getStyleElement(this$static.this$01)) + '-drop-marker');
  topOffset = 0;
  for (i_0 = 0; i_0 < this$static.this$01.eventCell.rowReference.rowIndex; i_0++) {
    topOffset += ($getFirstChildElement($getTrByVisualIndex(this$static.this$01.escalator.header_0, i_0)).offsetHeight || 0) | 0;
  }
  this$static.tableHeader.style['top'] = topOffset + ($clinit_Style$Unit() , 'px');
  $appendChild($getElement(this$static.this$01), this$static.table);
  this$static.dropMarkerWidthOffset = getRequiredWidthBoundingClientRectDouble(this$static.dropMarker) / 2;
}

function $onDragUpdate(this$static, e){
  if (e) {
    this$static.clientX_0 = ($clinit_WidgetUtil() , $clinit_WidgetUtil() , $indexOf_0(($clinit_DOMImpl() , e).type, 'touch') != -1?$getClientX(e.changedTouches[0]):toInt32(e.clientX || 0));
    this$static.autoScrollX = 0;
  }
  $resolveDragElementHorizontalPosition(this$static, this$static.clientX_0);
  $updateDragDropMarker(this$static, this$static.clientX_0);
}

function $resolveDragElementHorizontalPosition(this$static, clientX){
  var frozenColumnsWidth, gridBoundary, left, leftBound, rightBound, rightBoundary, scrollLeft, sidebarBoundary;
  left = clientX - $getAbsoluteLeft(this$static.table);
  leftBound = castToDouble(getKeyOrNSE($getFirstEntry(this$static.possibleDropPositions)));
  rightBound = castToDouble(getKeyOrNSE($getLastEntry(this$static.possibleDropPositions)));
  scrollLeft = this$static.this$01.escalator.horizontalScrollbar.scrollPos;
  left + scrollLeft < (checkCriticalNotNull(leftBound) , leftBound)?(left = (checkCriticalNotNull(leftBound) , leftBound) - scrollLeft + this$static.autoScrollX):left + scrollLeft > (checkCriticalNotNull(rightBound) , rightBound) && (left = (checkCriticalNotNull(rightBound) , rightBound) - scrollLeft + this$static.autoScrollX);
  sidebarBoundary = $getSidebarBoundaryComparedTo(this$static, left);
  gridBoundary = getRequiredWidthBoundingClientRectDouble(this$static.this$01.escalator.tableWrapper);
  rightBoundary = $wnd.Math.min(sidebarBoundary, gridBoundary);
  frozenColumnsWidth = round_int(0);
  left = $wnd.Math.max(frozenColumnsWidth, $wnd.Math.min(left, rightBoundary));
  left -= (this$static.dragElement.clientWidth | 0) / 2 | 0;
  this$static.dragElement.style['left'] = left + ($clinit_Style$Unit() , 'px');
}

function $transferCellFocusOnDrop(this$static){
  var adjustedDropIndex, draggedColumnIndex, focusedCell, focusedColumnIndexDOM, focusedRowIndex, rowContainer;
  focusedCell = $getFocusedCell(this$static.this$01.cellFocusHandler);
  focusedColumnIndexDOM = focusedCell.column;
  focusedRowIndex = focusedCell.row;
  draggedColumnIndex = this$static.this$01.eventCell.columnIndex;
  rowContainer = $findRowContainer(this$static.this$01.escalator, focusedCell.element);
  if (this$static.focusedColumnIndex == draggedColumnIndex) {
    adjustedDropIndex = this$static.latestColumnDropIndex > draggedColumnIndex?this$static.latestColumnDropIndex - 1:this$static.latestColumnDropIndex;
    adjustedDropIndex = $indexOf_4($getVisibleColumns(this$static.this$01), $getColumn(this$static.this$01, adjustedDropIndex));
    $setCellFocus(this$static.this$01.cellFocusHandler, focusedRowIndex, adjustedDropIndex, rowContainer);
  }
   else 
    this$static.latestColumnDropIndex <= this$static.focusedColumnIndex && draggedColumnIndex > this$static.focusedColumnIndex?$setCellFocus(this$static.this$01.cellFocusHandler, focusedRowIndex, focusedColumnIndexDOM + 1, rowContainer):this$static.latestColumnDropIndex > this$static.focusedColumnIndex && draggedColumnIndex < this$static.focusedColumnIndex && $setCellFocus(this$static.this$01.cellFocusHandler, focusedRowIndex, focusedColumnIndexDOM - 1, rowContainer);
}

function $updateDragDropMarker(this$static, clientX){
  var cellEdgeOnLeft, cellEdgeOnRight, cursorXCoordinate, diffToLeftEdge, diffToRightEdge, dropMarkerLeft, frozenColumnsWidth, rightBoundaryForDrag, scrollLeft, visibleColumns;
  scrollLeft = this$static.this$01.escalator.horizontalScrollbar.scrollPos;
  cursorXCoordinate = clientX - $getAbsoluteLeft(this$static.this$01.escalator.header_0.root);
  cellEdgeOnRight = copyOf($getNodeAfter(this$static.possibleDropPositions, cursorXCoordinate, true));
  cellEdgeOnLeft = copyOf($getNodeBefore(this$static.possibleDropPositions, cursorXCoordinate));
  diffToRightEdge = !cellEdgeOnRight?$intern_50:checkNotNull(castToDouble(cellEdgeOnRight.key)) - cursorXCoordinate;
  diffToLeftEdge = !cellEdgeOnLeft?$intern_50:cursorXCoordinate - checkNotNull(castToDouble(cellEdgeOnLeft.key));
  dropMarkerLeft = 0 - scrollLeft;
  if (diffToRightEdge > diffToLeftEdge) {
    this$static.latestColumnDropIndex = castTo(cellEdgeOnLeft.value_0, 46).value_0;
    dropMarkerLeft += checkNotNull(castToDouble(cellEdgeOnLeft.key));
  }
   else {
    this$static.latestColumnDropIndex = castTo(cellEdgeOnRight.value_0, 46).value_0;
    dropMarkerLeft += checkNotNull(castToDouble(cellEdgeOnRight.key));
  }
  dropMarkerLeft += this$static.autoScrollX;
  frozenColumnsWidth = 0;
  rightBoundaryForDrag = $getSidebarBoundaryComparedTo(this$static, dropMarkerLeft);
  visibleColumns = $getVisibleColumns(this$static.this$01).coll.size_1();
  this$static.latestColumnDropIndex == visibleColumns && rightBoundaryForDrag < dropMarkerLeft && dropMarkerLeft <= getRequiredWidthBoundingClientRectDouble(this$static.this$01.escalator.tableWrapper)?(dropMarkerLeft = rightBoundaryForDrag - this$static.dropMarkerWidthOffset):(dropMarkerLeft < frozenColumnsWidth || dropMarkerLeft > $wnd.Math.min(rightBoundaryForDrag, getRequiredWidthBoundingClientRectDouble(this$static.this$01.escalator.tableWrapper)) || dropMarkerLeft < 0) && (dropMarkerLeft = -10000000);
  this$static.dropMarker.style['left'] = dropMarkerLeft + ($clinit_Style$Unit() , 'px');
}

function Grid$1(this$0){
  this.this$01 = this$0;
  this.autoScrollerCallback = new Grid$1$1(this);
  this.possibleDropPositions = new TreeMap;
}

defineClass(236, 1, {}, Grid$1);
_.onDragCancel = function onDragCancel_0(){
  !this.columnSortPreventRegistration && (this.columnSortPreventRegistration = addNativePreviewHandler(new Grid$1$2(this)));
  $stop(this.this$01.autoScroller);
}
;
_.onDragEnd = function onDragEnd_0(){
  $removeFromParent(this.table);
  $removeFromParent(this.dragElement);
  $removeClassName(this.this$01.eventCell.element, 'dragged');
}
;
_.onDragStart = function onDragStart_0(e){
  $calculatePossibleDropPositions(this);
  if (this.possibleDropPositions.size_0 == 0) {
    return false;
  }
  $initHeaderDragElementDOM(this);
  this.dragElement = ($clinit_DOM() , this.this$01.eventCell.element.cloneNode(true));
  this.dragElement.style['width'] = '';
  this.dropMarker.style['height'] = $getHeight(this.dragElement.style);
  $appendChild(this.tableHeader, this.dragElement);
  $addClassName(this.this$01.eventCell.element, 'dragged');
  $addClassName(this.dragElement, 'dragged-column-header');
  this.this$01.autoScroller.scrollAreaPX = 60;
  $start(this.this$01.autoScroller, e, ($clinit_AutoScroller$ScrollAxis() , HORIZONTAL), this.autoScrollerCallback);
  return true;
}
;
_.onDragUpdate = function onDragUpdate_0(e){
  $onDragUpdate(this, e);
}
;
_.onDrop = function onDrop_0(){
  var array, colspan, columns, draggedColumnIndex, focusedCell, reordered;
  draggedColumnIndex = this.this$01.eventCell.columnIndex;
  colspan = castTo($getCell_0($getRow_0(this.this$01.header_0, this.this$01.eventCell.rowReference.rowIndex), this.this$01.eventCell.column), 82).colspan;
  if (this.latestColumnDropIndex != draggedColumnIndex && this.latestColumnDropIndex != draggedColumnIndex + colspan) {
    columns = unmodifiableList(new ArrayList_1(this.this$01.columns));
    reordered = new ArrayList;
    if (draggedColumnIndex < this.latestColumnDropIndex) {
      $addAll_1(reordered, new Collections$UnmodifiableList(columns.list.subList(0, draggedColumnIndex)));
      $addAll_1(reordered, $subList(columns, draggedColumnIndex + colspan, this.latestColumnDropIndex));
      $addAll_1(reordered, new Collections$UnmodifiableList(columns.list.subList(draggedColumnIndex, draggedColumnIndex + colspan)));
      $addAll_1(reordered, $subList(columns, this.latestColumnDropIndex, columns.coll.size_1()));
    }
     else {
      $addAll_1(reordered, $subList(columns, 0, this.latestColumnDropIndex));
      $addAll_1(reordered, new Collections$UnmodifiableList(columns.list.subList(draggedColumnIndex, draggedColumnIndex + colspan)));
      $addAll_1(reordered, $subList(columns, this.latestColumnDropIndex, draggedColumnIndex));
      $addAll_1(reordered, $subList(columns, draggedColumnIndex + colspan, columns.coll.size_1()));
    }
    $remove_11(reordered, this.this$01.selectionColumn);
    focusedCell = $getFocusedCell(this.this$01.cellFocusHandler);
    this.focusedColumnIndex = $indexOf_4(unmodifiableList(new ArrayList_1(this.this$01.columns)), $getVisibleColumn(this.this$01, focusedCell.column));
    array = castTo($toArray_1(reordered, initUnidimensionalArray(Lcom_vaadin_client_widgets_Grid$Column_2_classLit, {609:1, 3:1}, 14, reordered.array.length, 0, 1)), 609);
    $setColumnOrder(this.this$01, array);
    $transferCellFocusOnDrop(this);
  }
}
;
_.autoScrollX = 0;
_.clientX_0 = 0;
_.dropMarkerWidthOffset = 0;
_.focusedColumnIndex = 0;
_.latestColumnDropIndex = 0;
var Lcom_vaadin_client_widgets_Grid$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/1', 236);
function $onAutoScroll(this$static, scrollDiff){
  this$static.this$11.autoScrollX = scrollDiff;
  $onDragUpdate(this$static.this$11, null);
}

function $onAutoScrollReachedMax(this$static){
  this$static.this$11.autoScrollX = 0;
  $updateDragDropMarker(this$static.this$11, this$static.this$11.clientX_0);
}

function $onAutoScrollReachedMin(this$static){
  this$static.this$11.autoScrollX = 0;
  $updateDragDropMarker(this$static.this$11, this$static.this$11.clientX_0);
}

function Grid$1$1(this$1){
  this.this$11 = this$1;
}

defineClass(237, 1, {}, Grid$1$1);
var Lcom_vaadin_client_widgets_Grid$1$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/1/1', 237);
function Grid$1$2(this$1){
  this.this$11 = this$1;
}

defineClass(238, 1, $intern_40, Grid$1$2);
_.onPreviewNativeEvent = function onPreviewNativeEvent_4(event_0){
  if ($getTypeInt(event_0.nativeEvent) == 1) {
    event_0.isCanceled = true;
    $preventDefault(event_0.nativeEvent);
    $removeHandler(this.this$11.columnSortPreventRegistration.real);
    this.this$11.columnSortPreventRegistration = null;
  }
}
;
var Lcom_vaadin_client_widgets_Grid$1$2_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/1/2', 238);
function Grid$2(this$0){
  this.this$01 = this$0;
}

defineClass(239, 1, $intern_46, Grid$2);
_.onScroll = function onScroll_3(event_0){
  $fireEvent_0(this.this$01, new ScrollEvent);
}
;
var Lcom_vaadin_client_widgets_Grid$2_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/2', 239);
function $onRowVisibilityChange(this$static, event_0){
  if (!!this$static.this$01.dataSource && this$static.this$01.dataSource.ds.array.length != 0) {
    this$static.this$01.dataIsBeingFetched = true;
    $ensureAvailability(this$static.this$01.dataSource, event_0.visibleRows.start_0, $length_0(event_0.visibleRows));
  }
}

function Grid$3(this$0){
  this.this$01 = this$0;
}

defineClass(240, 1, {17:1, 616:1}, Grid$3);
var Lcom_vaadin_client_widgets_Grid$3_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/3', 240);
function Grid$4(this$0){
  this.this$01 = this$0;
}

defineClass(241, 1, {17:1, 617:1}, Grid$4);
var Lcom_vaadin_client_widgets_Grid$4_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/4', 241);
function Grid$5(this$0){
  this.this$01 = this$0;
}

defineClass(242, 1, {17:1, 180:1, 559:1, 611:1}, Grid$5);
_.onKeyUp = function onKeyUp_0(event_0){
  var lastArg;
  if ($getKeyCode(event_0.nativeEvent) != 13) {
    return;
  }
  $getRow_0(this.this$01.header_0, event_0.targetCell.rowReference.rowIndex).isDefault && $sort(this.this$01.sorter, (lastArg = event_0.targetCell.column , $getShiftKey(event_0.nativeEvent) , lastArg));
}
;
var Lcom_vaadin_client_widgets_Grid$5_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/5', 242);
function Grid$6(this$0){
  this.this$01 = this$0;
}

defineClass(243, 1, $intern_48, Grid$6);
_.onDataAvailable = function onDataAvailable_0(event_0){
  this.this$01.dataIsBeingFetched = false;
}
;
var Lcom_vaadin_client_widgets_Grid$6_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/6', 243);
function $dataAdded(this$static, firstIndex){
  var added;
  $insertRows(this$static.this$01.escalator.body_0, firstIndex, 1);
  added = withLength(firstIndex, 1);
  $rowsAddedToBody(this$static.this$01.cellFocusHandler, added);
}

function $dataAvailable(this$static, firstIndex, numberOfItems){
  this$static.this$01.currentDataAvailable = withLength(firstIndex, numberOfItems);
  $fireEvent_0(this$static.this$01, new DataAvailableEvent(this$static.this$01.currentDataAvailable));
}

function $dataRemoved(this$static, firstIndex){
  var removed;
  $removeRows(this$static.this$01.escalator.body_0, firstIndex, 1);
  removed = withLength(firstIndex, 1);
  $rowsRemovedFromBody(this$static.this$01.cellFocusHandler, removed);
}

function Grid$7(this$0){
  this.this$01 = this$0;
}

defineClass(244, 1, {}, Grid$7);
var Lcom_vaadin_client_widgets_Grid$7_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/7', 244);
function Grid$8(this$0, val$handler){
  this.this$01 = this$0;
  this.val$handler2 = val$handler;
}

defineClass(245, 1, {}, Grid$8);
_.execute_1 = function execute_21(){
  this.this$01.dataIsBeingFetched || this.val$handler2.onDataAvailable(new DataAvailableEvent(this.this$01.currentDataAvailable));
}
;
var Lcom_vaadin_client_widgets_Grid$8_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/8', 245);
function $applyColumnWidths(this$static){
  var actualWidth, column, columns, constrainedWidths, hasAutoWidth, index_0, index0, maxWidth, minWidth, selfWidths;
  selfWidths = new LinkedHashMap;
  columns = $getVisibleColumns(this$static.this$01);
  for (index0 = 0; index0 < columns.coll.size_1(); index0++) {
    $put_5(selfWidths, valueOf(index0), castTo(columns.list.get_0(index0), 14).widthUser);
  }
  $setColumnWidths(this$static.this$01.escalator.columnConfiguration, selfWidths);
  constrainedWidths = new LinkedHashMap;
  for (index_0 = 0; index_0 < columns.coll.size_1(); index_0++) {
    column = castTo(columns.list.get_0(index_0), 14);
    hasAutoWidth = column.widthUser < 0;
    if (!hasAutoWidth) {
      continue;
    }
    actualWidth = $getColumnWidthActual(column.grid.escalator.columnConfiguration, $indexOf_4($getVisibleColumns(column.grid), column));
    actualWidth < (minWidth = column.minimumWidthPx , minWidth >= 0?minWidth:4.9E-324)?$put_5(constrainedWidths, valueOf(index_0), column.minimumWidthPx):actualWidth > (maxWidth = column.maximumWidthPx , maxWidth >= 0?maxWidth:$intern_50) && $put_5(constrainedWidths, valueOf(index_0), column.maximumWidthPx);
  }
  $setColumnWidths(this$static.this$01.escalator.columnConfiguration, constrainedWidths);
}

function $applyColumnWidthsWithExpansion(this$static){
  var aColumnHasMaxedOut, autoWidth, colIndex, column, column$iterator, column$iterator0, column$iterator1, column$iterator2, column$iterator3, column$iterator4, columnIndex, columnSizes, columnsToExpand, currentWidth, defaultExpandRatios, entry, expandRatio, expandRatio0, expandedWidth, hasAutoWidth, i_0, isFixedWidth, leftOver, maxWidth, maxWidth0, minWidth, minWidth0, minWidthsCausedReflows, newWidth, nonFixedColumns, outerIter, outerIter0, outerIter1, pixelsToDistribute, pixelsToRemove, pixelsToRemoveFromOtherColumns, pixelsToRemovePerRatio, reservedPixels, shouldExpand, totalRatios, totalWidth, visibleColumns, widthAsIs, widthFixed, widthPerRatio, widthPerRatio0;
  defaultExpandRatios = true;
  totalRatios = 0;
  reservedPixels = 0;
  columnsToExpand = new HashSet;
  nonFixedColumns = new ArrayList;
  columnSizes = new HashMap;
  visibleColumns = $getVisibleColumns(this$static.this$01);
  for (column$iterator0 = new Collections$UnmodifiableCollectionIterator(visibleColumns.coll.iterator_0()); column$iterator0.it.hasNext_0();) {
    column = castTo(column$iterator0.it.next_1(), 14);
    widthAsIs = column.widthUser;
    isFixedWidth = widthAsIs >= 0;
    widthFixed = $wnd.Math.max($wnd.Math.min((maxWidth = column.maximumWidthPx , maxWidth >= 0?maxWidth:$intern_50), widthAsIs), column.minimumWidthPx);
    defaultExpandRatios = defaultExpandRatios && (column.expandRatio == -1 || column == this$static.this$01.selectionColumn);
    if (isFixedWidth) {
      $put_2(columnSizes, valueOf(visibleColumns.list.indexOf_0(column)), widthFixed);
      reservedPixels += widthFixed;
    }
     else {
      nonFixedColumns.array[nonFixedColumns.array.length] = column;
      $put_2(columnSizes, valueOf(visibleColumns.list.indexOf_0(column)), -1);
    }
  }
  $setColumnWidths(this$static.this$01.escalator.columnConfiguration, columnSizes);
  for (column$iterator1 = new ArrayList$1(nonFixedColumns); column$iterator1.i < column$iterator1.this$01.array.length;) {
    column = castTo($next_4(column$iterator1), 14);
    expandRatio = defaultExpandRatios?1:column.expandRatio;
    maxWidth0 = (maxWidth = column.maximumWidthPx , maxWidth >= 0?maxWidth:$intern_50);
    newWidth = $wnd.Math.min(maxWidth0, $getColumnWidthActual(column.grid.escalator.columnConfiguration, $indexOf_4($getVisibleColumns(column.grid), column)));
    shouldExpand = newWidth < maxWidth0 && expandRatio > 0 && column != this$static.this$01.selectionColumn;
    if (shouldExpand) {
      totalRatios += expandRatio;
      $put_2(columnsToExpand.map_0, column, columnsToExpand);
    }
    reservedPixels += newWidth;
    $put_2(columnSizes, valueOf(visibleColumns.list.indexOf_0(column)), newWidth);
  }
  pixelsToDistribute = getRequiredWidthBoundingClientRectDouble(this$static.this$01.escalator.tableWrapper) - reservedPixels;
  if (pixelsToDistribute <= 0 || totalRatios <= 0) {
    pixelsToDistribute <= 0 && $setColumnWidths(this$static.this$01.escalator.columnConfiguration, columnSizes);
    return;
  }
  do {
    aColumnHasMaxedOut = false;
    widthPerRatio0 = pixelsToDistribute / totalRatios;
    i_0 = (outerIter0 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(columnsToExpand.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter0));
    while (i_0.val$outerIter2.hasNext) {
      column = (entry = $next_2(i_0.val$outerIter2) , castTo(entry.getKey(), 14));
      expandRatio0 = (expandRatio = column.expandRatio , expandRatio > 0?expandRatio:expandRatio < 0?1:0);
      columnIndex = visibleColumns.list.indexOf_0(column);
      autoWidth = checkNotNull(castToDouble($get_3(columnSizes, valueOf(columnIndex))));
      maxWidth0 = (maxWidth = column.maximumWidthPx , maxWidth >= 0?maxWidth:$intern_50);
      expandedWidth = autoWidth + widthPerRatio0 * expandRatio0;
      if (maxWidth0 <= expandedWidth) {
        $remove_7(i_0.val$outerIter2);
        totalRatios -= expandRatio0;
        aColumnHasMaxedOut = true;
        pixelsToDistribute -= maxWidth0 - autoWidth;
        $put_2(columnSizes, valueOf(columnIndex), maxWidth0);
      }
    }
  }
   while (aColumnHasMaxedOut);
  if (totalRatios <= 0 && $size(columnsToExpand.map_0) == 0) {
    $setColumnWidths(this$static.this$01.escalator.columnConfiguration, columnSizes);
    return;
  }
  leftOver = 0;
  if ($isIE8(($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1)) || $isIE9((!instance_1 && (instance_1 = new BrowserInfo) , instance_1)) || toNative(getBrowserString()).indexOf('PhantomJS') != -1) {
    widthPerRatio = round_int(pixelsToDistribute / totalRatios);
    leftOver = round_int(pixelsToDistribute - widthPerRatio * totalRatios);
  }
   else {
    widthPerRatio = pixelsToDistribute / totalRatios;
  }
  for (column$iterator2 = (outerIter1 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(columnsToExpand.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter1)); column$iterator2.val$outerIter2.hasNext;) {
    column = (entry = $next_2(column$iterator2.val$outerIter2) , castTo(entry.getKey(), 14));
    expandRatio0 = (expandRatio = column.expandRatio , expandRatio > 0?expandRatio:expandRatio < 0?1:0);
    columnIndex = visibleColumns.list.indexOf_0(column);
    autoWidth = checkNotNull(castToDouble($get_3(columnSizes, valueOf(columnIndex))));
    totalWidth = autoWidth + widthPerRatio * expandRatio0;
    if (leftOver > 0) {
      totalWidth += 1;
      --leftOver;
    }
    $put_2(columnSizes, valueOf(columnIndex), totalWidth);
    totalRatios -= expandRatio0;
  }
  do {
    minWidthsCausedReflows = false;
    pixelsToRemoveFromOtherColumns = 0;
    for (column$iterator3 = new Collections$UnmodifiableCollectionIterator(visibleColumns.coll.iterator_0()); column$iterator3.it.hasNext_0();) {
      column = castTo(column$iterator3.it.next_1(), 14);
      minWidth0 = (minWidth = column.minimumWidthPx , minWidth >= 0?minWidth:4.9E-324);
      columnIndex = visibleColumns.list.indexOf_0(column);
      currentWidth = checkNotNull(castToDouble($get_3(columnSizes, valueOf(columnIndex))));
      hasAutoWidth = column.widthUser < 0;
      if (hasAutoWidth && currentWidth < minWidth0) {
        $put_2(columnSizes, valueOf(columnIndex), minWidth0);
        pixelsToRemoveFromOtherColumns += minWidth0 - currentWidth;
        minWidthsCausedReflows = true;
        $remove_6(columnsToExpand.map_0, column) != null;
      }
    }
    totalRatios = 0;
    for (column$iterator4 = (outerIter0 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(columnsToExpand.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter0)); column$iterator4.val$outerIter2.hasNext;) {
      column = (entry = $next_2(column$iterator4.val$outerIter2) , castTo(entry.getKey(), 14));
      totalRatios += (expandRatio = column.expandRatio , expandRatio > 0?expandRatio:expandRatio < 0?1:0);
    }
    pixelsToRemovePerRatio = pixelsToRemoveFromOtherColumns / totalRatios;
    for (column$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(columnsToExpand.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); column$iterator.val$outerIter2.hasNext;) {
      column = (entry = $next_2(column$iterator.val$outerIter2) , castTo(entry.getKey(), 14));
      pixelsToRemove = pixelsToRemovePerRatio * (expandRatio = column.expandRatio , expandRatio > 0?expandRatio:expandRatio < 0?1:0);
      colIndex = visibleColumns.list.indexOf_0(column);
      $put_2(columnSizes, valueOf(colIndex), checkNotNull(castToDouble($get_3(columnSizes, valueOf(colIndex)))) - pixelsToRemove);
    }
  }
   while (minWidthsCausedReflows);
  $setColumnWidths(this$static.this$01.escalator.columnConfiguration, columnSizes);
}

function $calculate(this$static){
  this$static.isScheduled = false;
  this$static.rescheduleCount = 0;
  $columnsAreGuaranteedToBeWiderThanGrid(this$static)?$applyColumnWidths(this$static):$applyColumnWidthsWithExpansion(this$static);
  getRequiredWidthBoundingClientRectDouble(this$static.this$01.escalator.tableWrapper);
}

function $columnsAreGuaranteedToBeWiderThanGrid(this$static){
  var column, column$iterator, freeSpace;
  freeSpace = getRequiredWidthBoundingClientRectDouble(this$static.this$01.escalator.tableWrapper);
  for (column$iterator = new Collections$UnmodifiableCollectionIterator($getVisibleColumns(this$static.this$01).coll.iterator_0()); column$iterator.it.hasNext_0();) {
    column = castTo(column$iterator.it.next_1(), 14);
    column.widthUser >= 0?(freeSpace -= column.widthUser):column.minimumWidthPx >= 0 && (freeSpace -= column.minimumWidthPx);
  }
  return freeSpace < 0;
}

function $schedule_0(this$static){
  if (!this$static.isScheduled && $isAttached(this$static.this$01)) {
    this$static.isScheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static.calculateCommand);
  }
}

function Grid$AutoColumnWidthsRecalculator(this$0){
  this.this$01 = this$0;
  this.calculateCommand = new Grid$AutoColumnWidthsRecalculator$1(this);
}

defineClass(212, 1, {}, Grid$AutoColumnWidthsRecalculator);
_.isScheduled = false;
_.rescheduleCount = 0;
var Lcom_vaadin_client_widgets_Grid$AutoColumnWidthsRecalculator_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/AutoColumnWidthsRecalculator', 212);
function Grid$AutoColumnWidthsRecalculator$1(this$1){
  this.this$11 = this$1;
}

defineClass(224, 1, {}, Grid$AutoColumnWidthsRecalculator$1);
_.execute_1 = function execute_22(){
  if (!this.this$11.isScheduled) {
    return;
  }
  if (this.this$11.this$01.header_0.markAsDirty) {
    if (this.this$11.rescheduleCount < 10) {
      $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this);
      ++this.this$11.rescheduleCount;
    }
     else {
      this.this$11.rescheduleCount = 0;
      $scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), this);
    }
  }
   else 
    this.this$11.this$01.dataIsBeingFetched?$scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), this):$calculate(this.this$11);
}
;
var Lcom_vaadin_client_widgets_Grid$AutoColumnWidthsRecalculator$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/AutoColumnWidthsRecalculator/1', 224);
function Grid$BodyUpdater(this$0){
  this.this$01 = this$0;
}

defineClass(217, 1, {}, Grid$BodyUpdater);
_.postAttach = function postAttach_0(row, attachedCells){
  var cell, cell$iterator;
  for (cell$iterator = attachedCells.iterator_0(); cell$iterator.hasNext_0();) {
    cell = castTo(cell$iterator.next_1(), 36);
    $getVisibleColumn(this.this$01, cell.column);
  }
}
;
_.postDetach = function postDetach_0(row, detachedCells){
  var cell, cell$iterator, rowIndex;
  rowIndex = row.row;
  $set_3(this.this$01.rowReference, rowIndex, null);
  for (cell$iterator = detachedCells.iterator_0(); cell$iterator.hasNext_0();) {
    cell = castTo(cell$iterator.next_1(), 36);
    $getVisibleColumn(this.this$01, cell.column);
  }
}
;
_.preAttach = function preAttach_0(row, cellsToAttach){
  var cell, cell$iterator, rowIndex;
  rowIndex = row.row;
  $set_3(this.this$01.rowReference, rowIndex, $getRow(this.this$01.dataSource, rowIndex));
  for (cell$iterator = cellsToAttach.iterator_0(); cell$iterator.hasNext_0();) {
    cell = castTo(cell$iterator.next_1(), 36);
    $getVisibleColumn(this.this$01, cell.column);
  }
}
;
_.preDetach = function preDetach_0(row, cellsToDetach){
  var cell, cell$iterator;
  for (cell$iterator = new FlyweightRow$CellIterator(new AbstractList$SubList(cellsToDetach.this$01.cells_0, cellsToDetach.val$offset2, cellsToDetach.val$offset2 + cellsToDetach.val$numberOfCells3), true); cell$iterator.cursor + cell$iterator.skipNext < cell$iterator.cells_0.array.length;) {
    cell = $next_1(cell$iterator);
    $getVisibleColumn(this.this$01, cell.column);
  }
}
;
_.update = function update_0(row, cellsToUpdate){
  var cell, cell$iterator, column, columnIndex, e, hasData, isEvenIndex, renderer, rowData, rowElement, rowIndex, usedToHaveData, value_0;
  rowIndex = row.row;
  rowElement = row.element;
  rowData = $getRow(this.this$01.dataSource, rowIndex);
  hasData = rowData != null;
  usedToHaveData = $hasClassName(rowElement, this.this$01.rowHasDataStyleName);
  usedToHaveData != hasData && setStyleName(rowElement, this.this$01.rowHasDataStyleName, hasData);
  isEvenIndex = row.row % 2 == 0;
  setStyleName(rowElement, this.this$01.rowStripeStyleName, !isEvenIndex);
  $set_3(this.this$01.rowReference, rowIndex, rowData);
  if (hasData) {
    setStyleName(rowElement, this.this$01.rowSelectedStyleName, $isSelected_0(this.this$01, rowData));
    setCustomStyleName(rowElement);
  }
   else if (usedToHaveData) {
    setStyleName(rowElement, this.this$01.rowSelectedStyleName, false);
    setCustomStyleName(rowElement);
  }
  $updateFocusedRowStyle(this.this$01.cellFocusHandler, row);
  for (cell$iterator = cellsToUpdate.iterator_0(); cell$iterator.hasNext_0();) {
    cell = castTo(cell$iterator.next_1(), 36);
    column = $getVisibleColumn(this.this$01, cell.column);
    columnIndex = $indexOf_4(unmodifiableList(new ArrayList_1(this.this$01.columns)), column);
    $updateFocusedCellStyle(this.this$01.cellFocusHandler, cell, this.this$01.escalator.body_0);
    (hasData || usedToHaveData) && setCustomStyleName(cell.element);
    renderer = column.bodyRenderer;
    try {
      $set_2(this.this$01.rendererCellReference, cell, columnIndex, column);
      if (hasData) {
        value_0 = column.getValue(rowData);
        $render(renderer, this.this$01.rendererCellReference, value_0);
      }
       else {
        $removeAllChildren(cell.element);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 13)) {
        e = $e0;
        $actuallyLog(($clinit_UIObject() , getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Grid_2_classLit) , Lcom_vaadin_client_widgets_Grid_2_classLit.typeName))), ($clinit_Level() , SEVERE), 'Error rendering cell in column ' + cell.column, e);
      }
       else 
        throw toJs($e0);
    }
  }
}
;
var Lcom_vaadin_client_widgets_Grid$BodyUpdater_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/BodyUpdater', 217);
function $getFocusedCell(this$static){
  return new Cell(this$static.rowWithFocus, this$static.cellFocusRange.start_0, this$static.cellWithFocusStyle);
}

function $getNextContainer(this$static, current){
  if (current == this$static.this$01.escalator.header_0) {
    current = this$static.this$01.escalator.body_0;
  }
   else if (current == this$static.this$01.escalator.body_0) {
    current = this$static.this$01.escalator.footer;
  }
   else {
    return current;
  }
  if (current.getRowCount() == 0) {
    return $getNextContainer(this$static, current);
  }
  return current;
}

function $getPreviousContainer(this$static, current){
  if (current == this$static.this$01.escalator.footer) {
    current = this$static.this$01.escalator.body_0;
  }
   else if (current == this$static.this$01.escalator.body_0) {
    current = this$static.this$01.escalator.header_0;
  }
   else {
    return current;
  }
  if (current.getRowCount() == 0) {
    return $getPreviousContainer(this$static, current);
  }
  return current;
}

function $handleNavigationEvent(this$static, event_0, cell){
  var down, firstVisible, lastVisible, moveFocusBy, newColumn, newContainer, newRow;
  if ($equals_0(($clinit_DOMImpl() , event_0).type, 'click')) {
    $setCellFocus(this$static, cell.rowReference.rowIndex, cell.columnIndexDOM, $findRowContainer(this$static.this$01.escalator, cell.element));
    $getElement(this$static.this$01).focus();
  }
   else if ($equals_0(event_0.type, 'keydown')) {
    newRow = this$static.rowWithFocus;
    newContainer = this$static.containerWithFocus;
    newColumn = this$static.cellFocusRange.start_0;
    switch (event_0.keyCode | 0) {
      case 40:
        ++newRow;
        break;
      case 38:
        --newRow;
        break;
      case 39:
        if (this$static.cellFocusRange.end >= $getVisibleColumns(this$static.this$01).coll.size_1()) {
          return;
        }

        newColumn = this$static.cellFocusRange.end;
        break;
      case 37:
        if (newColumn == 0) {
          return;
        }

        --newColumn;
        break;
      case 9:
        event_0.shiftKey?(newContainer = $getPreviousContainer(this$static, this$static.containerWithFocus)):(newContainer = $getNextContainer(this$static, this$static.containerWithFocus));
        if (newContainer == this$static.containerWithFocus) {
          return;
        }

        break;
      case 36:
        newContainer.getRowCount() > 0 && (newRow = 0);
        break;
      case 35:
        newContainer.getRowCount() > 0 && (newRow = newContainer.getRowCount() - 1);
        break;
      case 34:
      case 33:
        if (newContainer.getRowCount() > 0) {
          down = (event_0.keyCode | 0) == 34;
          firstVisible = $getFirstVisibleRowIndex(this$static.this$01);
          lastVisible = $getLastVisibleRowIndex(this$static.this$01);
          (newRow < firstVisible || newRow > lastVisible) && (newRow = down?lastVisible:firstVisible);
          moveFocusBy = 1 > lastVisible - firstVisible - 1?1:lastVisible - firstVisible - 1;
          moveFocusBy *= down?1:-1;
          newRow += moveFocusBy;
          newRow = max_0(0, min_0(newContainer.getRowCount() - 1, newRow));
        }

        break;
      default:return;
    }
    if (newContainer != this$static.containerWithFocus) {
      newContainer == this$static.this$01.escalator.body_0?(newRow = this$static.lastFocusedBodyRow):newContainer == this$static.this$01.escalator.header_0?(newRow = this$static.lastFocusedHeaderRow):(newRow = this$static.lastFocusedFooterRow);
    }
     else if (newRow < 0) {
      newContainer = $getPreviousContainer(this$static, newContainer);
      newContainer == this$static.containerWithFocus?(newRow = 0):newContainer == this$static.this$01.escalator.body_0?(newRow = $getLastVisibleRowIndex(this$static.this$01)):(newRow = newContainer.getRowCount() - 1);
    }
     else if (newRow >= this$static.containerWithFocus.getRowCount()) {
      newContainer = $getNextContainer(this$static, newContainer);
      newContainer == this$static.containerWithFocus?(newRow = this$static.containerWithFocus.getRowCount() - 1):newContainer == this$static.this$01.escalator.body_0?(newRow = $getFirstVisibleRowIndex(this$static.this$01)):(newRow = 0);
    }
    if (newContainer.getRowCount() == 0) {
      return;
    }
    impl_0.eventPreventDefault(event_0);
    impl_0.eventStopPropagation(event_0);
    $setCellFocus(this$static, newRow, newColumn, newContainer);
  }
}

function $refreshRow_0(this$static, row){
  this$static.containerWithFocus.refreshRows(row, 1);
}

function $rowsAddedToBody(this$static, added){
  var bodyHasFocus, insertionIsAboveFocusedCell;
  bodyHasFocus = this$static.containerWithFocus == this$static.this$01.escalator.body_0;
  insertionIsAboveFocusedCell = added.start_0 <= this$static.rowWithFocus;
  if (bodyHasFocus && insertionIsAboveFocusedCell) {
    this$static.rowWithFocus += added.end - added.start_0;
    this$static.rowWithFocus = min_0(this$static.rowWithFocus, this$static.this$01.escalator.body_0.rows_0 - 1);
    $refreshRow_0(this$static, this$static.rowWithFocus);
  }
}

function $rowsRemovedFromBody(this$static, removed){
  if (this$static.containerWithFocus != this$static.this$01.escalator.body_0) {
    return;
  }
   else if ($contains(removed, this$static.rowWithFocus)) {
    if (this$static.containerWithFocus.getRowCount() > removed.end) {
      this$static.rowWithFocus = removed.start_0;
    }
     else if (removed.start_0 > 0) {
      this$static.rowWithFocus = removed.start_0 - 1;
    }
     else {
      if (this$static.this$01.escalator.header_0.rows_0 > 0) {
        this$static.rowWithFocus = min_0(this$static.lastFocusedHeaderRow, this$static.this$01.escalator.header_0.rows_0 - 1);
        this$static.containerWithFocus = this$static.this$01.escalator.header_0;
      }
       else if (this$static.this$01.escalator.footer.rows_0 > 0) {
        this$static.rowWithFocus = min_0(this$static.lastFocusedFooterRow, this$static.this$01.escalator.footer.rows_0 - 1);
        this$static.containerWithFocus = this$static.this$01.escalator.footer;
      }
    }
  }
   else {
    if (removed.start_0 > this$static.rowWithFocus) {
      return;
    }
    this$static.rowWithFocus = this$static.rowWithFocus - (removed.end - removed.start_0);
  }
  $refreshRow_0(this$static, this$static.rowWithFocus);
}

function $setCellFocus(this$static, rowIndex, columnIndexDOM, container){
  var cell, cellRange, colSpan, columnIndex, i_0, oldContainer, oldRange, oldRow;
  if (rowIndex == this$static.rowWithFocus && $contains(this$static.cellFocusRange, columnIndexDOM) && container == this$static.containerWithFocus) {
    $refreshRow_0(this$static, this$static.rowWithFocus);
    return;
  }
  oldRow = this$static.rowWithFocus;
  this$static.rowWithFocus = rowIndex;
  oldRange = this$static.cellFocusRange;
  if (container == this$static.this$01.escalator.body_0) {
    $scrollToRow_0(this$static.this$01, this$static.rowWithFocus, ($clinit_ScrollDestination() , ANY), 0);
    this$static.cellFocusRange = withLength(columnIndexDOM, 1);
  }
   else {
    i_0 = 0;
    cell = $getFirstChildElement(container.getRowElement(this$static.rowWithFocus));
    do {
      colSpan = parseInt(cell['colSpan']) | 0;
      cellRange = withLength(i_0, colSpan);
      if (cellRange.start_0 <= columnIndexDOM && columnIndexDOM < cellRange.end) {
        this$static.cellFocusRange = cellRange;
        break;
      }
      cell = $getNextSiblingElement(($clinit_DOMImpl() , cell));
      ++i_0;
    }
     while (cell);
  }
  columnIndex = $indexOf_4(unmodifiableList(new ArrayList_1(this$static.this$01.columns)), $getVisibleColumn(this$static.this$01, columnIndexDOM));
  columnIndex >= this$static.this$01.escalator.columnConfiguration.frozenColumns && $scrollToColumn(this$static.this$01.escalator, columnIndexDOM, ($clinit_ScrollDestination() , ANY));
  if (this$static.containerWithFocus == container) {
    if ($equals(oldRange, this$static.cellFocusRange) && oldRow != this$static.rowWithFocus) {
      this$static.containerWithFocus.refreshRows(oldRow, 1);
    }
     else {
      $refreshHeader(this$static.this$01);
      $refreshFooter(this$static.this$01);
    }
  }
   else {
    oldContainer = this$static.containerWithFocus;
    this$static.containerWithFocus = container;
    oldContainer == this$static.this$01.escalator.body_0?(this$static.lastFocusedBodyRow = oldRow):oldContainer == this$static.this$01.escalator.header_0?(this$static.lastFocusedHeaderRow = oldRow):(this$static.lastFocusedFooterRow = oldRow);
    if ($equals(oldRange, this$static.cellFocusRange)) {
      oldContainer.refreshRows(oldRow, 1);
    }
     else {
      $refreshHeader(this$static.this$01);
      $refreshFooter(this$static.this$01);
      oldContainer == this$static.this$01.escalator.body_0 && oldContainer.refreshRows(oldRow, 1);
    }
  }
  $refreshRow_0(this$static, this$static.rowWithFocus);
}

function $updateFocusedCellStyle(this$static, cell, cellContainer){
  var cellColumn, cellRow, colSpan, columnHasFocus;
  cellRow = cell.row.row;
  cellColumn = cell.column;
  colSpan = $getPropertyInt(cell.element, 'colSpan');
  columnHasFocus = $intersects(withLength(cellColumn, colSpan), this$static.cellFocusRange);
  if (cellContainer == this$static.containerWithFocus) {
    if (cellRow == this$static.rowWithFocus && columnHasFocus) {
      if (this$static.cellWithFocusStyle != cell.element) {
        !!this$static.cellWithFocusStyle && setStyleName(this$static.cellWithFocusStyle, this$static.this$01.cellFocusStyleName, false);
        this$static.cellWithFocusStyle = cell.element;
        setStyleName(this$static.cellWithFocusStyle, this$static.this$01.cellFocusStyleName, true);
      }
    }
     else if (this$static.cellWithFocusStyle == cell.element) {
      setStyleName(this$static.cellWithFocusStyle, this$static.this$01.cellFocusStyleName, false);
      this$static.cellWithFocusStyle = null;
    }
  }
}

function $updateFocusedRowStyle(this$static, row){
  if (this$static.rowWithFocus == row.row && this$static.containerWithFocus == this$static.this$01.escalator.body_0) {
    if (row.element != this$static.rowWithFocusStyle) {
      !!this$static.rowWithFocusStyle && setStyleName(this$static.rowWithFocusStyle, this$static.this$01.rowFocusStyleName, false);
      this$static.rowWithFocusStyle = row.element;
      setStyleName(this$static.rowWithFocusStyle, this$static.this$01.rowFocusStyleName, true);
    }
  }
   else if (this$static.rowWithFocusStyle == row.element || this$static.containerWithFocus != this$static.this$01.escalator.body_0 && !!this$static.rowWithFocusStyle) {
    setStyleName(this$static.rowWithFocusStyle, this$static.this$01.rowFocusStyleName, false);
    this$static.rowWithFocusStyle = null;
  }
}

function Grid$CellFocusHandler(this$0){
  this.this$01 = this$0;
  this.containerWithFocus = this.this$01.escalator.body_0;
  this.cellFocusRange = withLength(0, 1);
  $sinkEvents(this$0, new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['keydown', 'click'])));
}

defineClass(210, 1, {}, Grid$CellFocusHandler);
_.cellWithFocusStyle = null;
_.lastFocusedBodyRow = 0;
_.lastFocusedFooterRow = 0;
_.lastFocusedHeaderRow = 0;
_.rowWithFocus = 0;
_.rowWithFocusStyle = null;
var Lcom_vaadin_client_widgets_Grid$CellFocusHandler_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/CellFocusHandler', 210);
function $getWidthActual(this$static){
  return $getColumnWidthActual(this$static.grid.escalator.columnConfiguration, $indexOf_4($getVisibleColumns(this$static.grid), this$static));
}

function $setDefaultHeaderContent(this$static, cell){
  $setText_0(cell, this$static.headerCaption);
}

function $setGrid_0(this$static, grid){
  if (this$static.grid) {
    throw toJs(new IllegalStateException_0('Column already is attached to a grid. Remove the column first from the grid and then add it. (in: ' + $toString_2(this$static) + ')'));
  }
  !!this$static.grid && $schedule_0(this$static.grid.autoColumnWidthsRecalculator);
  this$static.grid = grid;
  !!this$static.grid && $schedule_0(this$static.grid.autoColumnWidthsRecalculator);
}

function $setHeaderCaption(this$static, caption){
  var row;
  if (!$equals_0(this$static.headerCaption, caption)) {
    this$static.headerCaption = caption;
    !!this$static.grid && (row = this$static.grid.header_0.defaultRow , !!row && $setText_0(castTo($getCell_0(row, this$static), 82), this$static.headerCaption));
  }
  return this$static;
}

function $setRenderer(this$static, renderer){
  if (renderer != this$static.bodyRenderer) {
    this$static.bodyRenderer = renderer;
    !!this$static.grid && $refreshBody(this$static.grid);
  }
  return this$static;
}

function $setWidth_1(this$static, pixels){
  if (!pixelValuesEqual(this$static.widthUser, pixels)) {
    this$static.widthUser = pixels;
    !!this$static.grid && $schedule_0(this$static.grid.autoColumnWidthsRecalculator);
  }
  return this$static;
}

function $toString_2(this$static){
  var details, index_0;
  details = '';
  toNative(this$static.headerCaption).length != 0?(details += 'header:"' + this$static.headerCaption + '" '):(details += 'header:empty ');
  if (this$static.grid) {
    index_0 = $indexOf_4(unmodifiableList(new ArrayList_1(this$static.grid.columns)), this$static);
    index_0 != -1?(details += 'attached:#' + index_0 + ' '):(details += 'attached:unindexed ');
  }
   else {
    details += 'detached ';
  }
  details += 'sortable:false ';
  return $getSimpleName(this$static.___clazz) + '[' + $trim(details) + ']';
}

function Grid$Column(caption){
  $setRenderer(this, new Grid$Column$DefaultTextRenderer(this));
  $setHeaderCaption(this, caption);
}

defineClass(14, 1, $intern_51);
_.toString_0 = function toString_17(){
  return $toString_2(this);
}
;
_.expandRatio = -1;
_.headerCaption = '';
_.maximumWidthPx = -1;
_.minimumWidthPx = 10;
_.resizable = true;
_.widthUser = -1;
var Lcom_vaadin_client_widgets_Grid$Column_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Column', 14);
function $render(this$static, cell, data_0){
  var text_0;
  if (!this$static.warned && !instanceOfString(data_0)) {
    $warning(($clinit_UIObject() , getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Grid_2_classLit) , Lcom_vaadin_client_widgets_Grid_2_classLit.typeName))), $toString_2(this$static.this$11) + ': ' + 'This column uses a dummy default TextRenderer. A more suitable renderer should be set using the setRenderer() method.');
    this$static.warned = true;
  }
  data_0 == null?(text_0 = ''):(text_0 = toString__Ljava_lang_String___devirtual$(data_0));
  $setInnerText(cell.cell.element, text_0);
}

function Grid$Column$DefaultTextRenderer(this$1){
  this.this$11 = this$1;
}

defineClass(216, 1, {}, Grid$Column$DefaultTextRenderer);
_.warned = false;
var Lcom_vaadin_client_widgets_Grid$Column$DefaultTextRenderer_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Column/DefaultTextRenderer', 216);
function $updateTogglesOrder(this$static){
  var column$iterator;
  if (!this$static.hidingColumn) {
    for (column$iterator = new Collections$UnmodifiableCollectionIterator(unmodifiableList(new ArrayList_1(this$static.this$01.columns)).coll.iterator_0()); column$iterator.it.hasNext_0();) {
      castTo(column$iterator.it.next_1(), 14);
    }
  }
}

function Grid$ColumnHider(this$0){
  this.this$01 = this$0;
  new HashMap;
}

defineClass(215, 1, {}, Grid$ColumnHider);
_.hidingColumn = false;
var Lcom_vaadin_client_widgets_Grid$ColumnHider_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/ColumnHider', 215);
function $cancel_1(){
  throw toJs(new IllegalStateException_0('Cannot cancel edit: editor is not enabled'));
}

function $focusColumn(this$static, colIndex){
  var editor;
  if (colIndex < 0 || colIndex >= $getVisibleColumns(this$static.grid).coll.size_1()) {
    return;
  }
  editor = $getWidget(this$static, $getVisibleColumn(this$static.grid, colIndex));
  instanceOf(editor, 179)?castTo(editor, 179).focus_1():instanceOf(editor, 104)?castTo(editor, 104).setFocus(true):$focus_0(this$static.grid);
}

function $getElementColumn(this$static, e){
  var frozenCells, i_0;
  frozenCells = this$static.frozenCellWrapper.childNodes.length;
  if ($isOrHasChild(this$static.frozenCellWrapper, e)) {
    for (i_0 = 0; i_0 < frozenCells; ++i_0) {
      if ($isOrHasChild($getChild(this$static.frozenCellWrapper, i_0), e)) {
        return i_0;
      }
    }
  }
  if ($isOrHasChild(this$static.cellWrapper, e)) {
    for (i_0 = 0; i_0 < this$static.cellWrapper.childNodes.length; ++i_0) {
      if ($isOrHasChild($getChild(this$static.cellWrapper, i_0), e)) {
        return i_0 + frozenCells;
      }
    }
  }
  return -1;
}

function $getWidget(this$static, column){
  return castTo($get_3(this$static.columnToWidget, column), 16);
}

function $save(){
  throw toJs(new IllegalStateException_0('Cannot save: editor is not enabled'));
}

function $setStylePrimaryName_10(this$static){
  if (this$static.styleName != null) {
    $removeClassName(this$static.editorOverlay, this$static.styleName);
    $removeClassName(this$static.cellWrapper, this$static.styleName + '-cells');
    $removeClassName(this$static.frozenCellWrapper, this$static.styleName + '-cells');
    $removeClassName(this$static.messageAndButtonsWrapper, this$static.styleName + '-footer');
    $removeClassName(this$static.messageWrapper, this$static.styleName + '-message');
    $removeClassName(this$static.buttonsWrapper, this$static.styleName + '-buttons');
    $removeStyleName(this$static.saveButton, this$static.styleName + '-save');
    $removeStyleName(this$static.cancelButton, this$static.styleName + '-cancel');
  }
  this$static.styleName = 'v-grid-editor';
  $setClassName(this$static.editorOverlay, this$static.styleName);
  $setClassName(this$static.cellWrapper, this$static.styleName + '-cells');
  $setClassName(this$static.frozenCellWrapper, this$static.styleName + '-cells frozen');
  $setClassName(this$static.messageAndButtonsWrapper, this$static.styleName + '-footer');
  $setClassName(this$static.messageWrapper, this$static.styleName + '-message');
  $setClassName(this$static.buttonsWrapper, this$static.styleName + '-buttons');
  $setStyleName(this$static.saveButton, this$static.styleName + '-save');
  $setStyleName(this$static.cancelButton, this$static.styleName + '-cancel');
}

function Grid$Editor(){
  new Grid$Editor$1(this);
  this.editorOverlay = ($clinit_DOM() , $createDivElement($doc));
  this.cellWrapper = $createDivElement($doc);
  this.frozenCellWrapper = $createDivElement($doc);
  this.messageAndButtonsWrapper = $createDivElement($doc);
  this.messageWrapper = $createDivElement($doc);
  this.buttonsWrapper = $createDivElement($doc);
  $createDivElement($doc);
  this.columnToWidget = new HashMap;
  new ArrayList;
  new Grid$Editor$2;
  new Grid$Editor$4;
  new HashSet;
  this.saveButton = new Button;
  $setText(this.saveButton, 'Save');
  $addDomHandler(this.saveButton, new Grid$Editor$6, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  this.cancelButton = new Button;
  $setText(this.cancelButton, 'Cancel');
  $addDomHandler(this.cancelButton, new Grid$Editor$7, (null , TYPE_0));
}

defineClass(209, 1, {}, Grid$Editor);
_.focusedColumnIndex = -1;
_.rowIndex = -1;
_.styleName = null;
var Lcom_vaadin_client_widgets_Grid$Editor_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Editor', 209);
function Grid$Editor$1(this$1){
  this.this$11 = this$1;
}

defineClass(218, 1, {}, Grid$Editor$1);
_.execute_1 = function execute_23(){
  var focusedElement;
  focusedElement = getFocusedElement();
  if (focusedElement == $getElement(this.this$11.grid) || focusedElement == $doc.body || this.count > 2) {
    $focusColumn(this.this$11, this.this$11.focusedColumnIndex);
  }
   else {
    ++this.count;
    $scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), this);
  }
}
;
_.count = 0;
var Lcom_vaadin_client_widgets_Grid$Editor$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Editor/1', 218);
function Grid$Editor$2(){
  Timer.call(this);
}

defineClass(219, 65, {}, Grid$Editor$2);
_.run_0 = function run_3(){
  $warning(($clinit_UIObject() , getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Grid_2_classLit) , Lcom_vaadin_client_widgets_Grid_2_classLit.typeName))), ($ensureNamesAreInitialized(Lcom_vaadin_client_widget_grid_EditorHandler_2_classLit) , 'Editor save action is taking longer than expected (5000ms). Does your ' + Lcom_vaadin_client_widget_grid_EditorHandler_2_classLit.simpleName + ' remember to call success() or fail()?'));
}
;
var Lcom_vaadin_client_widgets_Grid$Editor$2_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Editor/2', 219);
function Grid$Editor$4(){
  Timer.call(this);
}

defineClass(220, 65, {}, Grid$Editor$4);
_.run_0 = function run_4(){
  $warning(($clinit_UIObject() , getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Grid_2_classLit) , Lcom_vaadin_client_widgets_Grid_2_classLit.typeName))), ($ensureNamesAreInitialized(Lcom_vaadin_client_widget_grid_EditorHandler_2_classLit) , 'Editor bind action is taking longer than expected (5000ms). Does your ' + Lcom_vaadin_client_widget_grid_EditorHandler_2_classLit.simpleName + ' remember to call success() or fail()?'));
}
;
var Lcom_vaadin_client_widgets_Grid$Editor$4_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Editor/4', 220);
function Grid$Editor$6(){
}

defineClass(221, 1, $intern_52, Grid$Editor$6);
_.onClick = function onClick(event_0){
  $save();
}
;
var Lcom_vaadin_client_widgets_Grid$Editor$6_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Editor/6', 221);
function Grid$Editor$7(){
}

defineClass(222, 1, $intern_52, Grid$Editor$7);
_.onClick = function onClick_0(event_0){
  $cancel_1();
}
;
var Lcom_vaadin_client_widgets_Grid$Editor$7_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Editor/7', 222);
function $addColumn_1(this$static, column){
  var row, row$iterator;
  for (row$iterator = new ArrayList$1(this$static.rows_0); row$iterator.i < row$iterator.this$01.array.length;) {
    row = castTo($next_4(row$iterator), 81);
    $addCell(row, column);
  }
}

function $addRowAt(this$static, index_0){
  var i_0, row;
  row = new Grid$HeaderRow;
  row.section = this$static;
  for (i_0 = 0; i_0 < this$static.grid.columns.array.length; ++i_0) {
    $addCell(row, $getColumn(this$static.grid, i_0));
  }
  $add_5(this$static.rows_0, index_0, row);
  this$static.markAsDirty = true;
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Grid$Header$1(this$static));
  return row;
}

function $appendRow(this$static){
  return $addRowAt(this$static, this$static.rows_0.array.length);
}

function $getRow_0(this$static, index_0){
  try {
    return castTo($get_6(this$static.rows_0, index_0), 81);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 32)) {
      throw toJs(new IllegalArgumentException('Row with index ' + index_0 + ' does not exist'));
    }
     else 
      throw toJs($e0);
  }
}

function $setVisible(this$static){
  this$static.visible = false;
  this$static.markAsDirty = true;
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Grid$Header$1(this$static));
}

function Grid$StaticSection(){
  this.rows_0 = new ArrayList;
}

defineClass(144, 1, {});
_.visible = true;
var Lcom_vaadin_client_widgets_Grid$StaticSection_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/StaticSection', 144);
function Grid$Footer(){
  Grid$StaticSection.call(this);
}

defineClass(208, 144, {}, Grid$Footer);
var Lcom_vaadin_client_widgets_Grid$Footer_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Footer', 208);
function Grid$GridSpacerUpdater(this$0){
  this.this$01 = this$0;
  this.elementToWidgetMap = new HashMap;
}

defineClass(213, 1, {}, Grid$GridSpacerUpdater);
_.destroy = function destroy_0(spacer){
  var detailsWidget, spacerElement;
  spacerElement = spacer.spacerElement;
  detailsWidget = castTo($remove_6(this.elementToWidgetMap, $getFirstChildElement_0(($clinit_DOMImpl() , spacerElement))), 16);
  if (detailsWidget) {
    setParent_0(detailsWidget, null);
    $removeAllChildren(spacerElement);
  }
}
;
_.init_0 = function init_3(spacer){
  var rowIndex, spacerElement, spacerRoot;
  spacerRoot = spacer.spacerElement;
  spacer.rowIndex % 2 == 1?$addClassName($getParentElement_0(($clinit_DOMImpl() , spacerRoot)), 'stripe'):$removeClassName($getParentElement_0(($clinit_DOMImpl() , spacerRoot)), 'stripe');
  rowIndex = spacer.rowIndex;
  spacerElement = spacer.spacerElement;
  $removeAllChildren(spacerElement);
  $setSpacer(this.this$01.escalator.body_0, rowIndex, 50);
}
;
var Lcom_vaadin_client_widgets_Grid$GridSpacerUpdater_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/GridSpacerUpdater', 213);
function $addColumn_2(this$static, column){
  $addColumn_1(this$static, column);
  !!this$static.defaultRow && $setDefaultHeaderContent(column, castTo($getCell_0(this$static.defaultRow, column), 82));
}

function $requestSectionRefresh(this$static){
  this$static.markAsDirty = true;
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Grid$Header$1(this$static));
}

function $setDefaultRow(this$static, row){
  if (row == this$static.defaultRow) {
    return;
  }
  if ($indexOf_3(this$static.rows_0, row, 0) == -1) {
    throw toJs(new IllegalArgumentException('Cannot set a default row that does not exist in the container'));
  }
  !!this$static.defaultRow && $setDefault(this$static.defaultRow, false);
  $setDefault(row, true);
  this$static.defaultRow = row;
  this$static.markAsDirty = true;
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new Grid$Header$1(this$static));
}

function Grid$Header(){
  Grid$StaticSection.call(this);
}

defineClass(207, 144, {}, Grid$Header);
_.markAsDirty = false;
var Lcom_vaadin_client_widgets_Grid$Header_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Header', 207);
function Grid$Header$1(this$1){
  this.this$11 = this$1;
}

defineClass(108, 1, {}, Grid$Header$1);
_.execute_1 = function execute_24(){
  if (this.this$11.markAsDirty) {
    this.this$11.markAsDirty = false;
    $refreshHeader(this.this$11.grid);
  }
}
;
var Lcom_vaadin_client_widgets_Grid$Header$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Header/1', 108);
function $getHtml(this$static){
  if (this$static.type_0 != ($clinit_GridStaticCellType() , HTML)) {
    throw toJs(new IllegalStateException_0('Cannot fetch HTML from a cell with type ' + this$static.type_0));
  }
  return this$static.content_0;
}

function $getText(this$static){
  if (this$static.type_0 != ($clinit_GridStaticCellType() , TEXT)) {
    throw toJs(new IllegalStateException_0('Cannot fetch Text from a cell with type ' + this$static.type_0));
  }
  return this$static.content_0;
}

function $getWidget_0(this$static){
  if (this$static.type_0 != ($clinit_GridStaticCellType() , WIDGET)) {
    throw toJs(new IllegalStateException_0('Cannot fetch Widget from a cell with type ' + this$static.type_0));
  }
  return throwClassCastExceptionUnlessNull(this$static.content_0);
}

function $setColspan(this$static, colspan){
  if (colspan < 1) {
    throw toJs(new IllegalArgumentException('Colspan cannot be less than 1'));
  }
  this$static.colspan = colspan;
  $requestSectionRefresh(this$static.section);
}

function $setSection(this$static, section){
  this$static.section = section;
}

function $setText_0(this$static, text_0){
  this$static.content_0 = text_0;
  this$static.type_0 = ($clinit_GridStaticCellType() , TEXT);
  $requestSectionRefresh(this$static.section);
}

defineClass(66, 1, {66:1});
_.colspan = 1;
_.content_0 = null;
var Lcom_vaadin_client_widgets_Grid$StaticSection$StaticCell_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/StaticSection/StaticCell', 66);
function Grid$HeaderCell(){
  this.type_0 = ($clinit_GridStaticCellType() , TEXT);
}

defineClass(82, 66, {82:1, 66:1}, Grid$HeaderCell);
var Lcom_vaadin_client_widgets_Grid$HeaderCell_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/HeaderCell', 82);
function $addCell(this$static, column){
  var cell;
  cell = new Grid$HeaderCell;
  $setSection(cell, this$static.section);
  $put_2(this$static.cells_0, column, cell);
}

function $calculateColspans(this$static){
  var cell, cell$iterator, colSpan, column$iterator, entry, group, group$iterator, outerIter, outerIter0;
  for (cell$iterator = (outerIter0 = (new AbstractMap$2(this$static.cells_0)).this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter0)); cell$iterator.val$outerIter2.hasNext_0();) {
    cell = (entry = castTo(cell$iterator.val$outerIter2.next_1(), 8) , castTo(entry.getValue_0(), 66));
    $setColspan(cell, 1);
  }
  for (group$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.cellGroups)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); group$iterator.val$outerIter2.hasNext;) {
    group = (entry = $next_2(group$iterator.val$outerIter2) , castTo(entry.getKey(), 41));
    if ($checkMergedCellIsContinuous(this$static, group)) {
      colSpan = 0;
      for (column$iterator = group.iterator_0(); column$iterator.hasNext_0();) {
        castTo(column$iterator.next_1(), 14);
        ++colSpan;
      }
      $setColspan(castTo($get_3(this$static.cellGroups, group), 66), 1 > colSpan?1:colSpan);
    }
     else {
      $setColspan(castTo($get_3(this$static.cellGroups, group), 66), 1);
    }
  }
}

function $checkMergedCellIsContinuous(this$static, mergedCell){
  var columnOrder, i_0, j;
  columnOrder = new ArrayList_1(unmodifiableList(new ArrayList_1(this$static.section.grid.columns)));
  if (!$containsAll(columnOrder, mergedCell)) {
    return false;
  }
  for (i_0 = 0; i_0 < columnOrder.array.length; ++i_0) {
    if (!mergedCell.contains_0((checkCriticalElementIndex(i_0, columnOrder.array.length) , columnOrder.array[i_0]))) {
      continue;
    }
    for (j = 1; j < mergedCell.size_1(); ++j) {
      if (!mergedCell.contains_0((checkCriticalElementIndex(i_0 + j, columnOrder.array.length) , columnOrder.array[i_0 + j]))) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function $getCell_0(this$static, column){
  var cellGroup;
  cellGroup = $getCellGroupForColumn(this$static, column);
  if (cellGroup) {
    return castTo($get_3(this$static.cellGroups, cellGroup), 66);
  }
  return castTo($get_3(this$static.cells_0, column), 66);
}

function $getCellGroupForColumn(this$static, column){
  var entry, group, group$iterator, outerIter;
  for (group$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.cellGroups)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); group$iterator.val$outerIter2.hasNext;) {
    group = (entry = $next_2(group$iterator.val$outerIter2) , castTo(entry.getKey(), 41));
    if (group.contains_0(column)) {
      return group;
    }
  }
  return null;
}

defineClass(81, 1, {81:1});
var Lcom_vaadin_client_widgets_Grid$StaticSection$StaticRow_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/StaticSection/StaticRow', 81);
function $setDefault(this$static, isDefault){
  var column, column$iterator;
  this$static.isDefault = isDefault;
  if (isDefault) {
    for (column$iterator = new Collections$UnmodifiableCollectionIterator(unmodifiableList(new ArrayList_1(this$static.section.grid.columns)).coll.iterator_0()); column$iterator.it.hasNext_0();) {
      column = castTo(column$iterator.it.next_1(), 14);
      $setDefaultHeaderContent(column, castTo($getCell_0(this$static, column), 82));
    }
  }
}

function Grid$HeaderRow(){
  this.cells_0 = new HashMap;
  this.cellGroups = new HashMap;
}

defineClass(122, 81, {122:1, 81:1}, Grid$HeaderRow);
_.isDefault = false;
var Lcom_vaadin_client_widgets_Grid$HeaderRow_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/HeaderRow', 122);
function $clinit_Grid$SelectionMode(){
  $clinit_Grid$SelectionMode = emptyMethod;
  SINGLE = new Grid$SelectionMode$1;
  MULTI = new Grid$SelectionMode$2;
  NONE_2 = new Grid$SelectionMode$3;
}

function Grid$SelectionMode(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Grid$SelectionMode();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_client_widgets_Grid$SelectionMode_2_classLit, 1), $intern_1, 67, 0, [SINGLE, MULTI, NONE_2]);
}

defineClass(67, 4, $intern_53);
var MULTI, NONE_2, SINGLE;
var Lcom_vaadin_client_widgets_Grid$SelectionMode_2_classLit = createForEnum('com.vaadin.client.widgets', 'Grid/SelectionMode', 67, values_8);
function Grid$SelectionMode$1(){
  Grid$SelectionMode.call(this, 'SINGLE', 0);
}

defineClass(232, 67, $intern_53, Grid$SelectionMode$1);
var Lcom_vaadin_client_widgets_Grid$SelectionMode$1_2_classLit = createForEnum('com.vaadin.client.widgets', 'Grid/SelectionMode/1', 232, null);
function Grid$SelectionMode$2(){
  Grid$SelectionMode.call(this, 'MULTI', 1);
}

defineClass(233, 67, $intern_53, Grid$SelectionMode$2);
var Lcom_vaadin_client_widgets_Grid$SelectionMode$2_2_classLit = createForEnum('com.vaadin.client.widgets', 'Grid/SelectionMode/2', 233, null);
function Grid$SelectionMode$3(){
  Grid$SelectionMode.call(this, 'NONE', 2);
}

defineClass(234, 67, $intern_53, Grid$SelectionMode$3);
var Lcom_vaadin_client_widgets_Grid$SelectionMode$3_2_classLit = createForEnum('com.vaadin.client.widgets', 'Grid/SelectionMode/3', 234, null);
function $addStyleName_1(this$static, style){
  setStyleName(($clinit_DOM() , this$static.element), style, true);
  $addStyleName(this$static.overlay, style);
}

function $isOpen(this$static){
  return !!this$static.overlay && this$static.overlay.showing;
}

function $open(this$static){
  if (!(!!this$static.overlay && this$static.overlay.showing) && !!this$static.parent_0) {
    setStyleName(($clinit_DOM() , this$static.element), 'open', true);
    $addStyleName(this$static.overlay, 'open');
    setStyleName(this$static.element, 'closed', false);
    $removeStyleName(this$static.overlay, 'closed');
    $showRelativeTo(this$static.overlay, this$static.rootContainer);
  }
}

function $removeStyleName_1(this$static){
  setStyleName(($clinit_DOM() , this$static.element), 'open', false);
  $removeStyleName(this$static.overlay, 'open');
}

function $setHeightToHeaderCellHeight(this$static){
  var firstHeaderCell, header, height;
  header = this$static.grid.escalator.header_0;
  if (header.rows_0 == 0 || !$getTrByVisualIndex(header, 0).hasChildNodes()) {
    $info_1(($clinit_UIObject() , getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Grid_2_classLit) , Lcom_vaadin_client_widgets_Grid_2_classLit.typeName))), 'No header cell available when calculating sidebar button height');
    $setHeight(this$static.openCloseButton, header.defaultRowHeight + 'px');
    return;
  }
  firstHeaderCell = $getFirstChildElement($getTrByVisualIndex(header, 0));
  height = getRequiredHeightBoundingClientRectDouble(firstHeaderCell) - (measureVerticalBorder(($clinit_DOM() , this$static.element)) / 2 | 0);
  $setHeight(this$static.openCloseButton, height + 'px');
}

function $setStylePrimaryName_11(this$static){
  setStylePrimaryName(($clinit_DOM() , this$static.element), 'v-grid-sidebar');
  $setStylePrimaryName(this$static.overlay, 'v-grid-sidebar');
  $setStylePrimaryName(this$static.content_0, 'v-grid-sidebar-content');
  $setStylePrimaryName(this$static.openCloseButton, 'v-grid-sidebar-button');
  if (!!this$static.overlay && this$static.overlay.showing) {
    setStyleName(this$static.element, 'open', true);
    $addStyleName(this$static.overlay, 'open');
    setStyleName(this$static.element, 'closed', false);
    $removeStyleName(this$static.overlay, 'closed');
  }
   else {
    setStyleName(this$static.element, 'open', false);
    $removeStyleName(this$static.overlay, 'open');
    setStyleName(this$static.element, 'closed', true);
    $addStyleName(this$static.overlay, 'closed');
  }
}

function $updateVisibility(this$static){
  var hasWidgets, isVisible;
  hasWidgets = this$static.content_0.children.size_0 > 0;
  isVisible = !!this$static.parent_0;
  if (isVisible && !hasWidgets) {
    setParent_0(this$static, null);
    $removeFromParent(($clinit_DOM() , this$static.element));
  }
   else if (!isVisible && hasWidgets) {
    $hide_0(this$static.overlay, false);
    $appendChild($getElement(this$static.grid), ($clinit_DOM() , this$static.element));
    setParent_0(this$static, this$static.grid);
    $setHeightToHeaderCellHeight(this$static);
  }
}

function Grid$Sidebar(grid){
  var keyDownHandler;
  this.openCloseButtonHandler = new Grid$Sidebar$1(this);
  this.grid = grid;
  this.rootContainer = new FlowPanel;
  $initWidget(this, this.rootContainer);
  this.openCloseButton = new Button;
  $addDomHandler(this.openCloseButton, this.openCloseButtonHandler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  $add_2(this.rootContainer, this.openCloseButton);
  this.content_0 = new Grid$Sidebar$2(this);
  this.overlay = new Overlay;
  this.overlay.autoHide = true;
  $addStyleDependentName(this.overlay);
  $add_3(this.overlay, this.content_0);
  $addAutoHidePartner(this.overlay, $getElement(this.rootContainer));
  $addHandler_0(this.overlay, new Grid$Sidebar$5(this), TYPE_2?TYPE_2:(TYPE_2 = new GwtEvent$Type));
  this.menuBar = new Grid$Sidebar$3;
  keyDownHandler = new Grid$Sidebar$4(this);
  $addDomHandler(this.openCloseButton, keyDownHandler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_1));
  $addDomHandler(this.menuBar, keyDownHandler, (null , TYPE_1));
}

defineClass(214, 574, $intern_39, Grid$Sidebar);
_.onAttach = function onAttach_3(){
  $onAttach_0(this);
  $scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), new Grid$Sidebar$6(this));
}
;
var Lcom_vaadin_client_widgets_Grid$Sidebar_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar', 214);
function Grid$Sidebar$1(this$1){
  this.this$11 = this$1;
}

defineClass(225, 1, $intern_52, Grid$Sidebar$1);
_.onClick = function onClick_1(event_0){
  $isOpen(this.this$11)?$hide_0(this.this$11.overlay, false):$open(this.this$11);
}
;
var Lcom_vaadin_client_widgets_Grid$Sidebar$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar/1', 225);
function Grid$Sidebar$2(this$1){
  this.this$11 = this$1;
  FlowPanel.call(this);
}

defineClass(226, 123, $intern_37, Grid$Sidebar$2);
_.remove = function remove_9(w){
  var removed;
  removed = $remove_0(this, w);
  removed && $updateVisibility(this.this$11);
  return removed;
}
;
var Lcom_vaadin_client_widgets_Grid$Sidebar$2_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar/2', 226);
function Grid$Sidebar$3(){
  new ArrayList;
  this.items = new ArrayList;
  $init(this, ($clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer() , $clinit_ClippedImagePrototype() , true));
}

defineClass(227, 147, $intern_36, Grid$Sidebar$3);
_.onBrowserEvent = function onBrowserEvent_5(event_0){
  $clinit_DOM();
  if ($eventGetTypeInt(($clinit_DOMImpl() , event_0).type) == 128 && (event_0.keyCode | 0) == 13) {
    $onBrowserEvent_0(this, event_0);
    $scheduleDeferred_0(($clinit_SchedulerImpl() , INSTANCE), new Grid$Sidebar$3$1(this));
  }
   else {
    $onBrowserEvent_0(this, event_0);
  }
}
;
var Lcom_vaadin_client_widgets_Grid$Sidebar$3_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar/3', 227);
function Grid$Sidebar$3$1(this$2){
  this.this$21 = this$2;
}

defineClass(228, 1, {}, Grid$Sidebar$3$1);
_.execute_1 = function execute_25(){
  $focus(this.this$21);
}
;
var Lcom_vaadin_client_widgets_Grid$Sidebar$3$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar/3/1', 228);
function Grid$Sidebar$4(this$1){
  this.this$11 = this$1;
}

defineClass(229, 1, {615:1, 17:1}, Grid$Sidebar$4);
var Lcom_vaadin_client_widgets_Grid$Sidebar$4_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar/4', 229);
function Grid$Sidebar$5(this$1){
  this.this$11 = this$1;
}

defineClass(230, 1, $intern_42, Grid$Sidebar$5);
_.onClose = function onClose_0(event_0){
  $removeStyleName_1(this.this$11);
  $addStyleName_1(this.this$11, 'closed');
}
;
var Lcom_vaadin_client_widgets_Grid$Sidebar$5_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar/5', 230);
function Grid$Sidebar$6(this$1){
  this.this$11 = this$1;
}

defineClass(231, 1, {}, Grid$Sidebar$6);
_.execute_1 = function execute_26(){
  $setHeightToHeaderCellHeight(this.this$11);
}
;
var Lcom_vaadin_client_widgets_Grid$Sidebar$6_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/Sidebar/6', 231);
function $addSortingIndicatorsToHeaderRow(this$static, headerRow, cell){
  var cellElement, column, cellElement_0;
  cellElement = cell.element;
  $hasClassName(cellElement, 'sort-asc') || $hasClassName(cellElement, 'sort-desc');
  cellElement_0 = cell.element;
  cellElement_0.removeAttribute('sort-order');
  $removeClassName(cellElement_0, 'sort-desc');
  $removeClassName(cellElement_0, 'sort-asc');
  $removeClassName(cellElement_0, 'sortable');
  if (!headerRow.isDefault) {
    return;
  }
  column = $getVisibleColumn(this$static.this$01, cell.column);
  $getSortOrder(this$static, column);
  return;
}

function $getSortOrder(this$static, column){
  var order, order$iterator;
  for (order$iterator = new Collections$UnmodifiableCollectionIterator(unmodifiableList(this$static.this$01.sortOrder).coll.iterator_0()); order$iterator.it.hasNext_0();) {
    order = throwClassCastExceptionUnlessNull(order$iterator.it.next_1());
    if (null.$_nullField == column) {
      return order;
    }
  }
  return null;
}

function $postAttach(this$static, row, attachedCells){
  var cell, cell$iterator, columns, gridRow, metadata;
  gridRow = $getRow_0(this$static.section, row.row);
  columns = $getVisibleColumns(this$static.this$01);
  for (cell$iterator = attachedCells.iterator_0(); cell$iterator.hasNext_0();) {
    cell = castTo(cell$iterator.next_1(), 36);
    metadata = $getCell_0(gridRow, castTo($get_7(columns, cell.column), 14));
    ($clinit_GridStaticCellType() , WIDGET) == metadata.type_0 && $getWidget_0(metadata);
  }
}

function $preDetach(this$static, row, cellsToDetach){
  var cell, cell$iterator, columns, gridRow, metadata;
  if (this$static.section.rows_0.array.length > row.row) {
    gridRow = $getRow_0(this$static.section, row.row);
    columns = $getVisibleColumns(this$static.this$01);
    for (cell$iterator = cellsToDetach.iterator_0(); cell$iterator.hasNext_0();) {
      cell = castTo(cell$iterator.next_1(), 36);
      metadata = $getCell_0(gridRow, castTo($get_7(columns, cell.column), 14));
      ($clinit_GridStaticCellType() , WIDGET) == metadata.type_0 && ($getWidget_0(metadata) , false) && $getWidget_0(metadata).$_nullMethod() && (setParent_0($getWidget_0(metadata), null) , ($clinit_DOM() , null.$_nullField).$_nullMethod());
    }
  }
}

function Grid$StaticSectionUpdater(this$0, section, container){
  this.this$01 = this$0;
  this.section = section;
  this.container = container;
}

defineClass(145, 1, {}, Grid$StaticSectionUpdater);
_.postAttach = function postAttach_1(row, attachedCells){
  $postAttach(this, row, attachedCells);
}
;
_.postDetach = function postDetach_1(row, detachedCells){
}
;
_.preAttach = function preAttach_1(row, cellsToAttach){
}
;
_.preDetach = function preDetach_1(row, cellsToDetach){
  $preDetach(this, row, cellsToDetach);
}
;
_.update = function update_1(row, cellsToUpdate){
  var cell, cell$iterator, column, columns, content_0, dragger, metadata, staticRow, td;
  staticRow = $getRow_0(this.section, row.row);
  columns = $getVisibleColumns(this.this$01);
  setCustomStyleName(row.element);
  for (cell$iterator = cellsToUpdate.iterator_0(); cell$iterator.hasNext_0();) {
    cell = castTo(cell$iterator.next_1(), 36);
    metadata = $getCell_0(staticRow, castTo($get_7(columns, cell.column), 14));
    !!staticRow && $addSortingIndicatorsToHeaderRow(this, staticRow, cell);
    $setColSpan_0(cell, metadata.colspan);
    td = cell.element;
    $removeAllChildren(td);
    setCustomStyleName(td);
    if (metadata.type_0 != ($clinit_GridStaticCellType() , WIDGET)) {
      content_0 = ($clinit_DOM() , $createDivElement($doc));
      if (staticRow) {
        $setClassName(content_0, getStylePrimaryName($getStyleElement(this.this$01)) + '-column-header-content');
        staticRow.isDefault && $setClassName(content_0, (content_0.className || '') + ' ' + getStylePrimaryName($getStyleElement(this.this$01)) + '-column-default-header-content');
      }
       else 
        $severe(($clinit_UIObject() , getLogger(($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Grid_2_classLit) , Lcom_vaadin_client_widgets_Grid_2_classLit.typeName))), ($ensureNamesAreInitialized(Lcom_vaadin_client_widgets_Grid$HeaderRow_2_classLit) , 'Unhandled static row type ' + Lcom_vaadin_client_widgets_Grid$HeaderRow_2_classLit.canonicalName));
      td.appendChild(content_0);
    }
     else {
      content_0 = td;
    }
    switch (metadata.type_0.ordinal) {
      case 0:
        $setInnerText(content_0, $getText(metadata));
        break;
      case 1:
        $setInnerHTML(content_0, $getHtml(metadata));
        break;
      case 2:
        $preDetach(this, row, new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_client_widget_escalator_FlyweightCell_2_classLit, 1), $intern_1, 36, 0, [cell])));
        content_0.innerHTML = '';
        $postAttach(this, row, new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_client_widget_escalator_FlyweightCell_2_classLit, 1), $intern_1, 36, 0, [cell])));
    }
    if (castTo($get_7(columns, cell.column), 14).resizable && !!staticRow && staticRow.isDefault) {
      column = cell.column;
      dragger = new DragHandle(getStylePrimaryName($getStyleElement(this.this$01)) + '-column-resize-handle', new Grid$StaticSectionUpdater$1(this, column));
      $removeFromParent_1(dragger);
      dragger.parent_0 = td;
      $appendChild(dragger.parent_0, dragger.element);
    }
    $updateFocusedCellStyle(this.this$01.cellFocusHandler, cell, this.container);
  }
}
;
var Lcom_vaadin_client_widgets_Grid$StaticSectionUpdater_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/StaticSectionUpdater', 145);
function $onCancel(this$static){
  $setWidth_1(this$static.col, this$static.initialWidth);
  setTextSelectionEnabled($getElement(this$static.this$11.this$01), true);
}

function $onComplete_0(this$static){
  $fireEvent_0(this$static.this$11.this$01, new ColumnResizeEvent);
  setTextSelectionEnabled($getElement(this$static.this$11.this$01), true);
}

function $onStart(this$static){
  var c, c$iterator;
  this$static.initialWidth = $getWidthActual(this$static.col);
  this$static.minCellWidth = $getMinCellWidth(this$static.this$11.this$01.escalator, $indexOf_4(unmodifiableList(new ArrayList_1(this$static.this$11.this$01.columns)), this$static.col));
  for (c$iterator = new Collections$UnmodifiableCollectionIterator(unmodifiableList(new ArrayList_1(this$static.this$11.this$01.columns)).coll.iterator_0()); c$iterator.it.hasNext_0();) {
    c = castTo(c$iterator.it.next_1(), 14);
    if (this$static.this$11.this$01.selectionColumn == c) {
      continue;
    }
    if (c.widthUser < 0) {
      $setWidth_1(c, $getColumnWidthActual(c.grid.escalator.columnConfiguration, $indexOf_4($getVisibleColumns(c.grid), c)));
      $fireEvent_0(this$static.this$11.this$01, new ColumnResizeEvent);
    }
  }
  setTextSelectionEnabled($getElement(this$static.this$11.this$01), false);
}

function $onUpdate_0(this$static, deltaX){
  $setWidth_1(this$static.col, $wnd.Math.max(this$static.minCellWidth, this$static.initialWidth + deltaX));
}

function Grid$StaticSectionUpdater$1(this$1, val$column){
  this.this$11 = this$1;
  this.val$column2 = val$column;
  this.col = $getVisibleColumn(this.this$11.this$01, this.val$column2);
}

defineClass(235, 1, {}, Grid$StaticSectionUpdater$1);
_.initialWidth = 0;
_.minCellWidth = 0;
_.val$column2 = 0;
var Lcom_vaadin_client_widgets_Grid$StaticSectionUpdater$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/StaticSectionUpdater/1', 235);
function $sort(this$static, column){
  if ($indexOf_3(this$static.this$01.columns, column, 0) == -1) {
    throw toJs(new IllegalArgumentException('Given column is not a column in this grid. ' + $toString_2(column)));
  }
  return;
}

function Grid$UserSorter(this$0){
  this.this$01 = this$0;
  new Grid$UserSorter$1(this);
}

defineClass(211, 1, {}, Grid$UserSorter);
var Lcom_vaadin_client_widgets_Grid$UserSorter_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/UserSorter', 211);
function Grid$UserSorter$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(223, 65, {}, Grid$UserSorter$1);
_.run_0 = function run_5(){
  $sort(this.this$11, this.this$11.column);
}
;
var Lcom_vaadin_client_widgets_Grid$UserSorter$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Grid/UserSorter/1', 223);
function $getShimElement(this$static){
  var info;
  if (!this$static.shimElement && (info = ($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1) , info.browserDetails.isIE && $isBrowserVersionNewerOrEqual(info))) {
    this$static.shimElement = $createIFrameElement($doc);
    this$static.shimElement.style['position'] = ($clinit_Style$Position() , 'absolute');
    this$static.shimElement.style['borderStyle'] = ($clinit_Style$BorderStyle() , 'none');
    this$static.shimElement.tabIndex = -1;
    this$static.shimElement.frameBorder = 0;
    this$static.shimElement.marginHeight = 0;
  }
  return this$static.shimElement;
}

function $hide_0(this$static, autoClosed){
  var animationName, cs;
  if ($isIE8(($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1)) || $isIE9((!instance_1 && (instance_1 = new BrowserInfo) , instance_1))) {
    $hide(this$static);
  }
   else {
    if ($indexOf_0(impl_7.getStyleElement_0(getFirstChild(($clinit_DOM() , this$static.element))).className || '', 'animate-in') != -1) {
      addAnimationEndListener(this$static.element, new Overlay$2(this$static, autoClosed));
    }
     else {
      $setStyleName_0(this$static, getStylePrimaryName(impl_7.getStyleElement_0(getFirstChild(this$static.element))) + '-' + 'animate-out', true);
      cs = new ComputedStyle(this$static.element);
      animationName = getAnimationName_0(cs);
      animationName == null && (animationName = '');
      if (($clinit_String() , animationName).indexOf('animate-out') != -1) {
        this$static.isAnimationEnabled = false;
        addAnimationEndListener(this$static.element, new Overlay$3(this$static, autoClosed));
        this$static.previewAllNativeEvents = false;
      }
       else {
        $setStyleName_0(this$static, getStylePrimaryName(impl_7.getStyleElement_0(getFirstChild(this$static.element))) + '-' + 'animate-out', false);
        $hide(this$static);
      }
    }
  }
}

function $maybeShowWithAnimation(this$static){
  var animationName, cs, isAttached;
  isAttached = this$static.attached && this$static.showing;
  $show(this$static);
  if (isAttached || $isIE8(($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1)) || $isIE9(($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1))) {
    return false;
  }
   else {
    ($clinit_DOM() , this$static.element).style['visibility'] = 'hidden';
    !!this$static.shimElement && (this$static.shimElement.style['visibility'] = 'hidden' , undefined);
    $setStyleName_0(this$static, getStylePrimaryName(impl_7.getStyleElement_0(getFirstChild(this$static.element))) + '-' + 'animate-in', true);
    cs = new ComputedStyle(this$static.element);
    animationName = getAnimationName_0(cs);
    animationName == null && (animationName = '');
    this$static.element.style['visibility'] = 'visible';
    !!this$static.shimElement && (this$static.shimElement.style['visibility'] = 'visible' , undefined);
    if (($clinit_String() , animationName).indexOf('animate-in') != -1) {
      this$static.isAnimationEnabled = false;
      this$static.animateInListener = addAnimationEndListener(this$static.element, new Overlay$1(this$static));
      return true;
    }
     else {
      $setStyleName_0(this$static, getStylePrimaryName(impl_7.getStyleElement_0(getFirstChild(this$static.element))) + '-' + 'animate-in', false);
      return false;
    }
  }
}

function $positionOrSizeUpdated(this$static, progress){
  var container, info, info0, positionAndSize, x_0, y_0;
  if (!this$static.attached) {
    return;
  }
  try {
    __parseAndValidateInt($getZIndex(($clinit_DOM() , this$static.element).style));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 10))
      throw toJs($e0);
  }
  if (($clinit_BrowserInfo() , !instance_1 && (instance_1 = new BrowserInfo) , $clinit_BrowserInfo() , instance_1).browserDetails.isIE) {
    $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetHeight');
    $getPropertyInt(this$static.element, 'offsetWidth');
  }
  info0 = (!instance_1 && (instance_1 = new BrowserInfo) , instance_1);
  if (info0.browserDetails.isIE && $isBrowserVersionNewerOrEqual(info0)) {
    positionAndSize = new Overlay$PositionAndSize((x_0 = $getAbsoluteLeft(($clinit_DOM() , this$static.element)) , x_0 -= $getBodyOffsetLeft($doc) , x_0 -= (leftFix == -1 && (leftFix = detectRelativeBodyFixes('left')) , leftFix) , x_0), (y_0 = $getAbsoluteTop(this$static.element) , y_0 -= $getBodyOffsetTop($doc) , y_0 -= (topFix == -1 && (topFix = detectRelativeBodyFixes('top')) , topFix) , y_0), $getPropertyInt(this$static.element, 'offsetWidth'), $getPropertyInt(this$static.element, 'offsetHeight'));
    positionAndSize.left_0 += round_int(positionAndSize.width_0 * (1 - progress) / 2);
    positionAndSize.top_0 += round_int(positionAndSize.height_0 * (1 - progress) / 2);
    positionAndSize.width_0 = round_int(positionAndSize.width_0 * progress);
    positionAndSize.height_0 = round_int(positionAndSize.height_0 * progress);
    container = $getParentElement(this$static.element);
    info = (!instance_1 && (instance_1 = new BrowserInfo) , instance_1);
    if (info.browserDetails.isIE && $isBrowserVersionNewerOrEqual(info)) {
      $updatePositionAndSize($getShimElement(this$static), positionAndSize);
      !$getParentElement(this$static.shimElement) && $insertBefore(container, this$static.shimElement, this$static.element);
    }
  }
  ($isIE9((!instance_1 && (instance_1 = new BrowserInfo) , instance_1)) || $isIE10((!instance_1 && (instance_1 = new BrowserInfo) , instance_1))) && forceIERedraw(($clinit_DOM() , this$static.element));
}

function $setPopupPosition_0(this$static, left, top_0){
  var style;
  style = ($clinit_DOM() , this$static.element).style;
  style['marginLeft'] = (leftFix == -1 && (leftFix = detectRelativeBodyFixes('left')) , -leftFix + ($clinit_Style$Unit() , 'px'));
  style['marginTop'] = (topFix == -1 && (topFix = detectRelativeBodyFixes('top')) , -topFix + 'px');
  $setPopupPosition(this$static, left, top_0);
  $positionOrSizeUpdated(this$static, this$static.isAnimationEnabled?0:1);
}

function $setZIndex(this$static, zIndex){
  ($clinit_DOM() , this$static.element).style['zIndex'] = zIndex + '';
}

function $updatePositionAndSize(e, positionAndSize){
  e.style['left'] = positionAndSize.left_0 + ($clinit_Style$Unit() , 'px');
  e.style['top'] = positionAndSize.top_0 + 'px';
  e.style['width'] = positionAndSize.width_0 + 'px';
  e.style['height'] = positionAndSize.height_0 + 'px';
}

function Overlay(){
  $clinit_PopupPanel();
  SimplePanel.call(this, ($clinit_DOM() , $createDivElement($doc)));
  this.glassResizer = new PopupPanel$1;
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, impl_7.createElement_1());
  this.setPopupPosition(0, 0);
  impl_7.getStyleElement_0(getFirstChild(this.element)).className = 'gwt-PopupPanel';
  impl_7.getContainerElement_0((null , $getFirstChildElement(this.element))).className = 'popupContent';
  $setZIndex(this, Z_INDEX);
}

function detectRelativeBodyFixes(axis_0){
  try {
    var b = $wnd.document.body;
    var cstyle = b.currentStyle?b.currentStyle:getComputedStyle(b);
    if (cstyle && cstyle.position == 'relative') {
      return b.getBoundingClientRect()[axis_0];
    }
  }
   catch (e) {
  }
  return 0;
}

defineClass(421, 252, {182:1, 28:1, 17:1, 22:1, 21:1, 25:1, 44:1, 29:1, 19:1, 16:1}, Overlay);
_.hide = function hide_1(){
  $hide_0(this, false);
}
;
_.hide_0 = function hide_2(autoClosed){
  $hide_0(this, autoClosed);
}
;
_.onAttach = function onAttach_4(){
  var e, overlay;
  overlay = current_0;
  if (overlay) {
    e = $getElement(($clinit_RootPanel() , get_0(null)));
    $appendChild(e, ($clinit_DOM() , this.element));
  }
  $onAttach(this);
}
;
_.onClose = function onClose_1(event_0){
}
;
_.onDetach = function onDetach_3(){
  $onDetach(this);
  !!this.shimElement && $removeFromParent(this.shimElement);
}
;
_.setPopupPosition = function setPopupPosition_0(left, top_0){
  $setPopupPosition_0(this, left, top_0);
}
;
_.sinkEvents_0 = function sinkEvents_5(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents(($clinit_DOM() , this.element), eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
var Z_INDEX = 20000, current_0, leftFix = -1, topFix = -1;
var Lcom_vaadin_client_widgets_Overlay_2_classLit = createForClass('com.vaadin.client.widgets', 'Overlay', 421);
function Overlay$1(this$0){
  this.this$01 = this$0;
}

defineClass(424, 1, {}, Overlay$1);
_.onAnimationEnd = function onAnimationEnd(event_0){
  var animationName;
  animationName = getAnimationName(event_0);
  if (($clinit_String() , animationName).indexOf('animate-in') != -1) {
    removeAnimationEndListener($getElement(this.this$01), this.this$01.animateInListener);
    $removeStyleDependentName(this.this$01, 'animate-in');
  }
}
;
var Lcom_vaadin_client_widgets_Overlay$1_2_classLit = createForClass('com.vaadin.client.widgets', 'Overlay/1', 424);
function Overlay$2(this$0, val$autoClosed){
  this.this$01 = this$0;
  this.val$autoClosed2 = val$autoClosed;
}

defineClass(425, 1, {}, Overlay$2);
_.onAnimationEnd = function onAnimationEnd_0(event_0){
  $indexOf_0(getAnimationName(event_0), 'animate-in') != -1 && $hide_0(this.this$01, this.val$autoClosed2);
}
;
_.val$autoClosed2 = false;
var Lcom_vaadin_client_widgets_Overlay$2_2_classLit = createForClass('com.vaadin.client.widgets', 'Overlay/2', 425);
function Overlay$3(this$0, val$autoClosed){
  this.this$01 = this$0;
  this.val$autoClosed2 = val$autoClosed;
}

defineClass(426, 1, {}, Overlay$3);
_.onAnimationEnd = function onAnimationEnd_1(event_0){
  var animationName;
  animationName = getAnimationName(event_0);
  if (($clinit_String() , animationName).indexOf('animate-out') != -1) {
    removeAllAnimationEndListeners($getElement(this.this$01));
    $removeStyleDependentName(this.this$01, 'animate-in');
    $removeStyleDependentName(this.this$01, 'animate-out');
    $hide(this.this$01);
  }
}
;
_.val$autoClosed2 = false;
var Lcom_vaadin_client_widgets_Overlay$3_2_classLit = createForClass('com.vaadin.client.widgets', 'Overlay/3', 426);
function $setHeight_3(this$static, height){
  height < 0 && (height = 0);
  this$static.height_0 = height;
}

function $setWidth_2(this$static, width_0){
  width_0 < 0 && (width_0 = 0);
  this$static.width_0 = width_0;
}

function Overlay$PositionAndSize(left, top_0, width_0, height){
  this.left_0 = left;
  this.top_0 = top_0;
  $setWidth_2(this, width_0);
  $setHeight_3(this, height);
}

defineClass(422, 1, {}, Overlay$PositionAndSize);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.width_0 = 0;
var Lcom_vaadin_client_widgets_Overlay$PositionAndSize_2_classLit = createForClass('com.vaadin.client.widgets', 'Overlay/PositionAndSize', 422);
function Overlay$ResizeAnimation(this$0){
  this.this$01 = this$0;
  Animation.call(this);
}

defineClass(423, 109, {}, Overlay$ResizeAnimation);
_.onUpdate = function onUpdate_1(progress){
  $positionOrSizeUpdated(this.this$01, progress);
}
;
var Lcom_vaadin_client_widgets_Overlay$ResizeAnimation_2_classLit = createForClass('com.vaadin.client.widgets', 'Overlay/ResizeAnimation', 423);
function $parseAndroidVersion(this$static, userAgent){
  var osVersionString, parts;
  if (($clinit_String() , userAgent).indexOf('android') == -1) {
    return;
  }
  osVersionString = $safeSubstring(userAgent, userAgent.indexOf('android ') + 8, userAgent.length);
  osVersionString = $safeSubstring(osVersionString, 0, osVersionString.indexOf(';'));
  parts = $split(osVersionString, '\\.', 0);
  $parseOsVersion(this$static, parts);
}

function $parseIOSVersion(this$static, userAgent){
  var osVersionString, parts;
  if (($clinit_String() , userAgent).indexOf('os ') == -1 || userAgent.indexOf(' like mac') == -1) {
    return;
  }
  osVersionString = $safeSubstring(userAgent, userAgent.indexOf('os ') + 3, userAgent.indexOf(' like mac'));
  parts = $split(osVersionString, '_', 0);
  $parseOsVersion(this$static, parts);
}

function $parseOsVersion(this$static, parts){
  this$static.osMajorVersion = -1;
  this$static.osMinorVersion = -1;
  if (parts.length >= 1) {
    try {
      this$static.osMajorVersion = __parseAndValidateInt(parts[0]);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (!instanceOf($e0, 10))
        throw toJs($e0);
    }
  }
  if (parts.length >= 2) {
    try {
      this$static.osMinorVersion = __parseAndValidateInt(parts[1]);
    }
     catch ($e1) {
      $e1 = toJava($e1);
      if (!instanceOf($e1, 10))
        throw toJs($e1);
    }
    if (this$static.osMinorVersion == -1 && ($clinit_String() , parts[1]).indexOf('-') != -1) {
      try {
        this$static.osMinorVersion = __parseAndValidateInt($substring_0(parts[1], 0, $indexOf_0(parts[1], fromCodePoint(45))));
      }
       catch ($e2) {
        $e2 = toJava($e2);
        if (!instanceOf($e2, 10))
          throw toJs($e2);
      }
    }
  }
}

function $parseVersionString(this$static, versionString){
  var idx, idx2;
  idx = $indexOf_0(versionString, fromCodePoint(46));
  idx < 0 && (idx = ($clinit_String() , versionString).length);
  this$static.browserMajorVersion = __parseAndValidateInt($safeSubstring(versionString, 0, idx));
  idx2 = $indexOf_1(versionString, fromCodePoint(46), idx + 1);
  idx2 < 0 && (idx2 = ($clinit_String() , versionString).length);
  try {
    this$static.browserMinorVersion = __parseAndValidateInt($replaceAll_0($safeSubstring(versionString, idx + 1, idx2), '[^0-9].*', ''));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 75))
      throw toJs($e0);
  }
}

function $safeSubstring(string, beginIndex, endIndex){
  beginIndex < 0 && (beginIndex = 0);
  (endIndex < 0 || endIndex > ($clinit_String() , string).length) && (endIndex = ($clinit_String() , string).length);
  return ($clinit_String() , string).substr(beginIndex, endIndex - beginIndex);
}

function $setIEMode(this$static, documentMode){
  this$static.browserMajorVersion = documentMode;
  this$static.browserMinorVersion = 0;
}

function VBrowserDetails(userAgent){
  var i_0, ieVersionString, rvPos, tmp, tridentPos;
  userAgent = ($clinit_String() , userAgent).toLowerCase();
  this.isGecko = userAgent.indexOf('gecko') != -1 && userAgent.indexOf('webkit') == -1 && userAgent.indexOf('trident/') == -1;
  userAgent.indexOf(' presto/') != -1;
  this.isTrident = userAgent.indexOf('trident/') != -1;
  this.isWebKit = !this.isTrident && userAgent.indexOf('applewebkit') != -1;
  this.isChrome = userAgent.indexOf(' chrome/') != -1;
  this.isOpera = userAgent.indexOf('opera') != -1;
  this.isIE = userAgent.indexOf('msie') != -1 && !this.isOpera && userAgent.indexOf('webtv') == -1;
  this.isIE = this.isIE || this.isTrident;
  this.isSafari = !this.isChrome && !this.isIE && userAgent.indexOf('safari') != -1;
  this.isFirefox = userAgent.indexOf(' firefox/') != -1;
  this.isPhantomJS = userAgent.indexOf('phantomjs/') != -1;
  if (userAgent.indexOf(' edge/') != -1) {
    this.isEdge = true;
    this.isChrome = false;
    this.isOpera = false;
    this.isIE = false;
    this.isSafari = false;
    this.isFirefox = false;
    this.isWebKit = false;
    this.isGecko = false;
  }
  userAgent.indexOf('chromeframe') != -1;
  try {
    if (this.isGecko) {
      rvPos = userAgent.indexOf('rv:');
      if (rvPos >= 0) {
        tmp = userAgent.substr(rvPos + 3, userAgent.length - (rvPos + 3));
        tmp = $replaceFirst(tmp, '(\\.[0-9]+).+', '$1');
        parseFloat_0(tmp);
      }
    }
     else if (this.isWebKit) {
      tmp = $substring(userAgent, userAgent.indexOf('webkit/') + 7);
      tmp = $replaceFirst(tmp, '([0-9]+)[^0-9].+', '$1');
      parseFloat_0(tmp);
    }
     else if (this.isIE) {
      tridentPos = userAgent.indexOf('trident/');
      if (tridentPos >= 0) {
        tmp = userAgent.substr(tridentPos + 8, userAgent.length - (tridentPos + 8));
        tmp = $replaceFirst(tmp, '([0-9]+\\.[0-9]+).*', '$1');
        parseFloat_0(tmp);
      }
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      $clinit_System();
    }
     else 
      throw toJs($e0);
  }
  try {
    if (this.isIE) {
      if (userAgent.indexOf('msie') == -1) {
        rvPos = userAgent.indexOf('rv:');
        if (rvPos >= 0) {
          tmp = userAgent.substr(rvPos + 3, userAgent.length - (rvPos + 3));
          tmp = $replaceFirst(tmp, '(\\.[0-9]+).+', '$1');
          $parseVersionString(this, tmp);
        }
      }
       else {
        ieVersionString = $substring(userAgent, userAgent.indexOf('msie ') + 5);
        ieVersionString = $safeSubstring(ieVersionString, 0, ieVersionString.indexOf(';'));
        $parseVersionString(this, ieVersionString);
      }
    }
     else if (this.isFirefox) {
      i_0 = userAgent.indexOf(' firefox/') + 9;
      $parseVersionString(this, $safeSubstring(userAgent, i_0, i_0 + 5));
    }
     else if (this.isChrome) {
      i_0 = userAgent.indexOf(' chrome/') + 8;
      $parseVersionString(this, $safeSubstring(userAgent, i_0, i_0 + 5));
    }
     else if (this.isSafari) {
      i_0 = userAgent.indexOf(' version/') + 9;
      $parseVersionString(this, $safeSubstring(userAgent, i_0, i_0 + 5));
    }
     else if (this.isOpera) {
      i_0 = userAgent.indexOf(' version/');
      i_0 != -1?(i_0 += 9):(i_0 = userAgent.indexOf('opera/') + 6);
      $parseVersionString(this, $safeSubstring(userAgent, i_0, i_0 + 5));
    }
     else if (this.isEdge) {
      i_0 = userAgent.indexOf(' edge/') + 6;
      $parseVersionString(this, $safeSubstring(userAgent, i_0, i_0 + 8));
    }
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 10)) {
      $clinit_System();
    }
     else 
      throw toJs($e1);
  }
  if (userAgent.indexOf('windows ') != -1) {
    this.os = 1;
    userAgent.indexOf('windows phone') != -1;
  }
   else if (userAgent.indexOf('android') != -1) {
    this.os = 5;
    $parseAndroidVersion(this, userAgent);
  }
   else if (userAgent.indexOf('linux') != -1) {
    this.os = 3;
  }
   else if (userAgent.indexOf('macintosh') != -1 || userAgent.indexOf('mac osx') != -1 || userAgent.indexOf('mac os x') != -1) {
    this.isIPad = userAgent.indexOf('ipad') != -1;
    this.isIPhone = userAgent.indexOf('iphone') != -1;
    if (this.isIPad || userAgent.indexOf('ipod') != -1 || this.isIPhone) {
      this.os = 4;
      $parseIOSVersion(this, userAgent);
    }
     else {
      this.os = 2;
    }
  }
}

defineClass(445, 1, $intern_1, VBrowserDetails);
_.browserMajorVersion = -1;
_.browserMinorVersion = -1;
_.isChrome = false;
_.isEdge = false;
_.isFirefox = false;
_.isGecko = false;
_.isIE = false;
_.isIPad = false;
_.isIPhone = false;
_.isOpera = false;
_.isPhantomJS = false;
_.isSafari = false;
_.isTrident = false;
_.isWebKit = false;
_.os = 0;
_.osMajorVersion = -1;
_.osMinorVersion = -1;
var Lcom_vaadin_shared_VBrowserDetails_2_classLit = createForClass('com.vaadin.shared', 'VBrowserDetails', 445);
function $clinit_GridConstants$Section(){
  $clinit_GridConstants$Section = emptyMethod;
  HEADER = new GridConstants$Section('HEADER', 0);
  BODY = new GridConstants$Section('BODY', 1);
  FOOTER = new GridConstants$Section('FOOTER', 2);
}

function GridConstants$Section(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_GridConstants$Section();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_shared_ui_grid_GridConstants$Section_2_classLit, 1), $intern_1, 100, 0, [HEADER, BODY, FOOTER]);
}

defineClass(100, 4, {100:1, 3:1, 5:1, 4:1}, GridConstants$Section);
var BODY, FOOTER, HEADER;
var Lcom_vaadin_shared_ui_grid_GridConstants$Section_2_classLit = createForEnum('com.vaadin.shared.ui.grid', 'GridConstants/Section', 100, values_9);
function $clinit_GridStaticCellType(){
  $clinit_GridStaticCellType = emptyMethod;
  TEXT = new GridStaticCellType('TEXT', 0);
  HTML = new GridStaticCellType('HTML', 1);
  WIDGET = new GridStaticCellType('WIDGET', 2);
}

function GridStaticCellType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_GridStaticCellType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_shared_ui_grid_GridStaticCellType_2_classLit, 1), $intern_1, 96, 0, [TEXT, HTML, WIDGET]);
}

defineClass(96, 4, {96:1, 3:1, 5:1, 4:1}, GridStaticCellType);
var HTML, TEXT, WIDGET;
var Lcom_vaadin_shared_ui_grid_GridStaticCellType_2_classLit = createForEnum('com.vaadin.shared.ui.grid', 'GridStaticCellType', 96, values_10);
function $combineWith(this$static, other){
  if (this$static.start_0 > other.end || other.start_0 > this$static.end) {
    throw toJs(new IllegalArgumentException('There is a gap between ' + this$static + ' and ' + other));
  }
  return new Range_0(min_0(this$static.start_0, other.start_0), max_0(this$static.end, other.end));
}

function $contains(this$static, integer){
  return this$static.start_0 <= integer && integer < this$static.end;
}

function $equals(this$static, obj){
  var other;
  if (this$static === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (Lcom_vaadin_shared_ui_grid_Range_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj)) {
    return false;
  }
  other = castTo(obj, 18);
  if (this$static.end != other.end) {
    return false;
  }
  if (this$static.start_0 != other.start_0) {
    return false;
  }
  return true;
}

function $intersects(this$static, other){
  return this$static.start_0 < other.end && other.start_0 < this$static.end;
}

function $isSubsetOf(this$static, other){
  if (this$static.start_0 >= this$static.end && other.start_0 >= other.end) {
    return true;
  }
  return other.start_0 <= this$static.start_0 && this$static.end <= other.end;
}

function $length_0(this$static){
  return this$static.end - this$static.start_0;
}

function $partitionWith(this$static, other){
  var rangeAfter, rangeBefore, rangeInside, splitAfter, splitBefore;
  splitBefore = $splitAt(this$static, other.start_0);
  rangeBefore = splitBefore[0];
  splitAfter = $splitAt(splitBefore[1], other.end);
  rangeInside = splitAfter[0];
  rangeAfter = splitAfter[1];
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_shared_ui_grid_Range_2_classLit, 1), $intern_1, 18, 0, [rangeBefore, rangeInside, rangeAfter]);
}

function $splitAt(this$static, integer){
  return integer < this$static.start_0?stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_shared_ui_grid_Range_2_classLit, 1), $intern_1, 18, 0, [withLength(this$static.start_0, 0), this$static]):integer >= this$static.end?stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_shared_ui_grid_Range_2_classLit, 1), $intern_1, 18, 0, [this$static, withLength(this$static.end, 0)]):stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_shared_ui_grid_Range_2_classLit, 1), $intern_1, 18, 0, [new Range_0(this$static.start_0, integer), new Range_0(integer, this$static.end)]);
}

function Range_0(start_0, end){
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException('start must not be greater than end'));
  }
  this.start_0 = start_0;
  this.end = end;
}

function withLength(start_0, length_0){
  if (length_0 < 0) {
    throw toJs(new IllegalArgumentException('length must not be negative'));
  }
  return new Range_0(start_0, start_0 + length_0);
}

defineClass(18, 1, {18:1, 3:1}, Range_0);
_.equals = function equals_5(obj){
  return $equals(this, obj);
}
;
_.hashCode = function hashCode_7(){
  var result;
  result = 31 + this.end;
  result = 31 * result + this.start_0;
  return result;
}
;
_.toString_0 = function toString_18(){
  return $ensureNamesAreInitialized(Lcom_vaadin_shared_ui_grid_Range_2_classLit) , Lcom_vaadin_shared_ui_grid_Range_2_classLit.simpleName + ' [' + this.start_0 + '..' + this.end + '[' + (this.start_0 >= this.end?' (empty)':'');
}
;
_.end = 0;
_.start_0 = 0;
var Lcom_vaadin_shared_ui_grid_Range_2_classLit = createForClass('com.vaadin.shared.ui.grid', 'Range', 18);
function $clinit_ScrollDestination(){
  $clinit_ScrollDestination = emptyMethod;
  ANY = new ScrollDestination('ANY', 0);
  START = new ScrollDestination('START', 1);
  MIDDLE = new ScrollDestination('MIDDLE', 2);
  END = new ScrollDestination('END', 3);
}

function ScrollDestination(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_ScrollDestination();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_vaadin_shared_ui_grid_ScrollDestination_2_classLit, 1), $intern_1, 88, 0, [ANY, START, MIDDLE, END]);
}

defineClass(88, 4, {88:1, 3:1, 5:1, 4:1}, ScrollDestination);
var ANY, END, MIDDLE, START;
var Lcom_vaadin_shared_ui_grid_ScrollDestination_2_classLit = createForEnum('com.vaadin.shared.ui.grid', 'ScrollDestination', 88, values_11);
function equals_6(o1, o2){
  if (o1 == null) {
    return o2 == null;
  }
  return equals_Ljava_lang_Object__Z__devirtual$(o1, o2);
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(170, 1, {});
_.toString_0 = function toString_19(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 170);
function ArrayStoreException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

defineClass(283, 13, $intern_6, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 283);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = false;
  TRUE = true;
}

function $compareTo_0(this$static, b){
  return compare_2(unsafeCast((checkCriticalNotNull(this$static) , this$static)), unsafeCast((checkCriticalNotNull(b) , b)));
}

function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?compareTo_1(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_1(this$static, castToDouble(other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, castToBoolean(other)):this$static.compareTo(other);
}

function toString_20(x_0){
  return $clinit_String() , '' + x_0;
}

function unsafeCast(value_0){
  $clinit_Boolean();
  return value_0;
}

booleanCastMap = {3:1, 190:1, 5:1};
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 190);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

defineClass(193, 13, $intern_6, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 193);
function __parseAndValidateDouble(s){
  floatRegex == null && (floatRegex = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);
  if (!floatRegex.test(s)) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s){
  var i_0, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('null')));
  }
  length_0 = ($clinit_String() , s).length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i_0 = startIndex; i_0 < length_0; i_0++) {
    if (digit(s.charCodeAt(i_0)) == -1) {
      throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_20;
  if (isNaN(toReturn)) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
  }
  return toReturn;
}

function doubleValue__D__devirtual$(this$static){
  return instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static):this$static.doubleValue();
}

defineClass(70, 1, {3:1, 70:1});
var floatRegex;
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 70);
function $compareTo_1(this$static, b){
  return compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_3(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

function toString_22(b){
  return $clinit_String() , '' + b;
}

doubleCastMap = {3:1, 5:1, 191:1, 70:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 191);
function parseFloat_0(s){
  var doubleValue;
  doubleValue = __parseAndValidateDouble(s);
  if (doubleValue > 3.4028234663852886E38) {
    return Infinity;
  }
   else if (doubleValue < -3.4028234663852886E38) {
    return -Infinity;
  }
  return doubleValue;
}

function IllegalArgumentException(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(12, 13, $intern_6, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 12);
function IllegalStateException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  $clinit_Throwable();
  RuntimeException_0.call(this, s);
}

defineClass(20, 13, $intern_6, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 20);
function IndexOutOfBoundsException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(32, 13, {3:1, 10:1, 32:1, 13:1, 7:1}, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 32);
function $compareTo_2(this$static, b){
  return compare_4(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function toString_24(value_0){
  return $clinit_String() , '' + value_0;
}

function valueOf(i_0){
  var rebase, result;
  if (i_0 > -129 && i_0 < 128) {
    rebase = i_0 + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i_0));
    return result;
  }
  return new Integer(i_0);
}

defineClass(46, 70, {3:1, 5:1, 46:1, 70:1}, Integer);
_.compareTo = function compareTo_0(b){
  return $compareTo_2(this, castTo(b, 46));
}
;
_.doubleValue = function doubleValue_0(){
  return this.value_0;
}
;
_.equals = function equals_7(o){
  return instanceOf(o, 46) && castTo(o, 46).value_0 == this.value_0;
}
;
_.hashCode = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_23(){
  return toString_24(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 46);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_1, 46, 256, 0, 1);
}

var boxedValues;
function compare_5(x_0, y_0){
  return compare_1(x_0, y_0) < 0?-1:compare_1(x_0, y_0) > 0?1:0;
}

function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function abs_1(x_0){
  return x_0 < 0?-x_0:x_0;
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(72, 13, $intern_6, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 72);
function NumberFormatException(message){
  $clinit_Throwable();
  IllegalArgumentException.call(this, message);
}

defineClass(75, 12, {3:1, 10:1, 75:1, 13:1, 7:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 75);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(59, 1, {3:1, 59:1}, StackTraceElement);
_.equals = function equals_8(other){
  var st;
  if (instanceOf(other, 59)) {
    st = castTo(other, 59);
    return this.lineNumber == st.lineNumber && equals_24(this.methodName, st.methodName) && equals_24(this.className_0, st.className_0) && equals_24(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode = function hashCode_9(){
  return hashCode_16(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_25(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 59);
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(94, 170, {607:1}, StringBuilder, StringBuilder_0);
_.toString_0 = function toString_26(){
  return this.string;
}
;
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 94);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream(null);
  new PrintStream(null);
}

var err;
function UnsupportedOperationException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(31, 13, $intern_6, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 31);
function $addAll(this$static, c){
  var changed, e, e$iterator, entry, old, outerIter;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(c.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); e$iterator.val$outerIter2.hasNext;) {
    e = (entry = $next_2(e$iterator.val$outerIter2) , entry.getKey());
    changed = changed | (old = $put_2(this$static.map_0, e, this$static) , old == null);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator_0(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $clear_0(this$static){
  var iter;
  for (iter = this$static.this$01.entryIterator(); $hasNext(iter.iter);) {
    iter.last_0 = castTo($next_3(iter.iter), 8);
    $remove_22(iter);
  }
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator_0(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $removeAll(this$static, c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = new ArrayList$1(this$static); iter.i < iter.this$01.array.length;) {
    o = $next_4(iter);
    if ($indexOf_3(c, o, 0) != -1) {
      $remove_12(iter);
      changed = true;
    }
  }
  return changed;
}

function $toArray(this$static, a){
  var i_0, it, result, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = (result = new Array(size_0) , stampJavaTypeInfo_0(result, a)));
  it = this$static.iterator_0();
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(a, i_0, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_3(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator_0(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_10(joiner, e === this$static?'(this Collection)':($clinit_String() , e == null?'null':toString__Ljava_lang_String___devirtual$(e)));
  }
  return !joiner.builder?joiner.emptyValue:toNative(joiner.suffix).length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(581, 1, {});
_.equals = function equals_10(other){
  return this === other;
}
;
_.hashCode = function hashCode_10(){
  return getObjectIdentityHashCode(this);
}
;
_.contains_0 = function contains_0(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.toArray = function toArray_0(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_1(a){
  return $toArray(this, a);
}
;
_.toString_0 = function toString_27(){
  return $toString_3(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 581);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue_0();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator_0(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 8);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue_0());
        iter.remove_0();
      }
      return entry;
    }
  }
  return null;
}

function $putAll(this$static, map_0){
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = (new TreeMap$EntrySet(map_0)).this$01.entryIterator(); $hasNext(e$iterator.iter);) {
    e = e$iterator.last_0 = castTo($next_3(e$iterator.iter), 8);
    this$static.put(e.getKey(), e.getValue_0());
  }
}

function $toString_4(this$static, o){
  return o === this$static?'(this Map)':($clinit_String() , o == null?'null':toString__Ljava_lang_String___devirtual$(o));
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue_0();
}

defineClass(580, 1, $intern_54);
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.containsValue = function containsValue(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = this.entrySet_0().iterator_0(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 8);
    v = entry.getValue_0();
    if (maskUndefined(value_0) === maskUndefined(v) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals = function equals_11(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 45)) {
    return false;
  }
  otherMap = castTo(obj, 45);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator_0(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 8);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_2(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode = function hashCode_11(){
  return hashCode_17(this.entrySet_0());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_2 = function remove_10(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_2(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_28(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet_0().iterator_0(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 8);
    $add_10(joiner, $toString_4(this, entry.getKey()) + '=' + $toString_4(this, entry.getValue_0()));
  }
  return !joiner.builder?joiner.emptyValue:toNative(joiner.suffix).length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 580);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator_0(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 8);
    if (this$static.equals_0(value_0, entry.getValue_0())) {
      return true;
    }
  }
  return false;
}

function $get_3(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_8(this$static.stringMap, key);
}

function $put_2(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_3(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_3(this$static.hashCodeMap, null, value_0):$put_4(this$static.stringMap, key, value_0);
}

function $remove_6(this$static, key){
  return instanceOfString(key)?key == null?$remove_16(this$static.hashCodeMap, null):$remove_17(this$static.stringMap, key):$remove_16(this$static.hashCodeMap, key);
}

function $reset_0(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(112, 580, $intern_54);
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.containsValue = function containsValue_0(value_0){
  return $containsValue(this, value_0, this.stringMap) || $containsValue(this, value_0, this.hashCodeMap);
}
;
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_3(key){
  return $get_3(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put_2(this, key, value_0);
}
;
_.remove_2 = function remove_11(key){
  return $remove_6(this, key);
}
;
_.size_1 = function size_3(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 112);
defineClass(582, 581, $intern_55);
_.contains_0 = function contains_1(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty_2(){
  return this.size_1() == 0;
}
;
_.toArray = function toArray_2(){
  return $toArray(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_3(a){
  return $toArray(this, a);
}
;
_.equals = function equals_12(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 41)) {
    return false;
  }
  other = castTo(o, 41);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode = function hashCode_12(){
  return hashCode_17(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 582);
function $contains_0(this$static, o){
  if (instanceOf(o, 8)) {
    return $containsEntry(this$static.this$01, castTo(o, 8));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(47, 582, $intern_55, AbstractHashMap$EntrySet);
_.contains_0 = function contains_2(o){
  return $contains_0(this, o);
}
;
_.iterator_0 = function iterator_7(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 47);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_2(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last_0 = this$static.current;
  rv = castTo(this$static.current.next_1(), 8);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_7(this$static){
  checkCriticalState(!!this$static.last_0);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last_0.remove_0();
  this$static.last_0 = null;
  this$static.hasNext = $computeHasNext(this$static);
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(48, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_4(){
  return $next_2(this);
}
;
_.hasNext_0 = function hasNext_3(){
  return this.hasNext;
}
;
_.remove_0 = function remove_12(){
  $remove_7(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 48);
function $clear_1(this$static){
  $removeRange(this$static, this$static.size_0);
}

function $indexOf_2(this$static, toFind){
  var i_0, n;
  for (i_0 = 0 , n = this$static.size_1(); i_0 < n; ++i_0) {
    if (equals_24(toFind, this$static.get_0(i_0))) {
      return i_0;
    }
  }
  return -1;
}

function $removeRange(this$static, endIndex){
  var i_0, iter;
  iter = new AbstractList$ListIteratorImpl(this$static, 0);
  for (i_0 = 0; i_0 < endIndex; ++i_0) {
    checkCriticalElement(iter.i < iter.this$01_0.size_1());
    iter.this$01_0.get_0(iter.last_0 = iter.i++);
    $remove_8(iter);
  }
}

defineClass(583, 581, $intern_47);
_.contains_0 = function contains_3(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty_3(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_14(o){
  return $advanceToFind(this, o, true);
}
;
_.toArray = function toArray_4(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_5(a){
  return $toArray(this, a);
}
;
_.add_1 = function add_2(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_3(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals = function equals_13(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 33)) {
    return false;
  }
  other = castTo(o, 33);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator_0();
  for (elem$iterator = this.iterator_0(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode = function hashCode_13(){
  return hashCode_18(this);
}
;
_.indexOf_0 = function indexOf_0(toFind){
  return $indexOf_2(this, toFind);
}
;
_.iterator_0 = function iterator_8(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator_1(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_2(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_3 = function remove_13(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.subList = function subList_0(fromIndex, toIndex){
  return new AbstractList$SubList(this, fromIndex, toIndex);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 583);
function $remove_8(this$static){
  checkCriticalState(this$static.last_0 != -1);
  this$static.this$01_0.remove_3(this$static.last_0);
  this$static.i = this$static.last_0;
  this$static.last_0 = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(125, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_5(){
  return checkCriticalElement(this.hasNext_0()) , this.this$01_0.get_0(this.last_0 = this.i++);
}
;
_.remove_0 = function remove_15(){
  $remove_8(this);
}
;
_.i = 0;
_.last_0 = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 125);
function $hasNext(this$static){
  return this$static.i < this$static.this$01_0.size_1();
}

function $next_3(this$static){
  return checkCriticalElement(this$static.i < this$static.this$01_0.size_1()) , this$static.this$01_0.get_0(this$static.last_0 = this$static.i++);
}

function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(113, 125, {}, AbstractList$ListIteratorImpl);
_.hasNext_0 = function hasNext_5(){
  return $hasNext(this);
}
;
_.next_1 = function next_6(){
  return $next_3(this);
}
;
_.remove_0 = function remove_16(){
  $remove_8(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  return checkCriticalElement(this.i > 0) , this.this$01.get_0(this.last_0 = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 113);
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size_1());
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(40, 583, $intern_47, AbstractList$SubList);
_.add_1 = function add_4(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  this.wrapped.add_1(this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.get_0 = function get_4(index_0){
  return checkCriticalElementIndex(index_0, this.size_0) , this.wrapped.get_0(this.fromIndex + index_0);
}
;
_.remove_3 = function remove_17(index_0){
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = this.wrapped.remove_3(this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.size_1 = function size_5(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 40);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(52, 582, $intern_55, AbstractMap$1);
_.contains_0 = function contains_4(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator_0 = function iterator_9(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 52);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(53, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_6(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_7(){
  var entry;
  return entry = $next_2(this.val$outerIter2) , entry.getKey();
}
;
_.remove_0 = function remove_18(){
  $remove_7(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 53);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(30, 581, {}, AbstractMap$2);
_.contains_0 = function contains_5(value_0){
  return this.this$01.containsValue(value_0);
}
;
_.iterator_0 = function iterator_10(){
  var outerIter;
  return outerIter = this.this$01.entrySet_0().iterator_0() , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_7(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 30);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(39, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_7(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_8(){
  var entry;
  return entry = castTo(this.val$outerIter2.next_1(), 8) , entry.getValue_0();
}
;
_.remove_0 = function remove_19(){
  this.val$outerIter2.remove_0();
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 39);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

function AbstractMap$AbstractEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(73, 1, {73:1, 8:1});
_.equals = function equals_14(other){
  var entry;
  if (!instanceOf(other, 8)) {
    return false;
  }
  entry = castTo(other, 8);
  return equals_24(this.key, entry.getKey()) && equals_24(this.value_0, entry.getValue_0());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue_0 = function getValue(){
  return this.value_0;
}
;
_.hashCode = function hashCode_14(){
  return hashCode_25(this.key) ^ hashCode_25(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString_0 = function toString_29(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 73);
function AbstractMap$SimpleEntry(key, value_0){
  AbstractMap$AbstractEntry.call(this, key, value_0);
}

defineClass(74, 73, {73:1, 74:1, 8:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 74);
function AbstractMap$SimpleImmutableEntry(entry){
  AbstractMap$AbstractEntry.call(this, entry.key, entry.value_0);
}

defineClass(285, 73, {73:1, 8:1}, AbstractMap$SimpleImmutableEntry);
_.setValue = function setValue_0(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_AbstractMap$SimpleImmutableEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleImmutableEntry', 285);
defineClass(586, 1, {8:1});
_.equals = function equals_15(other){
  var entry;
  if (!instanceOf(other, 8)) {
    return false;
  }
  entry = castTo(other, 8);
  return equals_24(this.val$entry2.value[0], entry.getKey()) && equals_24($getValue(this), entry.getValue_0());
}
;
_.hashCode = function hashCode_15(){
  return hashCode_25(this.val$entry2.value[0]) ^ hashCode_25($getValue(this));
}
;
_.toString_0 = function toString_30(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 586);
function $containsEntry_0(this$static, entry){
  var key, lookupEntry;
  key = entry.getKey();
  lookupEntry = this$static.getEntry(key);
  return !!lookupEntry && equals_24(lookupEntry.value_0, entry.getValue_0());
}

function $containsKey_0(this$static, k){
  return !!this$static.getEntry(k);
}

function $get_4(this$static, k){
  return getEntryValueOrNull(this$static.getEntry(k));
}

function copyOf(entry){
  return !entry?null:new AbstractMap$SimpleImmutableEntry(entry);
}

function getKeyOrNSE(entry){
  if (!entry) {
    throw toJs(new NoSuchElementException);
  }
  return entry.key;
}

defineClass(602, 580, $intern_54);
_.containsEntry = function containsEntry_0(entry){
  return $containsEntry_0(this, entry);
}
;
_.containsKey = function containsKey_1(k){
  return $containsKey_0(this, k);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractNavigableMap$EntrySet(this);
}
;
_.get_1 = function get_5(k){
  return $get_4(this, k);
}
;
var Ljava_util_AbstractNavigableMap_2_classLit = createForClass('java.util', 'AbstractNavigableMap', 602);
function AbstractNavigableMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(133, 582, $intern_55, AbstractNavigableMap$EntrySet);
_.contains_0 = function contains_6(o){
  return instanceOf(o, 8) && $containsEntry_0(this.this$01, castTo(o, 8));
}
;
_.iterator_0 = function iterator_11(){
  return this.this$01.entryIterator();
}
;
_.size_1 = function size_8(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractNavigableMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/EntrySet', 133);
function $addAll_0(this$static, index_0, c){
  var e, e$iterator, iter, modified;
  checkCriticalNotNull(c);
  modified = false;
  iter = $listIterator(this$static, index_0);
  for (e$iterator = new ArrayList$1(c); e$iterator.i < e$iterator.this$01.array.length;) {
    e = $next_4(e$iterator);
    $add_9(iter, e);
    modified = true;
  }
  return modified;
}

function $get_5(this$static, index_0){
  var iter;
  iter = $listIterator(this$static, index_0);
  try {
    return $next_5(iter);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 58)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}

function $remove_9(this$static, index_0){
  var iter, old;
  iter = $listIterator(this$static, index_0);
  try {
    old = $next_5(iter);
    $remove_20(iter);
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 58)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't remove element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}

defineClass(604, 583, $intern_47);
_.add_1 = function add_5(index_0, element){
  var iter;
  iter = $listIterator(this, index_0);
  $add_9(iter, element);
}
;
_.get_0 = function get_6(index_0){
  return $get_5(this, index_0);
}
;
_.iterator_0 = function iterator_12(){
  return $listIterator(this, 0);
}
;
_.remove_3 = function remove_20(index_0){
  return $remove_9(this, index_0);
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 604);
function $$init_2(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

function $add_5(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_6(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_1(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $get_6(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_3(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_24(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_10(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $remove_11(this$static, o){
  var i_0;
  i_0 = $indexOf_3(this$static, o, 0);
  if (i_0 == -1) {
    return false;
  }
  checkCriticalElementIndex(i_0, this$static.array.length);
  removeFrom(this$static.array, i_0, 1);
  return true;
}

function $set_5(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray_0(this$static){
  return clone(this$static.array, this$static.array.length);
}

function $toArray_1(this$static, out){
  var i_0, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(out, i_0, this$static.array[i_0]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init_2(this);
}

function ArrayList_0(initialCapacity){
  $$init_2(this);
  checkCriticalArgument(initialCapacity >= 0, 'Initial capacity must not be negative');
}

function ArrayList_1(c){
  $$init_2(this);
  insertTo_0(this.array, 0, c.toArray());
}

defineClass(9, 583, $intern_56, ArrayList, ArrayList_0, ArrayList_1);
_.add_1 = function add_6(index_0, o){
  $add_5(this, index_0, o);
}
;
_.add_0 = function add_7(o){
  return $add_6(this, o);
}
;
_.contains_0 = function contains_7(o){
  return $indexOf_3(this, o, 0) != -1;
}
;
_.get_0 = function get_7(index_0){
  return $get_6(this, index_0);
}
;
_.indexOf_0 = function indexOf_1(o){
  return $indexOf_3(this, o, 0);
}
;
_.isEmpty = function isEmpty_4(){
  return this.array.length == 0;
}
;
_.iterator_0 = function iterator_13(){
  return new ArrayList$1(this);
}
;
_.remove_3 = function remove_21(index_0){
  return $remove_10(this, index_0);
}
;
_.remove_1 = function remove_22(o){
  return $remove_11(this, o);
}
;
_.size_1 = function size_9(){
  return this.array.length;
}
;
_.toArray = function toArray_6(){
  return $toArray_0(this);
}
;
_.toArray_0 = function toArray_7(out){
  return $toArray_1(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 9);
function $hasNext_0(this$static){
  return this$static.i < this$static.this$01.array.length;
}

function $next_4(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last_0 = this$static.i++;
  return this$static.this$01.array[this$static.last_0];
}

function $remove_12(this$static){
  checkCriticalState(this$static.last_0 != -1);
  $remove_10(this$static.this$01, this$static.i = this$static.last_0);
  this$static.last_0 = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(34, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_8(){
  return $hasNext_0(this);
}
;
_.next_1 = function next_9(){
  return $next_4(this);
}
;
_.remove_0 = function remove_23(){
  $remove_12(this);
}
;
_.i = 0;
_.last_0 = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 34);
function hashCode_16(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function $toArray_2(this$static, out){
  var i_0, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(out, i_0, this$static.array[i_0]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(84, 583, $intern_56, Arrays$ArrayList);
_.contains_0 = function contains_8(o){
  return $indexOf_2(this, o) != -1;
}
;
_.get_0 = function get_8(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_10(){
  return this.array.length;
}
;
_.toArray = function toArray_8(){
  return $toArray_2(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_9(out){
  return $toArray_2(this, out);
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 84);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  new Collections$EmptyMap;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_17(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator_0(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_18(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator_0(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 142)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(342, 583, $intern_56, Collections$EmptyList);
_.contains_0 = function contains_9(object){
  return false;
}
;
_.get_0 = function get_9(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator_0 = function iterator_14(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_3(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_11(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 342);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(343, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_9(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_10(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_0 = function remove_24(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 343);
function Collections$EmptyMap(){
}

defineClass(345, 580, $intern_57, Collections$EmptyMap);
_.containsKey = function containsKey_2(key){
  return false;
}
;
_.containsValue = function containsValue_1(value_0){
  return false;
}
;
_.entrySet_0 = function entrySet_1(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_1 = function get_10(key){
  return null;
}
;
_.size_1 = function size_12(){
  return 0;
}
;
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 345);
function Collections$EmptySet(){
}

defineClass(344, 582, {3:1, 41:1}, Collections$EmptySet);
_.contains_0 = function contains_10(object){
  return false;
}
;
_.iterator_0 = function iterator_15(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_13(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 344);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(157, 583, {3:1, 33:1}, Collections$SingletonList);
_.contains_0 = function contains_11(item_0){
  return equals_24(this.element, item_0);
}
;
_.get_0 = function get_11(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_14(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 157);
function $add_7(){
  throw toJs(new UnsupportedOperationException);
}

function $remove_13(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(93, 1, {}, Collections$UnmodifiableCollection);
_.equals = function equals_16(other){
  return this === other;
}
;
_.hashCode = function hashCode_19(){
  return getObjectIdentityHashCode(this);
}
;
_.contains_0 = function contains_12(o){
  return this.coll.contains_0(o);
}
;
_.isEmpty = function isEmpty_5(){
  return this.coll.isEmpty();
}
;
_.iterator_0 = function iterator_16(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator_0());
}
;
_.size_1 = function size_15(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_10(){
  return this.coll.toArray();
}
;
_.toString_0 = function toString_31(){
  return toString__Ljava_lang_String___devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 93);
function $remove_14(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(49, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_10(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_11(){
  return this.it.next_1();
}
;
_.remove_0 = function remove_25(){
  $remove_14();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 49);
function $get_7(this$static, index_0){
  return this$static.list.get_0(index_0);
}

function $indexOf_4(this$static, o){
  return this$static.list.indexOf_0(o);
}

function $subList(this$static, fromIndex, toIndex){
  return new Collections$UnmodifiableList(this$static.list.subList(fromIndex, toIndex));
}

function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(76, 93, $intern_47, Collections$UnmodifiableList);
_.add_0 = function add_8(o){
  return $add_7();
}
;
_.contains_0 = function contains_13(o){
  return this.coll.contains_0(o);
}
;
_.iterator_0 = function iterator_17(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator_0());
}
;
_.remove_1 = function remove_26(o){
  return $remove_13();
}
;
_.size_1 = function size_16(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_11(){
  return this.coll.toArray();
}
;
_.equals = function equals_17(o){
  return this.list.equals(o);
}
;
_.get_0 = function get_12(index_0){
  return $get_7(this, index_0);
}
;
_.hashCode = function hashCode_20(){
  return this.list.hashCode();
}
;
_.indexOf_0 = function indexOf_2(o){
  return $indexOf_4(this, o);
}
;
_.isEmpty = function isEmpty_6(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_4(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_5(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
_.subList = function subList_1(fromIndex, toIndex){
  return $subList(this, fromIndex, toIndex);
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 76);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(160, 49, {}, Collections$UnmodifiableListIterator);
_.hasNext_0 = function hasNext_11(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_12(){
  return this.it.next_1();
}
;
_.remove_0 = function remove_27(){
  $remove_14();
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 160);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(346, 1, $intern_54, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_2(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals = function equals_18(o){
  return this.map_0.equals(o);
}
;
_.get_1 = function get_13(key){
  return this.map_0.get_1(key);
}
;
_.hashCode = function hashCode_21(){
  return this.map_0.hashCode();
}
;
_.isEmpty = function isEmpty_7(){
  return this.map_0.isEmpty();
}
;
_.put = function put_1(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.remove_2 = function remove_28(key){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_17(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_32(){
  return toString__Ljava_lang_String___devirtual$(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 346);
defineClass(347, 93, $intern_55);
_.contains_0 = function contains_14(o){
  return this.coll.contains_0(o);
}
;
_.isEmpty = function isEmpty_8(){
  return this.coll.isEmpty();
}
;
_.iterator_0 = function iterator_18(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator_0());
}
;
_.size_1 = function size_18(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_12(){
  return this.coll.toArray();
}
;
_.equals = function equals_19(o){
  return this.coll.equals(o);
}
;
_.hashCode = function hashCode_22(){
  return this.coll.hashCode();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 347);
function $wrap(array, size_0){
  var i_0;
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(array, i_0, new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(array[i_0], 8)));
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(348, 347, $intern_55, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.contains_0 = function contains_15(o){
  return this.coll.contains_0(o);
}
;
_.iterator_0 = function iterator_19(){
  var it;
  it = this.coll.iterator_0();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
_.toArray = function toArray_13(){
  var array;
  array = this.coll.toArray();
  $wrap(array, array.length);
  return array;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 348);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(349, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_1 = function next_13(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(this.val$it2.next_1(), 8));
}
;
_.hasNext_0 = function hasNext_12(){
  return this.val$it2.hasNext_0();
}
;
_.remove_0 = function remove_29(){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 349);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(158, 1, {8:1}, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals = function equals_20(o){
  return this.entry.equals(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue_0 = function getValue_0(){
  return this.entry.getValue_0();
}
;
_.hashCode = function hashCode_23(){
  return this.entry.hashCode();
}
;
_.setValue = function setValue_1(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_33(){
  return toString__Ljava_lang_String___devirtual$(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 158);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(159, 76, {33:1, 142:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 159);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function $compare(o1, o2){
  checkCriticalNotNull(o1);
  checkCriticalNotNull(o2);
  return compareTo_Ljava_lang_Object__I__devirtual$(castTo(o1, 5), o2);
}

function Comparators$1(){
}

defineClass(470, 1, {}, Comparators$1);
_.equals = function equals_21(other){
  return this === other;
}
;
var Ljava_util_Comparators$1_2_classLit = createForClass('java.util', 'Comparators/1', 470);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  var modCount;
  modCount = host['_gwt_modCount'];
  iterator['_gwt_modCount'] = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

defineClass(542, 13, $intern_6, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 542);
function $compareTo_3(this$static, other){
  return compare_5(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(other.jsdate.getTime()));
}

function $toString_5(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:($clinit_String() , '' + (offset < 0?-offset:offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:($clinit_String() , '' + number);
}

defineClass(97, 1, {3:1, 5:1, 97:1}, Date_0);
_.compareTo = function compareTo_2(other){
  return $compareTo_3(this, castTo(other, 97));
}
;
_.equals = function equals_22(obj){
  return instanceOf(obj, 97) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 97).jsdate.getTime()));
}
;
_.hashCode = function hashCode_24(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt(xor_0(time, createLongEmul(shru(isSmallLong0(time)?toBigLong(time):time, 32))));
}
;
_.toString_0 = function toString_34(){
  return $toString_5(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 97);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  $reset_0(this);
}

function HashMap_0(ignored){
  checkCriticalArgument(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument(true, 'Non-positive load factor');
  $reset_0(this);
}

function HashMap_1(toBeCopied){
  $reset_0(this);
  $putAll(this, toBeCopied);
}

defineClass(24, 112, $intern_57, HashMap, HashMap_0, HashMap_1);
_.equals_0 = function equals_23(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 24);
function $add_8(this$static, o){
  var old;
  old = $put_2(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_15(this$static, o){
  return $remove_6(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(c){
  this.map_0 = new HashMap_0($size(c.map_0));
  $addAll(this, c);
}

defineClass(54, 582, {3:1, 41:1}, HashSet, HashSet_0);
_.contains_0 = function contains_16(o){
  return $contains_1(this, o);
}
;
_.isEmpty = function isEmpty_9(){
  return $size(this.map_0) == 0;
}
;
_.iterator_0 = function iterator_20(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_19(){
  return $size(this.map_0);
}
;
_.toString_0 = function toString_35(){
  return $toString_3(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 54);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host.getHashCode(key)));
}

function $put_3(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_16(this$static, key){
  var chain, chain0, entry, hashCode, i_0;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?[]:chain);
  for (i_0 = 0; i_0 < chain0.length; i_0++) {
    entry = chain0[i_0];
    if (this$static.host.equals_0(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode);
      }
       else {
        chain0.splice(i_0, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue_0();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(352, 1, {}, InternalHashCodeMap);
_.iterator_0 = function iterator_21(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 352);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(163, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_14(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_13(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_0 = function remove_30(){
  $remove_16(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 163);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_8(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_4(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_17(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(350, 1, {}, InternalStringMap);
_.iterator_0 = function iterator_22(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 350);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(162, 1, {}, InternalStringMap$1);
_.next_1 = function next_15(){
  return this.last_0 = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last_0, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_14(){
  return !this.current.done;
}
;
_.remove_0 = function remove_31(){
  $remove_17(this.this$01, this.last_0.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 162);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_8(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(351, 586, {8:1}, InternalStringMap$2);
_.getKey = function getKey_1(){
  return this.val$entry2.value[0];
}
;
_.getValue_0 = function getValue_1(){
  return $getValue(this);
}
;
_.setValue = function setValue_2(object){
  return $put_4(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 351);
function $put_5(this$static, key, value_0){
  var newEntry, old, oldValue;
  old = castTo($get_3(this$static.map_0, key), 78);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this$static, key, value_0);
    $put_2(this$static.map_0, key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue(old, value_0);
    $recordAccess(this$static, old);
    return oldValue;
  }
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_19(entry);
    $addToEnd(entry);
  }
}

function $remove_18(this$static, key){
  var entry;
  entry = castTo($remove_6(this$static.map_0, key), 78);
  if (entry) {
    $remove_19(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  $reset_0(this);
  this.head = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head.prev = this.head;
  this.head.next_0 = this.head;
}

defineClass(175, 24, $intern_57, LinkedHashMap);
_.containsKey = function containsKey_3(key){
  return $containsKey(this.map_0, key);
}
;
_.containsValue = function containsValue_2(value_0){
  var node;
  node = this.head.next_0;
  while (node != this.head) {
    if (equals_24(node.value_0, value_0)) {
      return true;
    }
    node = node.next_0;
  }
  return false;
}
;
_.entrySet_0 = function entrySet_3(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_1 = function get_14(key){
  var entry;
  entry = castTo($get_3(this.map_0, key), 78);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_2(key, value_0){
  return $put_5(this, key, value_0);
}
;
_.remove_2 = function remove_32(key){
  return $remove_18(this, key);
}
;
_.size_1 = function size_20(){
  return $size(this.map_0);
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 175);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next_0 = this$static.this$01.head;
  tail.next_0 = this$static.this$01.head.prev = this$static;
}

function $remove_19(this$static){
  this$static.next_0.prev = this$static.prev;
  this$static.prev.next_0 = this$static.next_0;
  this$static.next_0 = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(78, 74, {73:1, 74:1, 78:1, 8:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 78);
function $contains_3(this$static, o){
  if (instanceOf(o, 8)) {
    return $containsEntry(this$static.this$01, castTo(o, 8));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(452, 582, $intern_55, LinkedHashMap$EntrySet);
_.contains_0 = function contains_17(o){
  return $contains_3(this, o);
}
;
_.iterator_0 = function iterator_23(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.size_1 = function size_21(){
  return $size(this.this$01.map_0);
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 452);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next_0 = this$1.this$01.head.next_0;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(453, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.next_1 = function next_16(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next_0 != this.this$11.this$01.head) , this.last_0 = this.next_0 , this.next_0 = this.next_0.next_0 , this.last_0;
}
;
_.hasNext_0 = function hasNext_15(){
  return this.next_0 != this.this$11.this$01.head;
}
;
_.remove_0 = function remove_33(){
  checkCriticalState(!!this.last_0);
  checkStructuralChange(this.this$11.this$01.map_0, this);
  $remove_19(this.last_0);
  $remove_6(this.this$11.this$01.map_0, this.last_0.key);
  recordLastKnownStructure(this.this$11.this$01.map_0, this);
  this.last_0 = null;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 453);
function $addLast(this$static, o){
  $addNode_0(this$static, o, this$static.tail.prev, this$static.tail);
}

function $addNode_0(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $getFirst(this$static){
  checkCriticalElement(this$static.size_0 != 0);
  return this$static.header_0.next_0.value_0;
}

function $getLast(this$static){
  checkCriticalElement(this$static.size_0 != 0);
  return this$static.tail.prev.value_0;
}

function $listIterator(this$static, index_0){
  var i_0, node;
  checkCriticalPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i_0 = this$static.size_0; i_0 > index_0; --i_0) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header_0.next_0;
    for (i_0 = 0; i_0 < index_0; ++i_0) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next_0.prev = node.prev;
  node.prev.next_0 = node.next_0;
  node.next_0 = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function $reset_1(this$static){
  this$static.header_0.next_0 = this$static.tail;
  this$static.tail.prev = this$static.header_0;
  this$static.header_0.prev = this$static.tail.next_0 = null;
  this$static.size_0 = 0;
}

function LinkedList(){
  this.header_0 = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  $reset_1(this);
}

defineClass(443, 604, {3:1, 33:1}, LinkedList);
_.add_0 = function add_9(o){
  $addNode_0(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator_0 = function listIterator_6(index_0){
  return $listIterator(this, index_0);
}
;
_.size_1 = function size_22(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 443);
function $add_9(this$static, o){
  $addNode_0(this$static.this$01, o, this$static.currentNode.prev, this$static.currentNode);
  ++this$static.currentIndex;
  this$static.lastNode = null;
}

function $next_5(this$static){
  checkCriticalElement(this$static.currentNode != this$static.this$01.tail);
  this$static.lastNode = this$static.currentNode;
  this$static.currentNode = this$static.currentNode.next_0;
  ++this$static.currentIndex;
  return this$static.lastNode.value_0;
}

function $previous(this$static){
  checkCriticalElement(this$static.currentNode.prev != this$static.this$01.header_0);
  this$static.lastNode = this$static.currentNode = this$static.currentNode.prev;
  --this$static.currentIndex;
  return this$static.lastNode.value_0;
}

function $remove_20(this$static){
  var nextNode;
  checkCriticalState(!!this$static.lastNode);
  nextNode = this$static.lastNode.next_0;
  $removeNode(this$static.this$01, this$static.lastNode);
  this$static.currentNode == this$static.lastNode?(this$static.currentNode = nextNode):--this$static.currentIndex;
  this$static.lastNode = null;
}

function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(444, 1, {}, LinkedList$ListIteratorImpl);
_.hasNext_0 = function hasNext_16(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_2(){
  return this.currentNode.prev != this.this$01.header_0;
}
;
_.next_1 = function next_17(){
  return $next_5(this);
}
;
_.previous = function previous_3(){
  return $previous(this);
}
;
_.remove_0 = function remove_34(){
  $remove_20(this);
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 444);
function LinkedList$Node(){
}

defineClass(136, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 136);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  new Locale$2;
  new Locale$3;
  defaultLocale = new Locale$4;
}

defineClass(594, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 594);
function Locale$1(){
}

defineClass(366, 594, {}, Locale$1);
_.toString_0 = function toString_36(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 366);
function Locale$2(){
}

defineClass(367, 594, {}, Locale$2);
_.toString_0 = function toString_37(){
  return 'en';
}
;
var Ljava_util_Locale$2_2_classLit = createForClass('java.util', 'Locale/2', 367);
function Locale$3(){
}

defineClass(368, 594, {}, Locale$3);
_.toString_0 = function toString_38(){
  return 'en_US';
}
;
var Ljava_util_Locale$3_2_classLit = createForClass('java.util', 'Locale/3', 368);
function Locale$4(){
}

defineClass(369, 594, {}, Locale$4);
_.toString_0 = function toString_39(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 369);
function NoSuchElementException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

defineClass(58, 13, {3:1, 10:1, 13:1, 7:1, 58:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 58);
function equals_24(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_25(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_10(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_1(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  checkCriticalNotNull_0(', ', 'delimiter');
  checkCriticalNotNull_0(prefix, 'prefix');
  checkCriticalNotNull_0(suffix, 'suffix');
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(161, 1, {}, StringJoiner);
_.toString_0 = function toString_40(){
  return !this.builder?this.emptyValue:toNative(this.suffix).length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 161);
function $clear_2(this$static){
  this$static.root = null;
  this$static.size_0 = 0;
}

function $getEntry_0(this$static, key){
  var c, childNum, tree;
  tree = this$static.root;
  while (tree) {
    c = $compare(key, tree.key);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.child[childNum];
  }
  return null;
}

function $getFirstEntry(this$static){
  var nextNode, node;
  if (!this$static.root) {
    return null;
  }
  node = this$static.root;
  while (nextNode = node.child[0]) {
    node = nextNode;
  }
  return node;
}

function $getLastEntry(this$static){
  var nextNode, node;
  if (!this$static.root) {
    return null;
  }
  node = this$static.root;
  while (nextNode = node.child[1]) {
    node = nextNode;
  }
  return node;
}

function $getNodeAfter(this$static, key, inclusive){
  var c, foundNode, node;
  foundNode = null;
  node = this$static.root;
  while (node) {
    c = $compare(key, node.key);
    if (inclusive && c == 0) {
      return node;
    }
    if (c >= 0) {
      node = node.child[1];
    }
     else {
      foundNode = node;
      node = node.child[0];
    }
  }
  return foundNode;
}

function $getNodeBefore(this$static, key){
  var c, foundNode, node;
  foundNode = null;
  node = this$static.root;
  while (node) {
    c = $compare(key, node.key);
    if (c == 0) {
      return node;
    }
    if (c <= 0) {
      node = node.child[0];
    }
     else {
      foundNode = node;
      node = node.child[1];
    }
  }
  return foundNode;
}

function $headMap(this$static, toKey){
  return new TreeMap$SubMap(this$static, ($clinit_TreeMap$SubMapType() , Head), null, false, toKey);
}

function $inOrderAdd(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.child[0];
  !!leftNode && $inOrderAdd(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  $inRange(type_0, current.key, fromKey, fromInclusive, toKey, toInclusive) && list.add_0(current);
  rightNode = current.child[1];
  !!rightNode && $inOrderAdd(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function $inRange(type_0, key, fromKey, fromInclusive, toKey, toInclusive){
  var compare, compare0;
  if (type_0.fromKeyValid() && (compare0 = $compare(key, fromKey) , compare0 < 0 || !fromInclusive && compare0 == 0)) {
    return false;
  }
  if (type_0.toKeyValid() && (compare = $compare(key, toKey) , compare > 0 || !toInclusive && compare == 0)) {
    return false;
  }
  return true;
}

function $insert_0(this$static, tree, newNode, state){
  var c, childNum;
  if (!tree) {
    return newNode;
  }
   else {
    c = $compare(newNode.key, tree.key);
    if (c == 0) {
      state.value_0 = $setValue(tree, newNode.value_0);
      state.found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.child[childNum] = $insert_0(this$static, tree.child[childNum], newNode, state);
    if ($isRed(tree.child[childNum])) {
      if ($isRed(tree.child[1 - childNum])) {
        tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(tree.child[childNum].child[childNum])?(tree = $rotateSingle(tree, 1 - childNum)):$isRed(tree.child[childNum].child[1 - childNum]) && (tree = $rotateDouble(tree, 1 - childNum));
      }
    }
  }
  return tree;
}

function $isRed(node){
  return !!node && node.isRed;
}

function $put_6(this$static, key, value_0){
  var node, state;
  node = new TreeMap$Node(key, value_0);
  state = new TreeMap$State;
  this$static.root = $insert_0(this$static, this$static.root, node, state);
  state.found || ++this$static.size_0;
  this$static.root.isRed = false;
  return state.value_0;
}

function $remove_21(this$static, k){
  var state;
  state = new TreeMap$State;
  $removeWithState(this$static, k, state);
  return state.value_0;
}

function $removeEntry(this$static, entry){
  var state;
  state = new TreeMap$State;
  state.matchValue = true;
  state.value_0 = entry.getValue_0();
  return $removeWithState(this$static, entry.getKey(), state);
}

function $removeWithState(this$static, key, state){
  var c, dir_0, dir2, found, grandparent, head, last, newNode, node, parent_0, sibling;
  if (!this$static.root) {
    return false;
  }
  found = null;
  parent_0 = null;
  head = new TreeMap$Node(null, null);
  dir_0 = 1;
  head.child[1] = this$static.root;
  node = head;
  while (node.child[dir_0]) {
    last = dir_0;
    grandparent = parent_0;
    parent_0 = node;
    node = node.child[dir_0];
    c = $compare(key, node.key);
    dir_0 = c < 0?0:1;
    c == 0 && (!state.matchValue || equals_24(node.value_0, state.value_0)) && (found = node);
    if (!(!!node && node.isRed) && !$isRed(node.child[dir_0])) {
      if ($isRed(node.child[1 - dir_0])) {
        parent_0 = parent_0.child[last] = $rotateSingle(node, dir_0);
      }
       else if (!$isRed(node.child[1 - dir_0])) {
        sibling = parent_0.child[1 - last];
        if (sibling) {
          if (!$isRed(sibling.child[1 - last]) && !$isRed(sibling.child[last])) {
            parent_0.isRed = false;
            sibling.isRed = true;
            node.isRed = true;
          }
           else {
            dir2 = grandparent.child[1] == parent_0?1:0;
            $isRed(sibling.child[last])?(grandparent.child[dir2] = $rotateDouble(parent_0, last)):$isRed(sibling.child[1 - last]) && (grandparent.child[dir2] = $rotateSingle(parent_0, last));
            node.isRed = grandparent.child[dir2].isRed = true;
            grandparent.child[dir2].child[0].isRed = false;
            grandparent.child[dir2].child[1].isRed = false;
          }
        }
      }
    }
  }
  if (found) {
    state.found = true;
    state.value_0 = found.value_0;
    if (node != found) {
      newNode = new TreeMap$Node(node.key, node.value_0);
      $replaceNode(head, found, newNode);
      parent_0 == found && (parent_0 = newNode);
    }
    parent_0.child[parent_0.child[1] == node?1:0] = node.child[!node.child[0]?1:0];
    --this$static.size_0;
  }
  this$static.root = head.child[1];
  !!this$static.root && (this$static.root.isRed = false);
  return state.found;
}

function $replaceNode(head, node, newNode){
  var direction, parent_0;
  parent_0 = head;
  direction = parent_0.key == null || $compare(node.key, parent_0.key) > 0?1:0;
  while (parent_0.child[direction] != node) {
    parent_0 = parent_0.child[direction];
    direction = $compare(node.key, parent_0.key) > 0?1:0;
  }
  parent_0.child[direction] = newNode;
  newNode.isRed = node.isRed;
  newNode.child[0] = node.child[0];
  newNode.child[1] = node.child[1];
  node.child[0] = null;
  node.child[1] = null;
}

function $rotateDouble(tree, rotateDirection){
  var otherChildDir;
  otherChildDir = 1 - rotateDirection;
  tree.child[otherChildDir] = $rotateSingle(tree.child[otherChildDir], otherChildDir);
  return $rotateSingle(tree, rotateDirection);
}

function $rotateSingle(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.child[otherChildDir];
  tree.child[otherChildDir] = save.child[rotateDirection];
  save.child[rotateDirection] = tree;
  tree.isRed = true;
  save.isRed = false;
  return save;
}

function $subMap(this$static, fromKey, toKey){
  return new TreeMap$SubMap(this$static, ($clinit_TreeMap$SubMapType() , Range_1), fromKey, true, toKey);
}

function $tailMap(this$static, fromKey, inclusive){
  return new TreeMap$SubMap(this$static, ($clinit_TreeMap$SubMapType() , Tail), fromKey, inclusive, null);
}

function TreeMap(){
  this.root = null;
  $clinit_Comparators() , $clinit_Comparators() , NATURAL;
}

defineClass(132, 602, $intern_57, TreeMap);
_.entryIterator = function entryIterator(){
  return new TreeMap$EntryIterator(this);
}
;
_.entrySet_0 = function entrySet_4(){
  return new TreeMap$EntrySet(this);
}
;
_.getEntry = function getEntry(key){
  return $getEntry_0(this, key);
}
;
_.put = function put_3(key, value_0){
  return $put_6(this, key, value_0);
}
;
_.remove_2 = function remove_35(k){
  return $remove_21(this, k);
}
;
_.size_1 = function size_23(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', 132);
function $remove_22(this$static){
  $remove_8(this$static.iter);
  $removeEntry(this$static.this$01, this$static.last_0);
  this$static.last_0 = null;
}

function TreeMap$EntryIterator(this$0){
  TreeMap$EntryIterator_0.call(this, this$0, ($clinit_TreeMap$SubMapType() , All), null, false, null, false);
}

function TreeMap$EntryIterator_0(this$0, type_0, fromKey, fromInclusive, toKey, toInclusive){
  var list;
  this.this$01 = this$0;
  list = new ArrayList;
  $inOrderAdd(this$0, list, type_0, this$0.root, fromKey, fromInclusive, toKey, toInclusive);
  this.iter = new AbstractList$ListIteratorImpl(list, 0);
}

defineClass(115, 1, {}, TreeMap$EntryIterator, TreeMap$EntryIterator_0);
_.next_1 = function next_18(){
  return this.last_0 = castTo($next_3(this.iter), 8);
}
;
_.hasNext_0 = function hasNext_17(){
  return $hasNext(this.iter);
}
;
_.remove_0 = function remove_36(){
  $remove_22(this);
}
;
var Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util', 'TreeMap/EntryIterator', 115);
function TreeMap$EntrySet(this$0){
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(173, 133, $intern_55, TreeMap$EntrySet);
var Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util', 'TreeMap/EntrySet', 173);
function TreeMap$Node(key, value_0){
  AbstractMap$SimpleEntry.call(this, key, value_0);
  this.child = initUnidimensionalArray(Ljava_util_TreeMap$Node_2_classLit, $intern_1, 86, 2, 0, 1);
  this.isRed = true;
}

defineClass(86, 74, {73:1, 74:1, 8:1, 86:1}, TreeMap$Node);
_.isRed = false;
var Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util', 'TreeMap/Node', 86);
function TreeMap$State(){
}

defineClass(134, 1, {}, TreeMap$State);
_.toString_0 = function toString_41(){
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done_0 + ' found=' + this.found;
}
;
_.done_0 = false;
_.found = false;
_.matchValue = false;
var Ljava_util_TreeMap$State_2_classLit = createForClass('java.util', 'TreeMap/State', 134);
function $guardInRange(this$static, entry){
  return !!entry && $inRange_0(this$static, entry.key)?entry:null;
}

function $inRange_0(this$static, key){
  return $inRange(this$static.type_0, key, this$static.fromKey, this$static.fromInclusive, this$static.toKey, this$static.toInclusive);
}

function $isEmpty(this$static){
  var entry;
  return this$static.type_0.fromKeyValid()?this$static.fromInclusive?(entry = $getNodeAfter(this$static.this$01, this$static.fromKey, true)):(entry = $getNodeAfter(this$static.this$01, this$static.fromKey, false)):(entry = $getFirstEntry(this$static.this$01)) , !(!!entry && $inRange_0(this$static, entry.key)?entry:null);
}

function TreeMap$SubMap(this$0, type_0, fromKey, fromInclusive, toKey){
  this.this$01 = this$0;
  switch (type_0.ordinal) {
    case 2:
      if ($compare(toKey, fromKey) < 0) {
        throw toJs(new IllegalArgumentException('subMap: ' + toKey + ' less than ' + fromKey));
      }

      break;
    case 1:
      $compare(toKey, toKey);
      break;
    case 3:
      $compare(fromKey, fromKey);
  }
  this.type_0 = type_0;
  this.fromKey = fromKey;
  this.fromInclusive = fromInclusive;
  this.toKey = toKey;
  this.toInclusive = false;
}

defineClass(135, 602, $intern_54, TreeMap$SubMap);
_.entryIterator = function entryIterator_0(){
  return new TreeMap$EntryIterator_0(this.this$01, this.type_0, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive);
}
;
_.entrySet_0 = function entrySet_5(){
  return new TreeMap$SubMap$1(this, this);
}
;
_.getEntry = function getEntry_0(key){
  return $guardInRange(this, $getEntry_0(this.this$01, key));
}
;
_.isEmpty = function isEmpty_10(){
  return $isEmpty(this);
}
;
_.put = function put_4(key, value_0){
  if (!$inRange(this.type_0, key, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive)) {
    throw toJs(new IllegalArgumentException(key + ' outside the range ' + this.fromKey + ' to ' + this.toKey));
  }
  return $put_6(this.this$01, key, value_0);
}
;
_.remove_2 = function remove_37(k){
  if (!$inRange(this.type_0, k, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive)) {
    return null;
  }
  return $remove_21(this.this$01, k);
}
;
_.size_1 = function size_24(){
  var count, it;
  count = 0;
  for (it = new TreeMap$EntryIterator_0(this.this$01, this.type_0, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive); $hasNext(it.iter); it.last_0 = castTo($next_3(it.iter), 8)) {
    ++count;
  }
  return count;
}
;
_.fromInclusive = false;
_.toInclusive = false;
var Ljava_util_TreeMap$SubMap_2_classLit = createForClass('java.util', 'TreeMap/SubMap', 135);
function TreeMap$SubMap$1(this$1, this$0){
  this.this$11 = this$1;
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(174, 133, $intern_55, TreeMap$SubMap$1);
_.isEmpty = function isEmpty_11(){
  return $isEmpty(this.this$11);
}
;
var Ljava_util_TreeMap$SubMap$1_2_classLit = createForClass('java.util', 'TreeMap/SubMap/1', 174);
function $clinit_TreeMap$SubMapType(){
  $clinit_TreeMap$SubMapType = emptyMethod;
  All = new TreeMap$SubMapType('All', 0);
  Head = new TreeMap$SubMapType$1;
  Range_1 = new TreeMap$SubMapType$2;
  Tail = new TreeMap$SubMapType$3;
}

function TreeMap$SubMapType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_TreeMap$SubMapType();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_TreeMap$SubMapType_2_classLit, 1), $intern_1, 63, 0, [All, Head, Range_1, Tail]);
}

defineClass(63, 4, $intern_58, TreeMap$SubMapType);
_.fromKeyValid = function fromKeyValid(){
  return false;
}
;
_.toKeyValid = function toKeyValid(){
  return false;
}
;
var All, Head, Range_1, Tail;
var Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType', 63, values_12);
function TreeMap$SubMapType$1(){
  TreeMap$SubMapType.call(this, 'Head', 1);
}

defineClass(437, 63, $intern_58, TreeMap$SubMapType$1);
_.toKeyValid = function toKeyValid_0(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/1', 437, null);
function TreeMap$SubMapType$2(){
  TreeMap$SubMapType.call(this, 'Range', 2);
}

defineClass(438, 63, $intern_58, TreeMap$SubMapType$2);
_.fromKeyValid = function fromKeyValid_0(){
  return true;
}
;
_.toKeyValid = function toKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/2', 438, null);
function TreeMap$SubMapType$3(){
  TreeMap$SubMapType.call(this, 'Tail', 3);
}

defineClass(439, 63, $intern_58, TreeMap$SubMapType$3);
_.fromKeyValid = function fromKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/3', 439, null);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

function parse_0(name_0){
  $clinit_Level();
  var value_0;
  value_0 = $toUpperCase(name_0, ($clinit_Locale() , ROOT));
  switch (value_0) {
    case 'ALL':
      return ALL;
    case 'CONFIG':
      return CONFIG;
    case 'FINE':
      return FINE;
    case 'FINER':
      return FINER;
    case 'FINEST':
      return FINEST;
    case 'INFO':
      return INFO;
    case 'OFF':
      return OFF;
    case 'SEVERE':
      return SEVERE;
    case 'WARNING':
      return WARNING;
    default:throw toJs(new IllegalArgumentException('Invalid level "' + name_0 + '"'));
  }
}

defineClass(585, 1, $intern_1);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString_0 = function toString_42(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 585);
function Level$LevelAll(){
}

defineClass(331, 585, $intern_1, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return $intern_20;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 331);
function Level$LevelConfig(){
}

defineClass(332, 585, $intern_1, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 332);
function Level$LevelFine(){
}

defineClass(333, 585, $intern_1, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 333);
function Level$LevelFiner(){
}

defineClass(334, 585, $intern_1, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 334);
function Level$LevelFinest(){
}

defineClass(335, 585, $intern_1, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 335);
function Level$LevelInfo(){
}

defineClass(336, 585, $intern_1, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 336);
function Level$LevelOff(){
}

defineClass(337, 585, $intern_1, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 337);
function Level$LevelSevere(){
}

defineClass(338, 585, $intern_1, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 338);
function Level$LevelWarning(){
}

defineClass(339, 585, $intern_1, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 339);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, logger.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = castTo($getStringValue(this$static.loggerMap, name_0), 111);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.name_0;
    parentName = $substring_0(name_1, 0, max_0(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_0(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, newLogger.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton_0) {
    singleton_0 = new LogManager;
    rootLogger = new Logger('');
    $setLevel_0(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton_0, rootLogger);
  }
  return singleton_0;
}

defineClass(290, 1, {}, LogManager);
var singleton_0;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 290);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(level, msg){
  this.level = level;
  this.msg = msg;
  this.millis = ($clinit_System() , fromDouble_0(now_2()));
}

defineClass(433, 1, $intern_1, LogRecord);
_.loggerName = '';
_.millis = 0;
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 433);
function $actuallyLog(this$static, level, msg, thrown){
  var record;
  if ($getEffectiveLevel(this$static).intValue() <= level.intValue()) {
    record = new LogRecord(level, msg);
    record.thrown = thrown;
    $setLoggerName(record, this$static.name_0);
    $actuallyLog_0(this$static, record);
  }
}

function $actuallyLog_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if ($isLoggable(this$static, record.level)) {
    for (handler$array0 = castTo($toArray_1(this$static.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_59, 90, this$static.handlers.array.length, 0, 1)), 183) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this$static.useParentHandlers?this$static.parent_0:null;
    while (logger) {
      for (handler$array = castTo($toArray_1(logger.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_59, 90, logger.handlers.array.length, 0, 1)), 183) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.useParentHandlers?logger.parent_0:null;
    }
  }
}

function $fine(this$static, msg){
  $actuallyLog(this$static, ($clinit_Level() , FINE), msg, null);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = this$static.parent_0;
  while (logger) {
    effectiveLevel = logger.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = logger.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $info_1(this$static, msg){
  $actuallyLog(this$static, ($clinit_Level() , INFO), msg, null);
}

function $isLoggable(this$static, messageLevel){
  return $getEffectiveLevel(this$static).intValue() <= messageLevel.intValue();
}

function $setLevel_0(this$static, newLevel){
  this$static.level = newLevel;
}

function $setParent_0(this$static, newParent){
  !!newParent && (this$static.parent_0 = newParent);
}

function $severe(this$static, msg){
  $actuallyLog(this$static, ($clinit_Level() , SEVERE), msg, null);
}

function $warning(this$static, msg){
  $actuallyLog(this$static, ($clinit_Level() , WARNING), msg, null);
}

function Logger(name_0){
  this.name_0 = name_0;
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

function getLogger(name_0){
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(111, 1, {111:1}, Logger);
_.level = null;
_.useParentHandlers = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 111);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, end;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, 0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function now_2(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function getObjectIdentityHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

var sNextHashId = 0;
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException(($clinit_String() , errorMessage)));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(($clinit_String() , errorMessage)));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0) {
    throw toJs(new IndexOutOfBoundsException_0('fromIndex: ' + start_0 + ' < 0'));
  }
  if (end > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('toIndex: ' + end + ' > size ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function checkNotNull(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i_0, n, nBatch;
  hashCode = 0;
  n = ($clinit_String() , str).length;
  nBatch = n - 4;
  i_0 = 0;
  while (i_0 < nBatch) {
    hashCode = str.charCodeAt(i_0 + 3) + 31 * (str.charCodeAt(i_0 + 2) + 31 * (str.charCodeAt(i_0 + 1) + 31 * (str.charCodeAt(i_0) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i_0 += 4;
  }
  while (i_0 < n) {
    hashCode = hashCode * 31 + $charAt(str, i_0++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $onModuleLoad_1(){
  var g, p;
  p = get_0('new_v2');
  !p && (p = get_0('new_grid'));
  !p && (p = get_0('grid'));
  if (!p) {
    $clinit_Window();
    $wnd.alert('Unable to find an element with new_grid or grid id');
  }
   else {
    g = new MyGrid;
    $add_0(p, g, ($clinit_DOM() , p.element));
    onResize_0(g);
  }
}

function onResize_0(g){
  $wnd.onresize = function(){
    g.onResize();
  }
  ;
}

function MyGrid(){
  var defaultRow, lastArg_0;
  $clinit_UIObject();
  var addons, i_0, lastArg, rows_0, s;
  $$init_1(this);
  $initWidget(this, this.escalator);
  ($clinit_DOM() , this.element).tabIndex = 0;
  this.cellFocusHandler = new Grid$CellFocusHandler(this);
  $setStylePrimaryName_9(this);
  $setEscalatorUpdater(this.escalator.header_0, new Grid$StaticSectionUpdater(this, this.header_0, this.escalator.header_0));
  $setEscalatorUpdater(this.escalator.body_0, new Grid$BodyUpdater(this));
  $setEscalatorUpdater(this.escalator.footer, new Grid$StaticSectionUpdater(this, this.footer, this.escalator.footer));
  this.header_0.grid = this;
  defaultRow = $appendRow(this.header_0);
  $setDefaultRow(this.header_0, defaultRow);
  this.footer.grid = this;
  this.editor.grid = this;
  $setSelectionMode((lastArg_0 = this , $clinit_Grid$SelectionMode() , lastArg_0));
  $setSpacerUpdater(this.escalator.body_0, this.gridSpacerUpdater);
  $addHandler_0(this.escalator, new Grid$2(this), ($clinit_ScrollEvent() , TYPE_12));
  $addHandler_0(this.escalator, new Grid$3(this), ($clinit_RowVisibilityChangeEvent() , TYPE_7));
  $addHandler_0(this, new Grid$4(this), ($clinit_SelectionEvent() , $clinit_SelectionEvent() , eventType_0));
  $sinkEvents(this, new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'click'])));
  $sinkEvents(this, new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['keydown', 'keyup', 'keypress', 'dblclick', 'mousedown', 'click'])));
  $addHeaderKeyUpHandler(this, new Grid$5(this));
  $addDataAvailableHandler(this, new Grid$6(this));
  $setSelectionMode((lastArg = this , lastArg));
  $addColumn(this, new MyGrid$1);
  $addColumn(this, new MyGrid$2);
  $addColumn(this, new MyGrid$3);
  $addColumn(this, new MyGrid$4);
  $addColumn(this, new MyGrid$5);
  $addColumn(this, new MyGrid$6);
  s = getParameter('rows');
  rows_0 = (s == null || ($clinit_String() , s).length == 0?100:parseFloat_0(s)) / 10;
  $setWidth_1($getColumn(this, 0), 80);
  $setWidth_1($getColumn(this, 1), 200);
  $setWidth_1($getColumn(this, 2), 200);
  $setWidth_1($getColumn(this, 3), 200);
  addons = new ArrayList;
  for (i_0 = 0; i_0 < rows_0; i_0++) {
    $add_6(addons, new Person('John', 'Garcia', 'Developer', 12, 1));
    $add_6(addons, new Person('Emma', 'Sesmero', 'Engineer', 18, 0));
    $add_6(addons, new Person('Jeff', 'Harris', 'CEO', 44, 1));
    $add_6(addons, new Person('George', 'Washington', 'President', 78, 3));
    $add_6(addons, new Person('Abraham', 'Lincoln', 'ExPresident', 114, 5));
    $add_6(addons, new Person('Henrik', 'Paul', 'Currito', 32, 6));
    $add_6(addons, new Person('Paul', 'Vaca', 'Ganadero', 56, 66));
    $add_6(addons, new Person('Biff', 'Eeter', 'Drinker', 34, 4));
    $add_6(addons, new Person('Leo', 'Tron', 'Troco', 88, 5));
    $add_6(addons, new Person('Peri', 'Co', 'Palotes', 22, 37));
  }
  $schedule(new MyGrid$7(this, addons), 1000);
}

defineClass(185, 199, $intern_49, MyGrid);
_.onAttach = function onAttach_5(){
  $onAttach_1(this);
  $setWidth(this.escalator);
  $setHeight_2(this, ($getParentElement(($clinit_DOM() , this.element)).clientHeight | 0) + 'px');
}
;
_.onResize = function onResize_1(){
  $setWidth(this.escalator);
  $setHeight_2(this, ($getParentElement(($clinit_DOM() , this.element)).clientHeight | 0) + 'px');
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid', 185);
function MyGrid$1(){
  Grid$Column.call(this, 'Id');
}

defineClass(200, 14, $intern_51, MyGrid$1);
_.getValue = function getValue_2(row){
  return valueOf(castTo(row, 35).id_0);
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid$1_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid/1', 200);
function MyGrid$2(){
  Grid$Column.call(this, 'Name');
}

defineClass(201, 14, $intern_51, MyGrid$2);
_.getValue = function getValue_3(row){
  return castTo(row, 35).name_0;
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid$2_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid/2', 201);
function MyGrid$3(){
  Grid$Column.call(this, 'Surname');
}

defineClass(202, 14, $intern_51, MyGrid$3);
_.getValue = function getValue_4(row){
  return castTo(row, 35).surname;
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid$3_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid/3', 202);
function MyGrid$4(){
  Grid$Column.call(this, 'Job');
}

defineClass(203, 14, $intern_51, MyGrid$4);
_.getValue = function getValue_5(row){
  return castTo(row, 35).job;
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid$4_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid/4', 203);
function MyGrid$5(){
  Grid$Column.call(this, 'Age');
}

defineClass(204, 14, $intern_51, MyGrid$5);
_.getValue = function getValue_6(row){
  return valueOf(castTo(row, 35).age);
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid$5_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid/5', 204);
function MyGrid$6(){
  Grid$Column.call(this, 'Kids');
}

defineClass(205, 14, $intern_51, MyGrid$6);
_.getValue = function getValue_7(row){
  return valueOf(castTo(row, 35).children);
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid$6_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid/6', 205);
function MyGrid$7(this$0, val$addons){
  this.this$01 = this$0;
  this.val$addons2 = val$addons;
  Timer.call(this);
}

defineClass(206, 65, {}, MyGrid$7);
_.run_0 = function run_6(){
  $setDataSource(this.this$01, new ListDataSource(this.val$addons2));
  ($clinit_GQuery() , $_0(document_0)).elements.length == 0 || $setVisible(this.this$01.header_0);
}
;
var Lorg_vaadin_artur_gridgwt_client_MyGrid$7_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'MyGrid/7', 206);
function Person(name_0, surname, job, age, children){
  this.id_0 = c_0++;
  this.name_0 = name_0;
  this.surname = surname;
  this.job = job;
  this.age = age;
  this.children = children;
}

defineClass(35, 1, {35:1}, Person);
_.age = 0;
_.children = 0;
_.id_0 = 0;
var c_0 = 1;
var Lorg_vaadin_artur_gridgwt_client_Person_2_classLit = createForClass('org.vaadin.artur.gridgwt.client', 'Person', 35);
var D_classLit = createForPrimitive('double', 'D');
var Lcom_vaadin_client_widget_grid_EditorHandler_2_classLit = createForInterface('com.vaadin.client.widget.grid', 'EditorHandler');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'ie10']], [['locale', 'default'], ['user.agent', 'ie10']], [['locale', 'default'], ['user.agent', 'ie8']], [['locale', 'default'], ['user.agent', 'ie8']], [['locale', 'default'], ['user.agent', 'ie9']], [['locale', 'default'], ['user.agent', 'ie9']], [['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=mygridapp_new-0.js

