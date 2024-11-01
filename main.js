$(document).ready(function() {

  $('#curso').change(function() {
    var cursoSelecionado = $(this).val();
  
    $('#periodo-ads, #periodo-gestao, #periodo-engenharia').hide().prop('disabled', true);
    $('#select-matPrimeiroAds, #select-matSegundoAds, #select-matTerceiroAds, #select-matQuartoAds, #select-matQuintoAds, #select-matSextoAds').hide().prop('disabled', true);
    $('#select-matPrimeiroGestao, #select-matSegundoGestao, #select-matTerceiroGestao, #select-matQuartoGestao, #select-matQuintoGestao').hide().prop('disabled', true);
    $('#select-matPrimeiroEng, #select-matSegundoEng, #select-matTerceiroEng, #select-matQuartoEng, #select-matQuintoEng, #select-matSextoEng, #select-matSetimoEng, #select-matOitavoEng, #select-matNonoEng, #select-matDecimoEng').hide().prop('disabled', true);
  
    if (cursoSelecionado === 'ads') {
      $('#periodo-ads').show().prop('disabled', false);
      $('#select-matPrimeiroAds').show().prop('disabled', true);
      
      $('#periodo-ads').change(function() {
        var periodoSelecionado = $(this).val();

        $('#select-matPrimeiroAds, #select-matSegundoAds, #select-matTerceiroAds, #select-matQuartoAds, #select-matQuintoAds, #select-matSextoAds').hide().prop('disabled', true);
    
        if (periodoSelecionado === 'primeiro-ads') {
          $('#select-matPrimeiroAds').show().prop('disabled', false);
        } else if (periodoSelecionado === 'segundo-ads') {
          $('#select-matSegundoAds').show().prop('disabled', false);
        } else if (periodoSelecionado === 'terceiro-ads') {
          $('#select-matTerceiroAds').show().prop('disabled', false);
        } else if (periodoSelecionado === 'quarto-ads') {
          $('#select-matQuartoAds').show().prop('disabled', false);
        } else if (periodoSelecionado === 'quinto-ads') {
          $('#select-matQuintoAds').show().prop('disabled', false);
        } else if (periodoSelecionado === 'sexto-ads') {
          $('#select-matSextoAds').show().prop('disabled', false);
        }
      });
    } else if (cursoSelecionado === 'gestao') {
      $('#periodo-gestao').show().prop('disabled', false);
      $('#select-matPrimeiroAds').show().prop('disabled', true);
      
      
      $('#periodo-gestao').change(function() {
        var periodoSelecionado = $(this).val();

        $('#select-matPrimeiroAds').hide().prop('disabled', true);

        $('#select-matPrimeiroGestao, #select-matSegundoGestao, #select-matTerceiroGestao, #select-matQuartoGestao, #select-matQuintoGestao').hide().prop('disabled', true);

        if (periodoSelecionado === 'primeiro-gestao') {
          $('#select-matPrimeiroGestao').show().prop('disabled', false);
        } else if (periodoSelecionado === 'segundo-gestao') {
          $('#select-matSegundoGestao').show().prop('disabled', false);
        } else if (periodoSelecionado === 'terceiro-gestao') {
          $('#select-matTerceiroGestao').show().prop('disabled', false);
        } else if (periodoSelecionado === 'quarto-gestao') {
          $('#select-matQuartoGestao').show().prop('disabled', false);
        } else if (periodoSelecionado === 'quinto-gestao') {
          $('#select-matQuintoGestao').show().prop('disabled', false);
        }
      });

    } else if (cursoSelecionado === 'engenharia') {
      $('#periodo-engenharia').show().prop('disabled', false);
      $('#select-matPrimeiroAds').show().prop('disabled', true);
      
      $('#periodo-engenharia').change(function() {
        var periodoSelecionado = $(this).val();

        $('#select-matPrimeiroAds').hide().prop('disabled', true);

        $('#select-matPrimeiroEng, #select-matSegundoEng, #select-matTerceiroEng, #select-matQuartoEng, #select-matQuintoEng, #select-matSextoEng, #select-matSetimoEng, #select-matOitavoEng, #select-matNonoEng, #select-matDecimoEng').hide().prop('disabled', false);

        if (periodoSelecionado === 'primeiro-engenharia') {
          $('#select-matPrimeiroEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'segundo-engenharia') {
          $('#select-matSegundoEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'terceiro-engenharia') {
          $('#select-matTerceiroEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'quarto-engenharia') {
          $('#select-matQuartoEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'quinto-engenharia') {
          $('#select-matQuintoEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'sexto-engenharia') {
          $('#select-matSextoEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'setimo-engenharia') {
          $('#select-matSetimoEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'oitavo-engenharia') {
          $('#select-matOitavoEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'nono-engenharia') {
          $('#select-matNonoEng').show().prop('disabled', false);
        } else if (periodoSelecionado === 'sexto-engenharia') {
          $('#select-matDecimoEng').show().prop('disabled', false);
        }
      }); 
    }
  });
});
