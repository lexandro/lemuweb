    egysegnev=new Array(
      new Array(),
      new Array("botharcos", "kõbaltás","felderítõ"),
      new Array("buzogányos", "pikás", "zsoldos"),
      new Array("tõrös", "hajítódárdás", "támadó", "elit hajítódárdás", "elit támadó", "kõhajító"),
      new Array("vívótõrös", "dobóbaltás", "halhatatlan", "elit dobóbaltás", "elit halhatatlan", "dárdavetõ"),
      new Array("rövidkardforgató", "hajítóbárdos", "felderítõlovas", "elit hajítóbárdos", "elit felderítõlovas", "katapult"),
      new Array("pallos kardos", "parittyás", "könnyûlovas", "elit parittyás", "elit könnyûlovas", "onager"),
      new Array("szablyakardos", "alabárdos", "lovas", "elit alabárdos", "elit lovas", "sambuca"),
      new Array("handzsár kardos", "lándzsás", "páncélozott lovas", "elit lándzsás", "elit páncélozott lovas", "skorpió"),
      new Array("hosszú kardos", "íjász", "nehézfegyverzetü lovas", "elit íjász", "elit nehézfegyverzetü lovas", "balliszta"),
      new Array("kétkezes kardos", "számszeríjász", "lovag", "elit számszeríjász", "elit lovag", "görög tüz")
      );
    
    
    nepek=new Array("szkíta", "római", "sumér", "kelta", "germán", 
              "egyiptomi", "görög", "föníciai",  "héber", "perzsa");

  	tbonus=new Array(30, 10, -10, 0, 0, 0, 0, -20, 0, 0); 
  	vbonus=new Array(10, 10, -10, 0, 0, 0, 0,  20, 0, 0);

  	egysegek=new Array( 
  		new Array( 0, 0, 0, 0, 0, 0), 
  		new Array( 5, 5, 5, 0, 0, 0), 
  		new Array( 6, 6, 6, 0, 0, 0), 
  		new Array( 7, 7, 7,10,10,35), 
			new Array( 8, 8, 8,12,12,40),
			new Array(10,10,10,15,15,45),
			new Array(12,12,12,17,17,51),
			new Array(13,13,13,21,21,65),
			new Array(17,17,17,24,24,85),
			new Array(24,24,24,28,28,100),
			new Array(25,25,25,35,35,125)
			);

    fields1=new Array("gyalog1", "vedo1", "tamado1", "evedo1", "etamado1", "ostrom1");
    fields1r=new Array("gyalog1r", "vedo1r", "tamado1r", "evedo1r", "etamado1r", "ostrom1r");
    fields1x=new Array("gyalog1", "vedo1", "tamado1", "evedo1", "etamado1", "ostrom1",
                        "gyalog1r", "vedo1r", "tamado1r", "evedo1r", "etamado1r", "ostrom1r");
    fields2=new Array("gyalog2", "vedo2", "tamado2", "evedo2", "etamado2", "ostrom2");
    fields2r=new Array("gyalog2r", "vedo2r", "tamado2r", "evedo2r", "etamado2r", "ostrom2r");
    fields2x=new Array("gyalog2", "vedo2", "tamado2", "evedo2", "etamado2", "ostrom2",
                      "gyalog2r", "vedo2r", "tamado2r", "evedo2r", "etamado2r", "ostrom2r");

		function tamad(db, ellen)
		{
			ellen=1*ellen;
			db=1*db;
			if (ellen>2*db) return 1*db;
			if (ellen<db) return ellen*0.3+1*db;
			return db*1.3;
		}

    function calc()
    {
    	with (document.f) 
    	{
    	  sereg=new Array();
    	  for (i=0; i<6; i++) sereg[fields1[i]]=document.f[fields1[i]].value;
    	  for (i=0; i<6; i++) sereg[fields1r[i]]=document.f[fields1r[i]].value;
    	  sereg2=new Array();
    	  for (i=0; i<6; i++) sereg2[fields2[i]]=document.f[fields2[i]].value;
    	  for (i=0; i<6; i++) sereg2[fields2r[i]]=document.f[fields2r[i]].value;

    	  utihalott.value=0;
    	  utiserult.value=0;
    	  for (j=0; j<ut.value; j++)
    	  {
    	    for (i=0; i<12; i++)
    	    {
    	      s=sereg[fields1x[i]]*0.003;
    	      s*=1-elhullas.value/100.0;
    	      if (s<2 && sereg[fields1x[i]]>0) s=2;
    	      h=sereg[fields1x[i]]*0.0015;
    	      if (h<1 && sereg[fields1x[i]]>0) h=1;
    	      h*=1-elhullas.value/100.0;
    	      sereg[fields1x[i]]-=h+s;
    	      utihalott.value=parseInt(utihalott.value)+h;
    	      utiserult.value=parseInt(utiserult.value)+s;
    	    }
        }    	  

        seregero1=new Array();        
   	    for (i=0; i<6; i++)
   	      seregero1[fields1[i]]=sereg[fields1[i]]*egysegek[kor1.value][i] + sereg[fields1r[i]]*egysegek[kor1.value-1][i];
        seregero2=new Array();        
   	    for (i=0; i<6; i++)
   	      seregero2[fields2[i]]=sereg2[fields2[i]]*egysegek[kor2.value][i] + sereg2[fields2r[i]]*egysegek[kor2.value-1][i];
    	
    	  ossz1.value=(1-deka1.value/100.0)*moral1.value*(tbonus[nep1.value]+100)/10000.0;
	    	for (i=0; i<tudi1.value; i++) ossz1.value*=1.05;
	    	if (vari1.checked == true) ossz1.value*=1.25;
	    	if (bator1.checked == true && parseInt(pont1.value)<parseInt(pont2.value))
	    	{
	    	  szorzo=pont2.value*1.0/pont1.value;
	    	  if (szorzo>1.1) szorzo=1.1;
	    	 	 ossz1.value*=szorzo;
	    	}
	    	if (allam1.value==1 || allam1.value==2) ossz1.value*=1.05;
	    	if (allam1.value==3) ossz1.value*=1.1;
	    	ossz1.value*=(
	    	  tamad(seregero1.gyalog1, seregero2.tamado2)+ 
	    	  tamad(seregero1.vedo1,   seregero2.gyalog2)+ 
	    	  tamad(seregero1.tamado1, seregero2.vedo2)+
	    		tamad(seregero1.ostrom1, seregero2.etamado2)+ 
	    		tamad(seregero1.evedo1,  seregero2.ostrom2)+ 
	    		tamad(seregero1.etamado1,seregero2.evedo2));
	    	ossz1.value*=bonusz1.value;
  	  	
	    	ossz2.value=(1-deka2.value/100.0)*moral2.value*(vbonus[nep2.value]+100)/10000.0;
	    	for (i=0; i<tudi2.value; i++) ossz2.value*=1.05;
	    	if (vari2.checked == true) ossz2.value*=1.25;
	    	if ((bator2.checked == true) && (parseInt(pont2.value) < parseInt(pont1.value)))
	    	{
	    	  szorzo=pont1.value*1.0/pont2.value;
	    	  if (szorzo>1.1) szorzo=1.1;
	    	 	ossz2.value*=szorzo;
	    	}
	    	if (sarkanykod.checked == true) ossz2.value*=1.4;
	    	if (allam2.value==1 || allam2.value==2) ossz2.value*=1.05;
	    	if (allam2.value==3) ossz2.value*=1.1;
	    	
	    	ossz2.value*=(
	    	  tamad(seregero2.gyalog2, seregero1.tamado1)+ 
	    	  tamad(seregero2.vedo2, seregero1.gyalog1)+ 
	    	  tamad(seregero2.tamado2, seregero1.vedo1)+
	    		tamad(seregero2.ostrom2, seregero1.etamado1)+ 
	    		tamad(seregero2.evedo2, seregero1.ostrom1)+ 
	    		tamad(seregero2.etamado2, seregero1.evedo1));
	    	ossz2.value*=bonusz2.value;
	    	
	    	tulero.value=ossz1.value/ossz2.value;
	    
	      total1=parseInt(0);
	      for (i=0; i<6; i++)
	        total1=total1+parseInt(sereg[fields1[i]]);
	      for (i=0; i<6; i++)
	        total1=total1+parseInt(sereg[fields1r[i]]);
	      total2=parseInt(0);
	      for (i=0; i<6; i++)
	        total2=total2+parseInt(sereg2[fields2[i]]);
	      for (i=0; i<6; i++)
	        total2=total2+parseInt(sereg2[fields2r[i]]);
	        
	      tavolsagbonusz1=(pont1.value*1.0/pont2.value-0.5)*2;
	      if (tavolsagbonusz1>1) tavolsagbonusz1=1;
	      tavolsagbonusz2=(pont2.value*1.0/pont1.value-0.5)*2;
	      if (tavolsagbonusz2>1) tavolsagbonusz2=1;
    	    
    	  d=ossz2.value*ossz2.value + ossz1.value*ossz1.value;
    	  if (d==0) d=1;
	      halott1.value=total1*(1.0-elhullas.value/100.0)/100*7*ossz2.value*ossz2.value/d*2/3*tavolsagbonusz1;
	      serult1.value=total1*(1.0-elhullas.value/100.0)/100*7*ossz2.value*ossz2.value/d/3*tavolsagbonusz1;
	      halott2.value=total2*(1.0-elhullas2.value/100.0)/100*7*ossz1.value*ossz1.value/d/3*tavolsagbonusz2;
	      serult2.value=total2*(1.0-elhullas2.value/100.0)/100*7*ossz1.value*ossz1.value/d*2/3*tavolsagbonusz2;
	      
	      utihalott.value=parseInt(utihalott.value);
	      utiserult.value=parseInt(utiserult.value);
	      ossz1.value=parseInt(ossz1.value);
	      ossz2.value=parseInt(ossz2.value);
	      halott1.value=parseInt(halott1.value);
	      halott2.value=parseInt(halott2.value);
	      serult1.value=parseInt(serult1.value);
	      serult2.value=parseInt(serult2.value);

	      osszegyseg1.value=total1;
	      osszegyseg2.value=total2;
	      
/*	      vv=parseInt(vserult1.value)+parseInt(vhalott1.value);
	      S2=ossz1.value*ossz1.value;
	      E2=vv*S2/(total1/100*7-vv);
	      if (E2>0) bvedo.value=parseInt(Math.sqrt(E2));*/

    	}
    }
    
//    calc();
    
    function csere()
    {
    	with (document.f) 
    	{
    		tmp=data1.value;    data1.value   =data2.value;    data2.value=tmp;
    		tmp=nep1.value;     nep1.value    =nep2.value;     nep2.value=tmp;
    		tmp=kor1.value;     kor1.value    =kor2.value;     kor2.value=tmp;
    		tmp=terulet1.value; terulet1.value=terulet2.value; terulet2.value=tmp;
    		tmp=pont1.value;    pont1.value   =pont2.value;    pont2.value=tmp;
    		tmp=moral1.value;   moral1.value  =moral2.value;   moral2.value=tmp;
    		tmp=deka1.value;    deka1.value   =deka2.value;    deka2.value=tmp;
    		tmp=tudi1.value;    tudi1.value   =tudi2.value;    tudi2.value=tmp;
    		tmp=vari1.checked;  vari1.checked =vari2.checked;  vari2.checked=tmp;
    		tmp=bator1.checked; bator1.checked=bator2.checked; bator2.checked=tmp;
    		tmp=allam1.value;   allam1.value  =allam2.value;   allam2.value=tmp;
    		tmp=bonusz1.value;  bonusz1.value =bonusz2.value;  bonusz2.value=tmp;
    		tmp=elhullas.value; elhullas.value=elhullas2.value;elhullas2.value=tmp;

    		tmp=gyalog1.value;  gyalog1.value =gyalog2.value;  gyalog2.value=tmp;
    		tmp=vedo1.value;    vedo1.value   =vedo2.value;    vedo2.value=tmp;
    		tmp=tamado1.value;  tamado1.value =tamado2.value;  tamado2.value=tmp;
    		tmp=ostrom1.value;  ostrom1.value =ostrom2.value;  ostrom2.value=tmp;
    		tmp=evedo1.value;   evedo1.value  =evedo2.value;   evedo2.value=tmp;
    		tmp=etamado1.value; etamado1.value=etamado2.value; etamado2.value=tmp;
				
    		tmp=gyalog1r.value;  gyalog1r.value =gyalog2r.value;  gyalog2r.value=tmp;
    		tmp=vedo1r.value;    vedo1r.value   =vedo2r.value;    vedo2r.value=tmp;
    		tmp=tamado1r.value;  tamado1r.value =tamado2r.value;  tamado2r.value=tmp;
    		tmp=ostrom1r.value;  ostrom1r.value =ostrom2r.value;  ostrom2r.value=tmp;
    		tmp=evedo1r.value;   evedo1r.value  =evedo2r.value;   evedo2r.value=tmp;
    		tmp=etamado1r.value; etamado1r.value=etamado2r.value; etamado2r.value=tmp;
				
		calc();
	}    
    }

    function reset1s()
    {
    	with (document.f) 
    	{
    		gyalog1.value=0;
    		vedo1.value=0;
    		tamado1.value=0;
    		ostrom1.value=0;
    		evedo1.value=0;
    		etamado1.value=0;
				
    		gyalog1r.value=0;
    		vedo1r.value=0;
    		tamado1r.value=0;
    		ostrom1r.value=0;
    		evedo1r.value=0;
    		etamado1r.value=0;
    	}
    }
    function reset1()
    {
    	with (document.f) 
    	{
    		nep1.value=0;
    		kor1.value=6;
    		moral1.value=80;
    		deka1.value=0;
    		tudi1.value=6;
    		vari1.checked=true;
    		bator1.checked=false;
        bonusz1.value=1.0;
    		terulet1.value=3000;
    		pont1.value=150000;
    		allam1.value=0;
    		data1.value="Masold ide a gombot, vagy a fooldalt!";
    		elhullas.value=5;
    		
    		reset1s();

				calc();
			}    
    }
    function reset2s()
    {
    	with (document.f) 
    	{
    		gyalog2.value=0;
    		vedo2.value=0;
    		tamado2.value=0;
    		ostrom2.value=0;
    		evedo2.value=0;
    		etamado2.value=0;
				
    		gyalog2r.value=0;
    		vedo2r.value=0;
    		tamado2r.value=0;
    		ostrom2r.value=0;
    		evedo2r.value=0;
    		etamado2r.value=0;
      }
    }
    function reset2()
    {
    	with (document.f) 
    	{
    		nep2.value=0;
    		kor2.value=6;
    		moral2.value=80;
    		deka2.value=0;
    		tudi2.value=6;
    		vari2.checked=true;
    		bator2.checked=false;
    		sarkanykod.checked=false;
        bonusz2.value=1.0;
    		terulet2.value=3000;
    		pont2.value=150000;
    		allam2.value=0;
    		data2.value="Masold ide a gombot, vagy a fooldalt!";
    		elhullas2.value=5;

        reset2s();
        				
				calc();
			}    
    }

    function issp(ch)
    {
      return ch==' ' 
          || ch=='(' 
          || ch==')' 
          || ch=='#' 
          || ch=='*' 
          || ch=='%' 
          || ch=='\n' 
          || ch=='\r'
          || ch=='\t';
    }
    
    function find(ebben, ezt) //csak teljes szot keres
    {
    	idx=0;
    	while (1)
    	{
    	  idx=ebben.indexOf(ezt,idx);
    	  if (idx==-1) return -1;
//    	  alert(ebben + "\n" + ezt + "\n" + idx + "\n" + ebben.charAt(idx-1));
    	  if (idx!=0 && !issp(ebben.charAt(idx-1))) {idx++; continue;}
    	  if (idx+ezt.length==ebben.length && !issp(ebben.charAt(idx+ezt.length))) {idx++; continue;}
    	  return idx;
    	} 
    }
    
    function token(ebbol, innen, tokennum)
    {
      while (1)
      {
        while (issp(ebbol.charAt(innen))) ++innen;
        eddig=innen+1;
        while (ebbol.charAt(eddig) && !issp(ebbol.charAt(eddig))) ++eddig;

        if (0==--tokennum)
          return ebbol.substring(innen, eddig);
        else
          innen=eddig;
      }
    }
    
    function parse1()
    { with (document.f) {

      parse3();
      parse5();

      var szoveg1=data1.value.toLowerCase();

      idx=szoveg1.indexOf("korszak");
      if (idx==-1) return;
      idx=szoveg1.indexOf("#", idx);
      if (idx==-1) return;
      kor1.value=token(szoveg1, idx, 1);
      tudi1.value=kor1.value;

      idx=szoveg1.indexOf("harci kedv");
      if (idx==-1) return;
      moral1.value=token(szoveg1, idx, 3);

      idx=szoveg1.indexOf("dekadencia");
      if (idx==-1) return;
      deka1.value=token(szoveg1, idx, 2);

      idx=szoveg1.indexOf("nép");
      if (idx==-1) return;
      nepnev=token(szoveg1, idx, 2).toLowerCase();
      for (i=0; i<10; i++)
        if (nepnev.indexOf(nepek[i])==0)
          nep1.value=i;

      idx=szoveg1.indexOf("terület");
      if (idx==-1) return;
      terulet1.value=token(szoveg1, idx, 2);

      idx=szoveg1.indexOf("pontszám");
      if (idx==-1) return;
      pont1.value=token(szoveg1, idx, 2);

      idx=szoveg1.indexOf("gyalogság");
      if (idx==-1) return;
      gyalog1.value=token(szoveg1, idx, 2);
      idx=szoveg1.indexOf("véd");
      if (idx==-1) return;
      vedo1.value=token(szoveg1, idx, 2);
      idx=szoveg1.indexOf("támadó");
      if (idx==-1) return;
      tamado1.value=token(szoveg1, idx, 2);
      idx=szoveg1.indexOf("ostromgép");
      if (idx==-1) return;
      ostrom1.value=token(szoveg1, idx, 2);
      idx=szoveg1.indexOf("e. véd");
      if (idx==-1) return;
      evedo1.value=token(szoveg1, idx, 3);
      idx=szoveg1.indexOf("e. támadó");
      if (idx==-1) return;
      etamado1.value=token(szoveg1, idx, 3);

      calc();
    }}
    function parse2()
    { with (document.f) {
      parse4();
      parse6();
      
      var szoveg2=data2.value.toLowerCase();

      idx=szoveg2.indexOf("korszak");
      if (idx==-1) return;
      idx=szoveg2.indexOf("#", idx);
      if (idx==-1) return;
      kor2.value=token(szoveg2, idx, 1);
      tudi2.value=document.f.kor2.value;

      idx=szoveg2.indexOf("harci kedv");
      if (idx==-1) return;
      moral2.value=token(szoveg2, idx, 3);

      idx=szoveg2.indexOf("dekadencia");
      if (idx==-1) return;
      deka2.value=token(szoveg2, idx, 2);

      idx=szoveg2.indexOf("nép");
      if (idx==-1) return;
      nepnev=token(szoveg2, idx, 2).toLowerCase();
      for (i=0; i<10; i++)
        if (nepnev.indexOf(nepek[i])==0)
          nep2.value=i;

      idx=szoveg2.indexOf("terület");
      if (idx==-1) return;
      terulet2.value=token(szoveg2, idx, 2);

      idx=szoveg2.indexOf("pontszám");
      if (idx==-1) return;
      pont2.value=token(szoveg2, idx, 2);

      idx=szoveg2.indexOf("gyalogság");
      if (idx==-1) return;
      gyalog2.value=token(szoveg2, idx, 2);
      idx=szoveg2.indexOf("véd");
      if (idx==-1) return;
      vedo2.value=token(szoveg2, idx, 2);
      idx=szoveg2.indexOf("támadó");
      if (idx==-1) return;
      tamado2.value=token(szoveg2, idx, 2);
      idx=szoveg2.indexOf("ostromgép");
      if (idx==-1) return;
      ostrom2.value=token(szoveg2, idx, 2);
      idx=szoveg2.indexOf("e. véd");
      if (idx==-1) return;
      evedo2.value=token(szoveg2, idx, 3);
      idx=szoveg2.indexOf("e. támadó");
      if (idx==-1) return;
      etamado2.value=token(szoveg2, idx, 3);

      calc();
    }}
    function parse3()
    { with (document.f) {
      var szoveg1=data1.value.toLowerCase();

      idx=szoveg1.indexOf("fontosság");
      if (idx==-1) return;
      
      reset1s();      

      for (i=0; i<6; i++)
      {
        idx=find(szoveg1, egysegnev[document.f.kor1.value][i]);
        if (idx!=-1)
        {
          nev=egysegnev[document.f.kor1.value][i];
          if (!nev.length) return;
          idx+=nev.length;
          val=parseInt(token(szoveg1, idx, 1));
          document.f[fields1[i]].value=val;
        }
      }

      for (i=0; i<6; i++)
      {
        idx=find(szoveg1, egysegnev[document.f.kor1.value-1][i]);
        if (idx!=-1)
        {
          nev=egysegnev[document.f.kor1.value-1][i];
          if (!nev.length) return;
          idx+=nev.length;
          val=parseInt(token(szoveg1, idx, 1));
          document.f[fields1r[i]].value=val;
        }
      }
    }}
    
    function parse4()
    { with (document.f) {
      var szoveg2=data2.value.toLowerCase();

      idx=szoveg2.indexOf("fontosság");
      if (idx==-1) return;

      reset2s();      

      for (i=0; i<6; i++)
      {
        nev=egysegnev[kor2.value][i];
        idx=find(szoveg2,nev);
        if (idx!=-1)
        {
          idx+=nev.length;
          val=parseInt(token(szoveg2, idx, 1))+parseInt(token(szoveg2, idx, 2));
          document.f[fields2[i]].value=val;
        }
      }

      for (i=0; i<6; i++)
      {
        nev=egysegnev[kor2.value-1][i];
        idx=find(szoveg2,nev);
        if (idx!=-1)
        {
          idx+=nev.length;
          val=parseInt(token(szoveg2, idx, 1))+parseInt(token(szoveg2, idx, 2));
          document.f[fields2r[i]].value=val;
        }
      }
    }}

    function parse5()
    { with (document.f) {
      var szoveg1=data1.value.toLowerCase();

      idx=szoveg1.indexOf("egységek");
      if (idx==-1) return;
      idx=szoveg1.indexOf("mennyi");
      if (idx==-1) return;
      
      reset1s();      

      for (i=0; i<6; i++)
      {
        idx=find(szoveg1, egysegnev[document.f.kor1.value][i]);
        if (idx!=-1)
        {
          nev=egysegnev[kor1.value][i];
          if (!nev.length) return;
          idx+=nev.length;
          val=parseInt(token(szoveg1, idx, 1));
          document.f[fields1[i]].value=val;
        }
      }

      for (i=0; i<6; i++)
      {
        idx=find(szoveg1,egysegnev[kor1.value-1][i]);
        if (idx!=-1)
        {
          nev=egysegnev[kor1.value-1][i];
          if (!nev.length) return;
          idx+=nev.length;
          val=token(szoveg1, idx, 1);
          document.f[fields1r[i]].value=val;
        }
      }
    }}
    
    function parse6()
    { with (document.f) {
      var szoveg2=data2.value.toLowerCase();

      idx=szoveg2.indexOf("egységek");
      if (idx==-1) return;
      idx=szoveg2.indexOf("mennyi");
      if (idx==-1) return;
      
      reset2s();      
      
      for (i=0; i<6; i++)
      {
        nev=egysegnev[kor2.value][i];
        idx=find(szoveg2, nev);
//        idx=szoveg2.indexOf(nev);
        if (idx!=-1)
        {
          idx+=nev.length;
          val=parseInt(token(szoveg2, idx, 1))+parseInt(token(szoveg2, idx, 2));
          document.f[fields2[i]].value=val;
        }
      }

      for (i=0; i<6; i++)
      {
        nev=egysegnev[kor2.value-1][i];
        idx=find(szoveg2, nev);//szoveg2.indexOf(nev);
        if (idx!=-1)
        {
          idx+=nev.length;
          val=parseInt(token(szoveg2, idx, 1))+parseInt(token(szoveg2, idx, 2));
          document.f[fields2r[i]].value=val;
        }
      }
    }}


/*    nepek=new Array("szkíta", "római", "sumér", "kelta", "germán", 
              "egyiptomi", "görög", "föníciai",  "héber", "perzsa");*/

  
  function calcmvari()
  {
    mtbonus = new Array(-10, -10, 30, 10, -10, 0, -10, -20, 0, 0); 
    mvbonus = new Array(-10,   0, 30, 10, -10, 0,  10,  20, 0, 0);
   	
   	with (document.mvari) 
   	{
      dp1.value=terulet1.value*nehezseg1.value;
      szorzo=1.0;
   	  szorzo*=(100.0+mtbonus[nep1.value])/100;
   	  if (allam1.value==1) szorzo*=1.05;
   	  for (i=0; i<tudi1.value; i++) szorzo*=1.05;
   	  szorzo*=moral1.value/100;
   	  szorzo*=manna1.value/100;
   	  szorzo*=(100-deka1.value/2)/100;
   	  ap1.value=egyseg1.value*szorzo;
   	  esely1.value=(ap1.value/dp1.value-0.7)/0.30;
   	  if (esely1.value<0) esely1.value=0;
   	  if (esely1.value>0.99) esely1.value=0.99;
   	  felrakmin1.value=dp1.value*0.7/szorzo;
   	  felrakmax1.value=dp1.value/szorzo;
   	  fenttartmin1.value=dp1.value*0.4/szorzo;
   	  fenttartmax1.value=dp1.value*0.6/szorzo;
   	  
   	  ap1.value=parseInt(ap1.value);
   	  felrakmin1.value=parseInt(felrakmin1.value);
   	  felrakmax1.value=parseInt(felrakmax1.value);
   	  fenttartmin1.value=parseInt(fenttartmin1.value);
   	  fenttartmax1.value=parseInt(fenttartmax1.value);
   	}
  }
  
  function becsul()
  {
  	with (document.ebecslo) 
  	{
//    tavolsagbonusz1=(pont1.value*1.0/pont2.value-0.5)*2;
      pontarany=sajatpont.value*1.0/ellenpont.value;
	    tavolsagbonusz=(pontarany*1.0-0.5)*2;
      vv=parseInt(vserult1.value)+parseInt(vhalott1.value);
      vv/=1-becsloelhullas.value/100.0;
      vv/=tavolsagbonusz;
      S2=sajategyseg.value*sajategyseg.value;
      E2=vv*1/(sajategyseg.value/100*7-vv);
      if (E2>=0) bvedo.value=Math.sqrt(E2);
    }
  }
  
/*
     FILE ARCHIVED ON 05:51:38 Feb 18, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:48:38 Nov 01, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 45.102
  PetaboxLoader3.datanode: 84.551 (4)
  exclusion.robots.policy: 0.113
  LoadShardBlock: 51.022 (3)
  RedisCDXSource: 17.67
  captures_list: 80.566
  esindex: 0.011
  CDXLines.iter: 9.543 (3)
  load_resource: 141.096
  exclusion.robots: 0.123
*/