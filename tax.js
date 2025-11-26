document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let basicSalary = parseFloat(document.getElementById('basic').value);
    let benefits = parseFloat(document.getElementById('benefits').value);
    function getgross(basic, benefits) {
        return basic + benefits;
    }
    let gross=getgross(basicSalary, benefits)
    document.getElementById('gross').innerHTML=gross;

    function getnhif(gross) {
        let nhif = 0;
        if (gross <= 5999) {
            nhif = 150;
        }
        else if (gross <= 7999) {
            nhif = 300;
        }
        else if (gross <= 11999) {
            nhif = 400;
        }
        else if (gross <= 14999) {
            nhif = 500;
        }
        else if (gross <= 19999) {
            nhif = 600;
        }
        else if (gross <= 24999) {
            nhif = 750;
        }
        else if (gross <= 29999) {
            nhif = 850;
        }
        else if (gross <= 34999) {
            nhif = 900;
        }
        else if (gross <= 39999) {
            nhif = 950;
        }
        else if (gross <= 44999) {
            nhif = 1000;
        }
        else if (gross <= 49999) {
            nhif = 1100;
        }
        else if (gross <= 59999) {
            nhif = 1200;
        }
        else if (gross <= 69999) {  
            nhif = 1300;
        }
        else if (gross <= 79999) {
            nhif = 1400;
        }
        else if (gross <= 89999) {
            nhif = 1500;
        }
        else if (gross <= 99999) {
            nhif = 1600;
        }
        else {
            nhif = 1700;
        }
        return nhif;
    }
    let nhif=getnhif(gross);
    document.getElementById('nhif').innerHTML=nhif;

    
    function getnssf(gross) {
        const tierILimit = 7000;  
        const tierIILimit = 36000; 
        const rate = 0.06;         
        
        let nssf = 0;
        
        
        if (gross > tierILimit) {
            nssf = tierILimit * rate;
        } else {
            nssf = gross * rate;
        }
        
        
        if (gross > tierILimit) {
            const tierIIContribution = Math.min(gross, tierIILimit) - tierILimit;
            nssf += tierIIContribution * rate;
        }
        
        return nssf;
    }
    let nssf=getnssf(gross);
    document.getElementById('nssf').innerHTML=nssf;

    function getnhdf(gross) {
        return gross * 0.01;
    }
    let nhdf=getnhdf(gross);
    document.getElementById('nhdf').innerHTML=nhdf;
    function gettaxable(gross, nhif, nssf, nhdf) {
        return gross - (nhif + nssf + nhdf);
    }
    let taxable=gettaxable(gross, nhif, nssf, nhdf);
    document.getElementById('taxable').innerHTML=taxable;
    function getpaye(taxable) {
        let paye = 0;
        if (taxable <= 24000) {
            paye = taxable * 0.1;
        }
        else if (taxable <= 32333) {
            paye = (24000 * 0.1) + ((taxable - 24000) * 0.25);
        }
        else {
            paye = (24000 * 0.1) + (8333 * 0.25) + ((taxable - 32333) * 0.3);
        }
        return paye;
    }
    let paye=getpaye(taxable);
    document.getElementById('paye').innerHTML=paye;
    function getnet(gross, nhif, nssf, nhdf, paye) {
        return gross - (nhif + nssf + nhdf + paye);
    }
    let net=getnet(gross, nhif, nssf, nhdf, paye);
    document.getElementById('net').innerHTML=net;
});
   


