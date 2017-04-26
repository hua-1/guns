/**
 * 初始化字典详情对话框
 */
var DictInfoDlg = {
	dictInfoData : {}
};

/**
 * 清除数据
 */
DictInfoDlg.clearData = function() {
	this.dictInfoData = {};
}

/**
 * 设置对话框中的数据
 * 
 * @param key 数据的名称
 * @param val 数据的具体值
 */
DictInfoDlg.set = function(key, val) {
	this.dictInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
	return this;
}

/**
 * 设置对话框中的数据
 * 
 * @param key 数据的名称
 * @param val 数据的具体值
 */
DictInfoDlg.get = function(key) {
	return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
DictInfoDlg.close = function() {
	parent.layer.close(window.parent.Dict.layerIndex);
}

/**
 * 点击部门ztree列表的选项时
 * 
 * @param e
 * @param treeId
 * @param treeNode
 * @returns
 */
DictInfoDlg.onClickDept = function(e, treeId, treeNode) {
	$("#pName").attr("value", instance.getSelectedVal());
	$("#pid").attr("value", treeNode.id);
}

/**
 * 显示部门选择的树
 * 
 * @returns
 */
DictInfoDlg.showDeptSelectTree = function() {
	var pName = $("#pName");
	var pNameOffset = $("#pName").offset();
	$("#parentDeptMenu").css({
		left : pNameOffset.left + "px",
		top : pNameOffset.top + pName.outerHeight() + "px"
	}).slideDown("fast");

	$("body").bind("mousedown", onBodyDown);
}

/**
 * 隐藏部门选择的树
 */
DictInfoDlg.hideDeptSelectTree = function() {
	$("#parentDeptMenu").fadeOut("fast");
	$("body").unbind("mousedown", onBodyDown);// mousedown当鼠标按下就可以触发，不用弹起
}

/**
 * 收集数据
 */
DictInfoDlg.collectData = function() {
	this.set('id').set('simplename').set('fullname').set('tips').set('num').set('pid');
}

/**
 * 提交添加部门
 */
DictInfoDlg.addSubmit = function() {
	
	this.clearData();
	this.collectData();
	
	//提交信息
	var ajax = new $ax(Feng.ctxPath + "/dict/add", function(data){
		Feng.success("添加成功!");
		window.parent.Dept.table.refresh();
		DictInfoDlg.close();
	},function(data){
		Feng.error("添加失败!" + data.responseJSON.message + "!");
	});
	ajax.set(this.dictInfoData);
	ajax.start();
}

/**
 * 提交修改
 */
DictInfoDlg.editSubmit = function() {
	
	this.clearData();
	this.collectData();
	
	//提交信息
	var ajax = new $ax(Feng.ctxPath + "/dict/update", function(data){
		Feng.success("修改成功!");
		window.parent.Dept.table.refresh();
		DictInfoDlg.close();
	},function(data){
		Feng.error("修改失败!" + data.responseJSON.message + "!");
	});
	ajax.set(this.dictInfoData);
	ajax.start();
}

function onBodyDown(event) {
	if (!(event.target.id == "menuBtn" || event.target.id == "parentDeptMenu" || $(
			event.target).parents("#parentDeptMenu").length > 0)) {
		DictInfoDlg.hideDeptSelectTree();
	}
}

$(function() {

});