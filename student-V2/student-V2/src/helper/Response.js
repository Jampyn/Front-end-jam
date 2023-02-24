export function pagination(pagesize, currentpage, data) {
    let value = data.slice(pagesize * (currentpage - 1), pagesize * currentpage).slice(0, pagesize);

    return {
        statusCode: 200,
        taskStatus: true,
        message: 'Success',
        pagin: {
            totalrow: data.length,      //นับค่าที่อยู่ใน array 
            pagesize: pagesize,        //คิดครั้งละเท่าไหร่ เช่น 10 รายการต่อหน้า
            currentpage: currentpage,    //ตัวบอกว่าอยู่ที่หน้าเท่าไหร่
            totalpage: Math.ceil(data.length / pagesize),    //จำนวนที่จะแสดง / จำนวนหน้า

        },
        data: value,
    };      //ชุดข้อมูลทั้งหมด 
}