<template>
    <div name="contact">
        <h1 class="product">{{$t('message.con1')}}</h1>
        <br>
        <h1 class="compHeading1">Kreuzäcker 8, 94469 Deggendorf</h1>
        <b-img src="/map.png" fluid rounded="true" style="max-width:100%; height:auto;" alt="Responsive image">
        </b-img>
        <br>
        <p><b>Liebherr-Components AG</b><br/>
         {{$t('message.post')}} 222, CH-5415 Nussbaumen / AG <br/>
         <span>&#9742;</span> +41 56 296 43 00 <br/> 
         <span>&#9993;</span> components@liebherr.com</p>
    </div>
</template>

<script>
export default 
{
    name: "Contact"

}
</script>