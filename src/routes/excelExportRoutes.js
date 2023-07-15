const express = require('express');
const excelExportController = require('../controller/excelExportController');

const router = express.Router();
// Export table data in Excel format
router.get('/export', excelExportController.exportTableData);

//Diploma Export
router.get('/exportDiplomaStudents', excelExportController.exportDiplomaStudents);
router.get('/exportMEdiplomaStudents', excelExportController.exportMEdiplomaStudents);
router.get('/exportCivildiplomaStudents', excelExportController.exportCivildiplomaStudents);

//Mtech Export
router.get('/exportMtechStudents', excelExportController.exportMtechStudents);
router.get('/exportSEmtechStudents', excelExportController.exportSEmtechStudents);
router.get('/exportMSDmtechStudents', excelExportController.exportMSDmtechStudents);

//MBA Export
router.get('/exportMbaStudents', excelExportController.exportMbaStudents);
router.get('/exportFMmbaStudents', excelExportController.exportFMmbaStudents);
router.get('/exportMMmbaStudents', excelExportController.exportMMmbaStudents);

//Btech Exports
router.get('/exportBtechStudents', excelExportController.exportBtechStudents);
router.get('/exportCSEbtechStudents', excelExportController.exportCSEbtechStudents);
router.get('/exportCivilbtechStudents', excelExportController.exportCivilbtechStudents);
router.get('/exportEEbtechStudents', excelExportController.exportEEbtechStudents);
router.get('/exportEEEbtechStudents', excelExportController.exportEEEbtechStudents);
router.get('/exportECEbtechStudents', excelExportController.exportECEbtechStudents);
router.get('/exportMEbtechStudents', excelExportController.exportMEbtechStudents);

module.exports = router;
