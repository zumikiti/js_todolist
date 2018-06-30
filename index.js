'use strict';
// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
 * TODOを完了する
 * @param {String} task
 */
function todo(task) {
	tasks.set(task, false);
}

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
 * @prarm {array} taskAndIsDonePair
 * @return {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair) {
	return taskAndIsDonePair[1];
}

/**
 * タスクと完了したかどうかが含まれている配列を受け取り、完了していないかを返す
 * @param {array} taskAndIsDonePair
 * @return {boolean} 完了していないかどうか
 */
function isNotDone(taskAndIsDonePair) {
	return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧の配列を取得する
 * @return {array}
 */
function list() {
	return Array.from(tasks)
		.filter(isNotDone)
		.map(t => t[0]);
}

/**
 * TODOを完了状態にする
 * @param {string} task
 */
function done(task) {
	if(tasks.has(task)) {
		tasks.set(task, true);
	}
}

/**
 * 完了ずみのタスク一覧の配列を取得する
 * @return {array}
 */
function donelist() {
	return Array.from(tasks)
		.filter(isDone)
		.map(t => t[0]);
}

module.exports = {
	todo: todo,
	list: list,
	done: done,
	donelist: donelist
};
