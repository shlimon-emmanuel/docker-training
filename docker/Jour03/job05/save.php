<?php
header('Content-Type: application/json');

// Récupérer les données POST
$data = json_decode(file_get_contents('php://input'), true);

// Lire le fichier results.json existant
$resultsFile = 'results.json';
$results = [];

if (file_exists($resultsFile)) {
    $fileContent = file_get_contents($resultsFile);
    if (!empty($fileContent)) {
        $results = json_decode($fileContent, true);
    }
}

// Ajouter le nouveau résultat
$results['games'][] = $data;

// Sauvegarder dans le fichier
file_put_contents($resultsFile, json_encode($results, JSON_PRETTY_PRINT));

echo json_encode(['success' => true]);