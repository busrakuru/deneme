<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<h1 align="center">NOT HESAPLAMA</h1>
	<div class="kutu1">
	<table border="1px" bordercolor="gray">
		<tr>
			<td><b>Ders Adları</b></td>
			<td><b>1.Sınav</b></td>
			<td><b>2.Sınav</b></td>
			<td><b>1.Prfmns</b></td>
			<td><b>2.Prfmns</b></td>
		</tr>
		
		<tr>
			<td>AÇIKKA</td>
			<td><input type="text" name="" id="snv1_1"></td>
			<td><input type="text" name="" id="snv2_1"></td>
			<td><input type="text" name="" id="prf1_1"></td>
			<td><input type="text" name="" id="prf2_1"></td>
		</tr>
		<tr>
			<td>Beden</td>
			<td><input type="text" name="" id="snv1_2"></td>
			<td><input type="text" name="" id="snv2_2"></td>
			<td><input type="text" name="" id="prf1_2"></td>
			<td><input type="text" name="" id="prf2_2"></td>
		</tr>
		<tr>
			<td>Din</td>
			<td><input type="text" name="" id="snv1_3"></td>
			<td><input type="text" name="" id="snv2_3"></td>
			<td><input type="text" name="" id="prf1_3"></td>
			<td><input type="text" name="" id="prf2_3"></td>
		</tr>
		<tr>
			<td>Felsefe</td>
			<td><input type="text" name="" id="snv1_4"></td>
			<td><input type="text" name="" id="snv2_4"></td>
			<td><input type="text" name="" id="prf1_4"></td>
			<td><input type="text" name="" id="prf2_4"></td>
		</tr>
		<tr>
			<td>Grafik</td>
			<td><input type="text" name="" id="snv1_5"></td>
			<td><input type="text" name="" id="snv2_5"></td>
			<td><input type="text" name="" id="prf1_5"></td>
			<td><input type="text" name="" id="prf2_5"></td>
		</tr>
		<tr>
			<td>Matematik</td>
			<td><input type="text" name="" id="snv1_6"></td>
			<td><input type="text" name="" id="snv2_6"></td>
			<td><input type="text" name="" id="prf1_6"></td>
			<td><input type="text" name="" id="prf2_6"></td>
		</tr>
		<tr>
			<td>SYabancıDil</td>
			<td><input type="text" name="" id="snv1_7"></td>
			<td><input type="text" name="" id="snv2_7"></td>
			<td><input type="text" name="" id="prf1_7"></td>
			<td><input type="text" name="" id="prf2_7"></td>
		</tr>
		<tr>
			<td>Tarih</td>
			<td><input type="text" name="" id="snv1_8"></td>
			<td><input type="text" name="" id="snv2_8"></td>
			<td><input type="text" name="" id="prf1_8"></td>
			<td><input type="text" name="" id="prf2_8"></td>
		</tr>
		<tr>
			<td>Edebiyat</td>
			<td><input type="text" name="" id="snv1_9"></td>
			<td><input type="text" name="" id="snv2_9"></td>
			<td><input type="text" name="" id="prf1_9"></td>
			<td><input type="text" name="" id="prf2_9"></td>
		</tr>
		<tr>
			<td>Web</td>

			<td><input type="text" name="" id="snv1_10"></td>
			<td><input type="text" name="" id="snv2_10"></td>
			<td><input type="text" name="" id="prf1_10"></td>
			<td><input type="text" name="" id="prf2_10"></td>
		</tr>
		<tr>
			<td>YabancıDil</td>
			<td><input type="text" name="" id="snv1_11"></td>
			<td><input type="text" name="" id="snv2_11"></td>
			<td><input type="text" name="" id="prf1_11"></td>
			<td><input type="text" name="" id="prf2_11"></td>
		</tr>
		<tr>
			<td colspan="6"><input type="submit" name="btn" value="Doldur" id="btn" onclick="doldur()"></td>
		</tr>
		<tr>
			<td colspan="6"><input type="submit" name="btn" value="Hesapla" id="btn" onclick="hesapla()"></td>
		</tr>
	</table>
	</div>
	<img class="resim" src="img/caculator.png">
	<div class="golge"></div>
	<div id="sonuc"></div>
	<script type="text/javascript" src="js/script.js"></script>
</body>
</html>
