import ExcelJS from 'exceljs';

export const exportToExcel = async (data, reportType, startDate, endDate) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(`${reportType} Report`);

  worksheet.columns = [
    { header: 'Date', key: 'date', width: 15 },
    { header: 'Description', key: 'description', width: 40 },
    { header: 'Amount', key: 'amount', width: 10 },
    { header: 'Category', key: 'category', width: 20 },
    { header: 'Type', key: 'type', width: 20 },
  ];

  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
  });

  filteredData.forEach((item) => {
    worksheet.addRow({
      date: item.date,
      description: item.description,
      amount: item.amount,
      category: item.category,
      type: item.type
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${reportType}_report.xlsx`;
  link.click();
};
