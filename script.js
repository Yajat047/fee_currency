

function populateCurrencies() {
  var currencyData = [
    // const countries = [
      {
          code: 'USD',
          name: 'United States Dollar',
          flag: '🇺🇸'
      },
      {
          code: 'EUR',
          name: 'Euro',
          flag: '🇪🇺'
      },
      {
          code: 'GBP',
          name: 'British Pound',
          flag: '🇬🇧'
      },
      {
          code: 'JPY',
          name: 'Japanese Yen',
          flag: '🇯🇵'
      },
      {
          code: 'CNY',
          name: 'Chinese Yuan',
          flag: '🇨🇳'
      },
      {
          code: 'AUD',
          name: 'Australian Dollar',
          flag: '🇦🇺'
      },
      {
          code: 'CAD',
          name: 'Canadian Dollar',
          flag: '🇨🇦'
      },
      {
          code: 'CHF',
          name: 'Swiss Franc',
          flag: '🇨🇭'
      },
      {
          code: 'HKD',
          name: 'Hong Kong Dollar',
          flag: '🇭🇰'
      },
      {
          code: 'NZD',
          name: 'New Zealand Dollar',
          flag: '🇳🇿'
      },
      {
          code: 'SEK',
          name: 'Swedish Krona',
          flag: '🇸🇪'
      },
      {
          code: 'KRW',
          name: 'South Korean Won',
          flag: '🇰🇷'
      },
      {
          code: 'SGD',
          name: 'Singapore Dollar',
          flag: '🇸🇬'
      },
      {
          code: 'NOK',
          name: 'Norwegian Krone',
          flag: '🇳🇴'
      },
      {
          code: 'MXN',
          name: 'Mexican Peso',
          flag: '🇲🇽'
      },
      {
          code: 'INR',
          name: 'Indian Rupee',
          flag: '🇮🇳'
      },
      {
          code: 'RUB',
          name: 'Russian Ruble',
          flag: '🇷🇺'
      },
      {
          code: 'ZAR',
          name: 'South African Rand',
          flag: '🇿🇦'
      },
      {
          code: 'BRL',
          name: 'Brazilian Real',
          flag: '🇧🇷'
      },
      {
          code: 'TRY',
          name: 'Turkish Lira',
          flag: '🇹🇷'
      },
      {
          code: 'TWD',
          name: 'New Taiwan Dollar',
          flag: '🇹🇼'
      },
      {
          code: 'DKK',
          name: 'Danish Krone',
          flag: '🇩🇰'
      },
      {
          code: 'THB',
          name: 'Thai Baht',
          flag: '🇹🇭'
      },
      {
          code: 'IDR',
          name: 'Indonesian Rupiah',
          flag: '🇮🇩'
      },
      {
          code: 'MYR',
          name: 'Malaysian Ringgit',
          flag: '🇲🇾'
      },
      {
          code: 'PHP',
          name: 'Philippine Peso',
          flag: '🇵🇭'
      },
      {
          code: 'CZK',
          name: 'Czech Koruna',
          flag: '🇨🇿'
      },
      {
          code: 'PLN',
          name: 'Polish Złoty',
          flag: '🇵🇱'
      },
      {
          code: 'HUF',
          name: 'Hungarian Forint',
          flag: '🇭🇺'
      },
      {
          code: 'ILS',
          name: 'Israeli New Shekel',
          flag: '🇮🇱'
      },
      {
          code: 'AED',
          name: 'United Arab Emirates Dirham',
          flag: '🇦🇪'
      },
      {
          code: 'COP',
          name: 'Colombian Peso',
          flag: '🇨🇴'
      },
      {
          code: 'SAR',
          name: 'Saudi Riyal',
          flag: '🇸🇦'
      },
      {
          code: 'EGP',
          name: 'Egyptian Pound',
          flag: '🇪🇬'
      },
      {
          code: 'ARS',
          name: 'Argentine Peso',
          flag: '🇦🇷'
      },
      {
          code: 'CLP',
          name: 'Chilean Peso',
          flag: '🇨🇱'
      },
      {
          code: 'PKR',
          name: 'Pakistani Rupee',
          flag: '🇵🇰'
      },
      {
          code: 'VND',
          name: 'Vietnamese Đồng',
          flag: '🇻🇳'
      },
      {
          code: 'UAH',
          name: 'Ukrainian Hryvnia',
          flag: '🇺🇦'
      },
      {
          code: 'IQD',
          name: 'Iraqi Dinar',
          flag: '🇮🇶'
      },
      {
          code: 'NGN',
          name: 'Nigerian Naira',
          flag: '🇳🇬'
      },
      {
          code: 'RON',
          name: 'Romanian Leu',
          flag: '🇷🇴'
      },
      {
          code: 'KES',
          name: 'Kenyan Shilling',
          flag: '🇰🇪'
      },
      {
          code: 'DZD',
          name: 'Algerian Dinar',
          flag: '🇩🇿'
      },
      {
          code: 'UGX',
          name: 'Ugandan Shilling',
          flag: '🇺🇬'
      },
      {
          code: 'BDT',
          name: 'Bangladeshi Taka',
          flag: '🇧🇩'
      },
      {
          code: 'MAD',
          name: 'Moroccan Dirham',
          flag: '🇲🇦'
      },
      {
          code: 'VND',
          name: 'Vietnamese Dong',
          flag: '🇻🇳'
      },
      {
          code: 'LBP',
          name: 'Lebanese Pound',
          flag: '🇱🇧'
      },
      {
          code: 'GHS',
          name: 'Ghanaian Cedi',
          flag: '🇬🇭'
      },
      {
          code: 'TZS',
          name: 'Tanzanian Shilling',
          flag: '🇹🇿'
      },
      {
          code: 'UGX',
          name: 'Ugandan Shilling',
          flag: '🇺🇬'
      },
      {
          code: 'MMK',
          name: 'Burmese Kyat',
          flag: '🇲🇲'
      },
      {
          code: 'AFN',
          name: 'Afghan Afghani',
          flag: '🇦🇫'
      },
      {
          code: 'XAF',
          name: 'Central African CFA Franc',
          flag: '🇨🇫'
      },
      {
          code: 'XOF',
          name: 'West African CFA Franc',
          flag: '🇹🇩'
      },
      {
          code: 'MZN',
          name: 'Mozambican Metical',
          flag: '🇲🇿'
      },
      {
          code: 'XPF',
          name: 'CFP Franc',
          flag: '🇵🇫'
      },
      {
          code: 'TND',
          name: 'Tunisian Dinar',
          flag: '🇹🇳'
      },
      {
          code: 'CRC',
          name: 'Costa Rican Colón',
          flag: '🇨🇷'
      },
      {
          code: 'PEN',
          name: 'Peruvian Sol',
          flag: '🇵🇪'
      },
      {
          code: 'UYU',
          name: 'Uruguayan Peso',
          flag: '🇺🇾'
      },
      {
          code: 'DOP',
          name: 'Dominican Peso',
          flag: '🇩🇴'
      },
      {
          code: 'HRK',
          name: 'Croatian Kuna',
          flag: '🇭🇷'
      },
      {
          code: 'GTQ',
          name: 'Guatemalan Quetzal',
          flag: '🇬🇹'
      },
      {
          code: 'HNL',
          name: 'Honduran Lempira',
          flag: '🇭🇳'
      },
      {
          code: 'ISK',
          name: 'Icelandic Króna',
          flag: '🇮🇸'
      },
      {
          code: 'JMD',
          name: 'Jamaican Dollar',
          flag: '🇯🇲'
      },
      {
          code: 'LKR',
          name: 'Sri Lankan Rupee',
          flag: '🇱🇰'
      },
      {
          code: 'MDL',
          name: 'Moldovan Leu',
          flag: '🇲🇩'
      },
      {
          code: 'MOP',
          name: 'Macanese Pataca',
          flag: '🇲🇴'
      },
      {
          code: 'MKD',
          name: 'Macedonian Denar',
          flag: '🇲🇰'
      },
      {
          code: 'NPR',
          name: 'Nepalese Rupee',
          flag: '🇳🇵'
      },
      {
          code: 'PAB',
          name: 'Panamanian Balboa',
          flag: '🇵🇦'
      },
      {
          code: 'BHD',
          name: 'Bahraini Dinar',
          flag: '🇧🇭'
      },
      {
          code: 'BYN',
          name: 'Belarusian Ruble',
          flag: '🇧🇾'
      },
      {
          code: 'BOB',
          name: 'Bolivian Boliviano',
          flag: '🇧🇴'
      },
      {
          code: 'BND',
          name: 'Brunei Dollar',
          flag: '🇧🇳'
      },
      {
          code: 'BWP',
          name: 'Botswana Pula',
          flag: '🇧🇼'
      },
      {
          code: 'BGN',
          name: 'Bulgarian Lev',
          flag: '🇧🇬'
      },
      {
          code: 'CDF',
          name: 'Congolese Franc',
          flag: '🇨🇩'
      },
      {
          code: 'ANG',
          name: 'Netherlands Antillean Guilder',
          flag: '🇦🇳'
      },
      {
          code: 'CUP',
          name: 'Cuban Peso',
          flag: '🇨🇺'
      },
      {
          code: 'DJF',
          name: 'Djiboutian Franc',
          flag: '🇩🇯'
      },
      {
          code: 'ERN',
          name: 'Eritrean Nakfa',
          flag: '🇪🇷'
      },
      {
          code: 'ETB',
          name: 'Ethiopian Birr',
          flag: '🇪🇹'
      },
      {
          code: 'FJD',
          name: 'Fijian Dollar',
          flag: '🇫🇯'
      },
      {
          code: 'GEL',
          name: 'Georgian Lari',
          flag: '🇬🇪'
      },
      {
          code: 'GYD',
          name: 'Guyanaese Dollar',
          flag: '🇬🇾'
      },
      {
          code: 'HTG',
          name: 'Haitian Gourde',
          flag: '🇭🇹'
      },
      {
          code: 'KHR',
          name: 'Cambodian Riel',
          flag: '🇰🇭'
      },
      {
          code: 'KWD',
          name: 'Kuwaiti Dinar',
          flag: '🇰🇼'
      },
      {
          code: 'KGS',
          name: 'Kyrgyzstani Som',
          flag: '🇰🇬'
      },
      {
          code: 'LAK',
          name: 'Lao Kip',
          flag: '🇱🇦'
      },
      {
          code: 'LSL',
          name: 'Lesotho Loti',
          flag: '🇱🇸'
      },
      {
          code: 'LRD',
          name: 'Liberian Dollar',
          flag: '🇱🇷'
      },
      {
          code: 'LYD',
          name: 'Libyan Dinar',
          flag: '🇱🇾'
      },
      {
          code: 'MGA',
          name: 'Malagasy Ariary',
          flag: '🇲🇬'
      },
      {
          code: 'MWK',
          name: 'Malawian Kwacha',
          flag: '🇲🇼'
      },
      {
          code: 'MVR',
          name: 'Maldivian Rufiyaa',
          flag: '🇲🇻'
      },
      {
          code: 'MRO',
          name: 'Mauritanian Ouguiya',
          flag: '🇲🇷'
      },
      {
          code: 'MUR',
          name: 'Mauritian Rupee',
          flag: '🇲🇺'
      },
      {
          code: 'MDL',
          name: 'Moldovan Leu',
          flag: '🇲🇩'
      },
      {
          code: 'MNT',
          name: 'Mongolian Tugrik',
          flag: '🇲🇳'
      },
      {
          code: 'MAD',
          name: 'Moroccan Dirham',
          flag: '🇲🇦'
      },
      {
          code: 'MZN',
          name: 'Mozambican Metical',
          flag: '🇲🇿'
      },
      {
          code: 'NAD',
          name: 'Namibian Dollar',
          flag: '🇳🇦'
      },
      {
          code: 'NIO',
          name: 'Nicaraguan Córdoba',
          flag: '🇳🇮'
      },
      {
          code: 'OMR',
          name: 'Omani Rial',
          flag: '🇴🇲'
      },
      {
          code: 'PGK',
          name: 'Papua New Guinean Kina',
          flag: '🇵🇬'
      },
      {
          code: 'PYG',
          name: 'Paraguayan Guarani',
          flag: '🇵🇾'
      },
      {
          code: 'QAR',
          name: 'Qatari Riyal',
          flag: '🇶🇦'
      },
      {
          code: 'RWF',
          name: 'Rwandan Franc',
          flag: '🇷🇼'
      },
      {
          code: 'WST',
          name: 'Samoan Tala',
          flag: '🇼🇸'
      },
      {
          code: 'STN',
          name: 'São Tomé and Príncipe Dobra',
          flag: '🇸🇹'
      },
      {
          code: 'RSD',
          name: 'Serbian Dinar',
          flag: '🇷🇸'
      },
      {
          code: 'SCR',
          name: 'Seychellois Rupee',
          flag: '🇸🇨'
      },
      {
          code: 'SLL',
          name: 'Sierra Leonean Leone',
          flag: '🇸🇱'
      },
      {
          code: 'SBD',
          name: 'Solomon Islands Dollar',
          flag: '🇸🇧'
      },
      {
          code: 'SOS',
          name: 'Somali Shilling',
          flag: '🇸🇴'
      },
      {
          code: 'SSP',
          name: 'South Sudanese Pound',
          flag: '🇸🇸'
      },
      {
          code: 'SDG',
          name: 'Sudanese Pound',
          flag: '🇸🇩'
      },
      {
          code: 'SRD',
          name: 'Surinamese Dollar',
          flag: '🇸🇷'
      },
      {
          code: 'TJS',
          name: 'Tajikistani Somoni',
          flag: '🇹🇯'
      },
      {
          code: 'TMT',
          name: 'Turkmenistani Manat',
          flag: '🇹🇲'
      },
      {
          code: 'TOP',
          name: 'Tongan Paʻanga',
          flag: '🇹🇴'
      },
      {
          code: 'TTD',
          name: 'Trinidad and Tobago Dollar',
          flag: '🇹🇹'
      },
      {
          code: 'TVD',
          name: 'Tuvaluan Dollar',
          flag: '🇹🇻'
      },
      {
          code: 'UGX',
          name: 'Ugandan Shilling',
          flag: '🇺🇬'
      },
      {
          code: 'UYU',
          name: 'Uruguayan Peso',
          flag: '🇺🇾'
      },
      {
          code: 'UZS',
          name: 'Uzbekistani Som',
          flag: '🇺🇿'
      },
      {
          code: 'VUV',
          name: 'Vanuatu Vatu',
          flag: '🇻🇺'
      },
      {
          code: 'YER',
          name: 'Yemeni Rial',
          flag: '🇾🇪'
      },
      {
          code: 'ZMW',
          name: 'Zambian Kwacha',
          flag: '🇿🇲'
      },
      {
          code: 'ZWL',
          name: 'Zimbabwean Dollar',
          flag: '🇿🇼'
      }
  ];

  const amountInput = document.getElementById('amount');

    amountInput.addEventListener('input', function () {
        
        // Limit decimal places to two
        const parts = this.value.split('.');
        if (parts.length > 1) {
            parts[1] = parts[1].slice(0, 2);
            this.value = parts.join('.');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && document.activeElement === amountInput) {
            e.preventDefault()
            document.getElementById('convertBtn').click();  
        }
    });
  var fromCurrencyDropdown = document.getElementById('fromCurrency');
  var toCurrencyDropdown = document.getElementById('toCurrency');

  currencyData.forEach(currency => {
      var option1 = document.createElement('option');
      option1.value = currency.code;
      option1.innerText = `${currency.flag} ${currency.code} - ${currency.name}`;
      fromCurrencyDropdown.appendChild(option1);

      var option2 = document.createElement('option');
      option2.value = currency.code;
      option2.innerText = `${currency.flag} ${currency.code} - ${currency.name}`;
      toCurrencyDropdown.appendChild(option2);
  });
  
}

document.addEventListener('DOMContentLoaded', function () {
  populateCurrencies();
  

  document.getElementById('convertBtn').addEventListener('click', function () {

      var fromCurrency = document.getElementById('fromCurrency').value;
      var toCurrency = document.getElementById('toCurrency').value;
      var amount = document.getElementById('amount').value;

      fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
          .then(response => response.json())
          .then(data => {
              var rate = data.rates[toCurrency];
              var convertedAmount = amount * rate;
              document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
          })
          .catch(error => {
              console.log(error);
              document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
          });
  });
});

