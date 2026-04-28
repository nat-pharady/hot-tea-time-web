$files = @(
    "home.html",
    "brew.html", 
    "features.html",
    "asset-marketplace.html"
)

$replacements = @(
    @{
        Pattern = '🔒'
        Replacement = '<img src="images/emojis/cake.png" alt="Premium" style="width:12px; height:12px; display:inline-block; vertical-align:middle; margin-right:4px;">'
    }
    @{
        Pattern = '👁️'
        Replacement = '<img src="images/emojis/eye.png" alt="Stealth" style="width:14px; height:14px; display:inline-block; vertical-align:middle;">'
    }
    @{
        Pattern = '✓'
        Replacement = '<img src="images/emojis/cupcake.png" alt="Success" style="width:14px; height:14px; display:inline-block; vertical-align:middle;">'
    }
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        foreach ($rep in $replacements) {
            $content = $content -replace [regex]::Escape($rep.Pattern), $rep.Replacement
        }
        Set-Content $file -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}

Write-Host "All emoji replacements complete!"
