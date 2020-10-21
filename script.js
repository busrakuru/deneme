function hesapla() 
{
	var snv1_1=Number(document.getElementById("snv1_1").value);
	var snv2_1=Number(document.getElementById("snv2_1").value);
	var prf1_1=Number(document.getElementById("prf1_1").value);
	var prf2_1=Number(document.getElementById("prf2_1").value);
	var snv1_2=Number(document.getElementById("snv1_2").value);
	var snv2_2=Number(document.getElementById("snv2_2").value);
	var prf1_2=Number(document.getElementById("prf1_2").value);
	var prf2_2=Number(document.getElementById("prf2_2").value);
	var snv1_3=Number(document.getElementById("snv1_3").value);
	var snv2_3=Number(document.getElementById("snv2_3").value);
	var prf1_3=Number(document.getElementById("prf1_3").value);
	var prf2_3=Number(document.getElementById("prf2_3").value);
	var snv1_4=Number(document.getElementById("snv1_4").value);
	var snv2_4=Number(document.getElementById("snv2_4").value);
	var prf1_4=Number(document.getElementById("prf1_4").value);
	var prf2_4=Number(document.getElementById("prf2_4").value);
	var snv1_5=Number(document.getElementById("snv1_5").value);
	var snv2_5=Number(document.getElementById("snv2_5").value);
	var prf1_5=Number(document.getElementById("prf1_5").value);
	var prf2_5=Number(document.getElementById("prf2_5").value);
	var snv1_6=Number(document.getElementById("snv1_6").value);
	var snv2_6=Number(document.getElementById("snv2_6").value);
	var prf1_6=Number(document.getElementById("prf1_6").value);
	var prf2_6=Number(document.getElementById("prf2_6").value);
	var snv1_7=Number(document.getElementById("snv1_7").value);
	var snv2_7=Number(document.getElementById("snv2_7").value);
	var prf1_7=Number(document.getElementById("prf1_7").value);
	var prf2_7=Number(document.getElementById("prf2_7").value);
	var snv1_8=Number(document.getElementById("snv1_8").value);
	var snv2_8=Number(document.getElementById("snv2_8").value);
	var prf1_8=Number(document.getElementById("prf1_8").value);
	var prf2_8=Number(document.getElementById("prf2_8").value);
	var snv1_9=Number(document.getElementById("snv1_9").value);
	var snv2_9=Number(document.getElementById("snv2_9").value);
	var prf1_9=Number(document.getElementById("prf1_9").value);
	var prf2_9=Number(document.getElementById("prf2_9").value);
	var snv1_10=Number(document.getElementById("snv1_10").value);
	var snv2_10=Number(document.getElementById("snv2_10").value);
	var prf1_10=Number(document.getElementById("prf1_10").value);
	var prf2_10=Number(document.getElementById("prf2_10").value);
	var snv1_11=Number(document.getElementById("snv1_11").value);
	var snv2_11=Number(document.getElementById("snv2_11").value);
	var prf1_11=Number(document.getElementById("prf1_11").value);
	var prf2_11=Number(document.getElementById("prf2_11").value);
	var açıkka =  (snv1_1+snv2_1+prf1_1+prf2_1)/4;
	var beden = (snv1_2+snv2_2+prf1_2+prf2_2)/4;
	var din = (snv1_3+snv2_3+prf1_3+prf2_3)/4;
	var felsefe = (snv1_4+snv2_4+prf1_4+prf2_4)/4;
	var grafik = (snv1_5+snv2_5+prf1_5+prf2_5)/4;
	var mat = (snv1_6+snv2_6+prf1_6+prf2_6)/4;
	var syd = (snv1_7+snv2_7+prf1_7+prf2_7)/4;
	var tarih = (snv1_8+snv2_8+prf1_8+prf2_8)/4;
	var edebiyat = (snv1_9+snv2_9+prf1_9+prf2_9)/4;
	var web = (snv1_10+snv2_10+prf1_10+prf2_10)/4;
	var yd = (snv1_11+snv2_11+prf1_11+prf2_11)/4;
	var açıkka_ort = açıkka*2;
	var	beden_ort = beden*2;
	var din_ort = din*2;
	var	felsefe_ort = felsefe*2;
	var grafik_ort = grafik*8;
	var mat_ort = mat*2;
	var	syd_ort = syd*4
	var	tarih_ort = tarih*2;
	var	edebiyat_ort = edebiyat*5;
	var	web_ort = web*12;
	var yd_ort = yd*2;
	var ort = (açıkka_ort + beden_ort + din_ort + felsefe_ort + grafik_ort + mat_ort + syd_ort + tarih_ort + edebiyat_ort + web_ort + yd_ort)/43;
	alert(ort);
}

function  doldur() 
{
	for(var i=1; i<=11; i++)
	{
		document.getElementById("snv1_"+i).value = 40+i;
		document.getElementById("snv2_"+i).value = 50+i;
		document.getElementById("prf1_"+i).value = 60+i;
		document.getElementById("prf2_"+i).value = 70+i;
	}	
}
