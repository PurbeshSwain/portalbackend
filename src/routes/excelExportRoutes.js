const express = require('express');
const excelExportController = require('../controller/excelExportController');

const router = express.Router();
// Export table data in Excel format
router.get('/export', excelExportController.exportTableData);
router.get('/exportDiplomaStudents', excelExportController.exportDiplomaStudents);
router.get('/exportBtechStudents', excelExportController.exportBtechStudents);
router.get('/exportMtechStudents', excelExportController.exportMtechStudents);
router.get('/exportMbaStudents', excelExportController.exportMbaStudents);

module.exports = router;
