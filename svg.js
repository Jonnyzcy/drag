
window.onload = function () {
  var data = [{
    item: '事例一',
    count: 40,
    percent: 0.4
  }, {
    item: '事例二',
    count: 21,
    percent: 0.21
  }, {
    item: '事例三',
    count: 17,
    percent: 0.17
  }, {
    item: '事例四',
    count: 13,
    percent: 0.13
  }, {
    item: '事例五',
    count: 9,
    percent: 0.09
  }];

  var chart = new G2.Chart({
    container: document.getElementById('mountNode'),
    forceFit: true,
    height: document.getElementById('mountNode').innerHeight
  });

  chart.source(data, {
    percent: {
      formatter: function formatter(val) {
        val = val * 100 + '%';
        return val;
      }
    }
  });

  chart.coord('theta');
  chart.tooltip({
    showTitle: false
  });

  chart.intervalStack().position('percent').color('item').label('percent', {
    offset: -40,
    // autoRotate: false,
    textStyle: {
      textAlign: 'center',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  }).tooltip('item*percent', function (item, percent) {
    percent = percent * 100 + '%';
    return {
      name: item,
      value: percent
    };
  }).style({
    lineWidth: 1,
    stroke: '#fff'
  });
  chart.render();
}

