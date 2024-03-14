function volume_sphere() {
	
    const form = document.getElementById('MyForm');
	let r = Number(form.radius.value);
	let vol = (4*Math.PI*(r**3))/ 3;
	form.volume.value = vol.toFixed(4);
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
