import React from "react";
import Table from "../../component/table";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney',
    disabled: true
  },
];

const mapStateToProps = (state: any) => {
  return {
    language: state.topPageReducer.language
  }
};

const TablePage = (props: any) => {
  const {language} = props;
  const deleteItem = (item: any) => {
    console.log("删除", item.key)
  };

  const checkItem = (obj: any, item: any) => {
    item.checked = obj.target.checked;
    // const list = data.filter(
    //   (checkedItem) => checkedItem.checked === true
    // );
    // window.console.log("选择",list)
  };

  const columns = [
    {
      title: 'Checkbox',
      dataIndex: 'checkbox',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      render: (record: any) =>
        <div key={`del-${record.key}`} onClick={() => deleteItem(record)} id={record.key}>
          删除
        </div>,
    },
  ];
  let { t, i18n } = useTranslation();
  i18n.changeLanguage(language === 'en' ? 'en' : 'zh');
  return (
    <div>
      <NavLink to="/">{t('home-page')}</NavLink>
      <Table
        data={data}
        columns={columns}
        checkItem={checkItem}
      />
    </div>
  );
};

export default connect(mapStateToProps)(TablePage);


