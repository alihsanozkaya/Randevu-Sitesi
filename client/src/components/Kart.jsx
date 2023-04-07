import { Card, Space } from 'antd';
import React from 'react';
import moment from "moment"

const Kart = ({ver}) => (
  <Space direction="vertical" size={16}>
    <Card title="Randevu" style={{ width: 300 , backgroundColor: "#C0C0C0", marginTop: "25px", marginRight: "10px"}}>
      <p>Randevu alınan kişi: </p>
      <p>Ad-Soyad: {ver.name}</p>
      <p>TC kimlik numarası: {ver.tc}</p>
      <p>Randevu Tarihi: {moment(ver.tarih).locale('tr').format('Do MMM YY dddd')}</p>
    </Card>
  </Space>
);

export default Kart;