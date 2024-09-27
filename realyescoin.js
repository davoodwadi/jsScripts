



const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});

center.dispatchEvent(evt1);
center.dispatchEvent(evt2);


<div class="CoinButton--content"></div>