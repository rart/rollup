const removed1 = { x: {} };
removed1.y = 1;
removed1.x.y = 2;

export const retained1 = { x: {} };
retained1.y = 1;
retained1.x.y = 2;

const retained2 = { x: {} };
retained2.y.z = 1;

const retained3 = { x: {} };
delete retained3.x;
retained3.x.y = 2;

const retained4 = { x: undefined };
retained4.x.y = 2;

const retained5 = { x: null };
retained5.x.y = 2;

const removed2 = { x: 99 };
removed2.x.y = 2;

const removed3 = { x: { y: {} } };
removed3.x.y.z = 3;

const retained6 = { x: { y: {} } };
retained6.x = {};
retained6.x.y.z = 3;

const retained7 = { x: { y: globalVar } };
const retained8 = { x: retained7.x };
retained8.x.y.z = 3;

const removed4 = { a: { x: { y: globalVar } } };
const removed5 = { x: removed4.a.x };
removed5.x.y = 2;
