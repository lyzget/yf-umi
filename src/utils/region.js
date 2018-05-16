const region = [
  {
    value: '1',
    label: '一期',
    children: [
      {
        value: '',
        label: '全部'
      },
      {
        value: '1',
        label: '一层',
        children: [
          { value: 'A', label: 'A区' },
          { value: 'B', label: 'B区' },
          { value: 'C', label: 'C区' }
        ]
      },
      {
        value: '2',
        label: '二层',
        children: [
          { value: 'A', label: 'A区' },
          { value: 'B', label: 'B区' },
          { value: 'C', label: 'C区' }
        ]
      },
      {
        value: '3',
        label: '三层',
        children: [
          { value: 'A', label: 'A区' },
          { value: 'B', label: 'B区' },
          { value: 'C', label: 'C区' }
        ]
      },
      {
        value: 'B',
        label: '负一层',
        children: [
          { value: 'A', label: 'A区' },
          { value: 'B', label: 'B区' },
          { value: 'C', label: 'C区' },
          { value: 'D', label: 'D区' },
          { value: 'S', label: '南门' },
          { value: 'N', label: '北门' }
        ]
      },
      {
        value: 'D',
        label: '写字楼'
      }
    ]
  },
  {
    value: '2',
    label: '二期',
    children: [
      {
        value: '',
        label: '全部'
      },
      {
        value: '1',
        label: '一层',
        children: [
          { value: 'A', label: 'A区' },
          { value: 'B', label: 'B区' },
          { value: 'C', label: 'C区' }
        ]
      },
      {
        value: '2',
        label: '二层',
        children: [{ value: 'A', label: 'A区' }, { value: 'B', label: 'B区' }]
      },
      {
        value: '3',
        label: '三层',
        children: [{ value: 'A', label: 'A区' }, { value: 'B', label: 'B区' }]
      },
      {
        value: '4',
        label: '四层',
        children: [{ value: 'A', label: 'A区' }, { value: 'B', label: 'B区' }]
      },
      {
        value: 'D',
        label: '写字楼'
      }
    ]
  }
];

export function getRegionData() {
  return region;
}

export function fixRegionCode(v) {
  // console.log('v =', v)
  if (v instanceof Array) {
    // 数组，是ui产生的值
    // console.log('====', ['1', '2', 'A'].join().replace(/\,/g, ''))
    return v.join();
  } else if (typeof v === 'string') {
    return v.split(',');
  }
  return v;
}

export function showRegionName(r, level) {
  // const levelName = ['期', '层', '区']
  let v = r;
  if (typeof v === 'string') {
    v = v.split(',');
  }
  return `${v[0]}期${v[1] === 'B' ? '-1' : v[1]}层${v[2]}区`;
}

export function findCodeByName(name, spread) {
  if (name === '二期写字楼') {
    return '2,D';
  } else if (name === 'D区写字楼') {
    return '1,D';
  } else {
    const names = name.split(spread || '/');

    const item1 = this.region.find(e => `${e.label}` === `${names[0]}`);

    const item2 = item1.children.find(e => `${e.label}` === `${names[1]}`);

    const item3 = item2.children.find(e => `${e.label}` === `${names[2]}`);
    return `${item1.value},${item2.value},${item3.value}`;
  }
}
// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }
//
// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }
