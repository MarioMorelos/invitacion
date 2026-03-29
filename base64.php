<?php

$file = './lista_previa.csv';
$fileOutput = './invitacion' . date('Y-m-d_H-i-s') . '.csv';

$notSentIds = [];
$output = fopen($fileOutput, 'w');
if (($handle = fopen($file, 'r')) !== false) {
    while (($data = fgetcsv($handle)) !== false) {
        // echo base64_encode($data[0]) . " real ".$data[0]. "\n";
        // $notSentIds[$data[0] . ": https://mariomorelos.github.io/invitacion/?n=" . base64_encode($data[0]) . "&i=" . base64_encode($data[1]) . "&t=" . base64_encode($data[2])] = true;
        // echo "https://mariomorelos.github.io/invitacion/?n=" . base64_encode($data[0]) . "&i=" . base64_encode($data[1]) . "&t=" . base64_encode($data[2]) . "\n";
        fputcsv($output, [$data[0] . ": https://mariomorelos.github.io/invitacion/?n=" . base64_encode($data[0]) . "&i=" . base64_encode($data[1]) . "&t=" . base64_encode($data[2])]);
    }
    fclose($handle);
}
fclose($output);

// // Read file_send.csv and write only records marked as "No enviado"
// $output = fopen($fileOutput, 'w');
// if (($handle = fopen($fileSend, 'r')) !== false) {
//     while (($data = fgetcsv($handle)) !== false) {
//         if (isset($notSentIds[$data[0]])) {
//             fputcsv($output, $data);
//         }
//     }
//     fclose($handle);
// }
// fclose($output);

// echo "Processing complete. Output file: $fileOutput\n";

?>