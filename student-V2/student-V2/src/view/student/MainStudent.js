import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import ShowData from './ShowData';
import { getStudent, getFaculty, getMajor } from '../../service/Student.service';


function MainStudent() {

  const [data, setData] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataMajor, setDataMajor] = useState([]);

  const [pagin,setPagin] = useState({

    totalrow: 0,      //นับค่าที่อยู่ใน array 
    pagesize: 10,        //คิดครั้งละเท่าไหร่ เช่น 10 รายการต่อหน้า
    currentpage: 1,    //ตัวบอกว่าอยู่ที่หน้าเท่าไหร่
    totalpage: 1,    //จำนวนที่จะแสดง / จำนวนหน้า
  }

)

  useEffect(() => {
    get('', 0, 0, 10, 1);
    getfaculty();
    getmajor(0);
  }, [])

  function get(search, faculty, major, pagesize, currentpage) {
    let res = getStudent(search, faculty, major, pagesize, currentpage);
    console.log(res);
    setData(res.data);
    setPagin(res.pagin)
  }

  function getfaculty() {
    let res = getFaculty();
    setDataFaculty(res);
  }

  function getmajor(facultyId) {
    let res = getMajor(facultyId);

    console.log("getmajor", res);
    setDataMajor(res);
  }
  function changePage(page){

  }




  return (
    <div className="col-12">
      <Formik
        initialValues={{
          search: '',
          faculty: 0,
          major: 0
        }}
        onSubmit={(values) => {
          get(values.search, values.faculty, values.major);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>ค้นหา</label>
                <input
                  value={values.search}
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setFieldValue("search", e.target.value);
                  }}
                />
              </div>

              <div className="col-12 col-md-4 px-1 mt-1">
                <label>คณะ</label>
                <select className="form-control form-select"
                  value={values.faculty}
                  onChange={(e) => {
                    getmajor(e.target.value)
                    setFieldValue("faculty", e.target.value);
                  }}>
                  <option value={0}>---เลือกคณะ----</option>
                  {dataFaculty.map((item, index) => (

                    <option key={item.id} value={item.id}>
                      {item.faculty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-md-4 px-1 mt-1">


                <label>สาขา</label>
                <select

                  value={values.major}
                  className="form-control form-select"


                  onChange={(e) => {
                    getmajor(e.target.value)
                    setFieldValue("major", e.target.value);
                  }}>
                  <option value={0}>---เลือกสาขา----</option>

                  {dataMajor.map((item, index) => (

                    <option key={item.id} value={item.id}>
                      {item.major}
                    </option>
                  ))}
                </select>
              </div>

              <div className='d-flex justify-content-center'>
                <button type="submit" className='btn btn-success mx-1'
                  onClick={() => {
                    get('', 0, 0);
                    console.log()
                  }}>
                  ค้นหา

                </button>
                <button type="reset" className='btn btn-warning mx-1'
                  onClick={() => {
                    get('', 0, 0);
                    getmajor(0);
                    get('', 0, 0, 10, 1);
                    console.log()
                  }}>
                  ล้างค่า
                </button>

              </div>
            </div>

            <div>
              <ShowData data={data}  pagin={pagin}
              changePage={(page) =>{
                get(values.search,values.faculty,values.major,pagin.pagesize,page);
              }}
              changePageSize={(pagesize)=>{
                //.log("pagesize", pagesize);
                get(values.search,values.faculty,values.major,pagesize,1)
              }}
              />
              
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainStudent;
