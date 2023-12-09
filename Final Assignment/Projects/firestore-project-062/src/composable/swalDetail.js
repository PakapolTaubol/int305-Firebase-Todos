import { getDataByCollectionName } from "./getData"
import Swal from 'sweetalert2'

export const companyDetails = (cmp_id, companies) => {
    const company = companies.find(c => c.id === cmp_id);
    if (!company) {
        Swal.fire({
            text: 'Company not found',
            icon: 'error',
            showConfirmButton: false,
        });
        return;
    }

    const {
        id,
        name,
        type,
        status: { open, createdOn, updatedOn }
    } = company;

    const [createdOnDate, updatedOnDate] = [createdOn, updatedOn].map(
        (date) => new Date(date.seconds * 1000).toLocaleString("th-TH", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
    );

    Swal.fire({
        html: `<div class="flex flex-col text-left text-gray-700">
                        <div class="flex items-center justify-between">
                            <span>Company Detail:</span>
                            <span class="text-blue-500">ID: ${id}</span>
                        </div>
                        <ul class="p-4">
                            <li>ชื่อบริษัท: <span class="text-blue-500">${name}</span></li>
                            <li>ประเภท: <span class="text-blue-500">${type}</span></li>
                            <li>สถานะบริษัท: ${open == true ? 'เปิดดำเนินการ' : 'ปิดบริษัทไปแล้ว'}</li>
                            <li>สร้างขึ้นเมื่อ: ${createdOnDate}</li>
                            <li>อัปเดตล่าสุด: ${updatedOnDate}</li>
                        </ul>
                    </div>`,
        showConfirmButton: false,
    });
};

export const departmentDetails = async (department_id) => {
    const colDepartment = await getDataByCollectionName('departments');
    const colTarget = colDepartment.find(col => col.id === department_id)
    Swal.fire({
        html: `<div class="flex flex-col text-left text-gray-700">
                            <span>ข้อมูลอาชีพ:</span>
                        <ul class="p-4">
                            <li>ตำแหน่ง: <span class="text-blue-500">${colTarget.name}</span></li>
                            <li>สกิลที่ต้องมี: <span class="text-blue-500">${colTarget.skill}</span></li>
                        </ul>
                    </div>`,
        showConfirmButton: false
    })
}