$(document).ready(function() { // Aguarda o DOM estar totalmente carregado para executar o código.

  // Evento disparado quando o valor do select com id 'curso' muda.
  $('#curso').change(function() {
    var cursoSelecionado = $(this).val(); // Obtém o valor do curso selecionado.

    // Oculta e desabilita todos os elementos relacionados aos períodos e disciplinas.
    $('#periodo-ads, #periodo-gestao, #periodo-engenharia').hide().prop('disabled', true);
    $('#select-matPrimeiroAds, #select-matSegundoAds, #select-matTerceiroAds, #select-matQuartoAds, #select-matQuintoAds, #select-matSextoAds').hide().prop('disabled', true);
    $('#select-matPrimeiroGestao, #select-matSegundoGestao, #select-matTerceiroGestao, #select-matQuartoGestao, #select-matQuintoGestao').hide().prop('disabled', true);
    $('#select-matPrimeiroEng, #select-matSegundoEng, #select-matTerceiroEng, #select-matQuartoEng, #select-matQuintoEng, #select-matSextoEng, #select-matSetimoEng, #select-matOitavoEng, #select-matNonoEng, #select-matDecimoEng').hide().prop('disabled', true);

    // Verifica qual curso foi selecionado e exibe o período correspondente.
    if (cursoSelecionado === 'ads') { // Caso o curso seja ADS
      $('#periodo-ads').show().prop('disabled', false); // Exibe e habilita o select do período de ADS.
     
      // Evento disparado quando o período de ADS é selecionado.
      $('#periodo-ads').change(function() {
        var periodoSelecionado = $(this).val(); // Obtém o período selecionado.

        // Oculta e desabilita todas as disciplinas de ADS.
        $('#select-matPrimeiroAds, #select-matSegundoAds, #select-matTerceiroAds, #select-matQuartoAds, #select-matQuintoAds, #select-matSextoAds').hide().prop('disabled', true);

        // Exibe as disciplinas correspondentes ao período selecionado.
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
    } else if (cursoSelecionado === 'gestao') { // Caso o curso seja Gestão
      $('#periodo-gestao').show().prop('disabled', false);
      
      // Evento disparado quando o período de Gestão é selecionado.
      $('#periodo-gestao').change(function() {
        var periodoSelecionado = $(this).val(); // Obtém o período selecionado.

        // Oculta e desabilita todas as disciplinas de Gestão.
        $('#select-matPrimeiroGestao, #select-matSegundoGestao, #select-matTerceiroGestao, #select-matQuartoGestao, #select-matQuintoGestao').hide().prop('disabled', true);

        // Exibe as disciplinas correspondentes ao período selecionado.
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

    } else if (cursoSelecionado === 'engenharia') { // Caso o curso seja Engenharia
      $('#periodo-engenharia').show().prop('disabled', false);
      
      // Evento disparado quando o período de Engenharia é selecionado.
      $('#periodo-engenharia').change(function() {
        var periodoSelecionado = $(this).val(); // Obtém o período selecionado.

        // Oculta e desabilita todas as disciplinas de Engenharia.
        $('#select-matPrimeiroEng, #select-matSegundoEng, #select-matTerceiroEng, #select-matQuartoEng, #select-matQuintoEng, #select-matSextoEng, #select-matSetimoEng, #select-matOitavoEng, #select-matNonoEng, #select-matDecimoEng').hide().prop('disabled', true);

        // Exibe as disciplinas correspondentes ao período selecionado.
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
        } else if (periodoSelecionado === 'decimo-engenharia') {
          $('#select-matDecimoEng').show().prop('disabled', false);
        }
      });
    }
  });
});
