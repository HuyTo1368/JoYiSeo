import React from "react"
import './menu.css'

const tabs = ['Tiến độ điều tra', 'Phân tích số liệu', 'Danh sách dân số', 'Tra cứu thông tin', 'Cấp tài khoản', 'Nhập liệu']

export default function Menu(props) {
    return (
        <div>
            {tabs.map(tab => (
                <div 
                key={tab}
                className="menu1"
                >
                    <button className="active" onc>
                        {tab}
                    </button>
                </div>
            ))}
        </div>
    )
}