function pagination(pageSize, currentPage, data) {
    let value = data.slice(pageSize * (currentPage - 1), pageSize * currentPage).slice(0, pageSize);

    return {
        statusCode: 200,
        taskStatus: true,
        message: 'Success',
        pagin: {
            totalRow: data.length,      //นับค่าที่อยู่ใน array 
            pageSize: pageSize,        //คิดครั้งละเท่าไหร่ เช่น 10 รายการต่อหน้า
            currentPage: currentPage,    //ตัวบอกว่าอยู่ที่หน้าเท่าไหร่
            totalPage: Math.ceil(data.length / pageSize),    //จำนวนที่จะแสดง / จำนวนหน้า

        },
        data: value,
    };      //ชุดข้อมูลทั้งหมด 
}

function success() {
    return { statusCode: 200, taskStatus: true, message: "Success" }
}
function error(statusCode = 500, message = 'Unsuccess') {
    return { statusCode: statusCode, taskStatus: false, message: 'message' }

}

function single(data) {
    return { statusCode: 200, taskStatus: true, message: 'message', data: data[0] ? data[0] : null }

}
function multi(data) {
    return { statusCode: 200, taskStatus: true, message: 'message', data: data }

}

module.exports = { pagination, success, error, single, multi }