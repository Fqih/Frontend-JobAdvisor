"use client";
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import YearSelector from '@/app/components/yearSelector';
import axios from 'axios';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const fetchData = async (year, perPage) => {
  try {
    const response = await axios.get('https://aic-klm-2024.df.r.appspot.com/data', {
      params: {
        year,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const getTopRoles = (data, topN = 5) => {
  const roleCount = {};

  data.forEach(item => {
    const month = new Date(item.JobPosting).getMonth();
    item.Role.split(';').forEach(role => {
      if (!roleCount[role]) roleCount[role] = Array(12).fill(0);
      roleCount[role][month] += 1;
    });
  });

  const sortedRoles = Object.entries(roleCount)
    .map(([role, counts]) => ({
      role,
      counts,
      total: counts.reduce((sum, count) => sum + count, 0),
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, topN);

  return sortedRoles;
};

const lineColors = [
  'rgba(75,192,192,1)',
  'rgba(255,99,132,1)',
  'rgba(255,159,64,1)',
  'rgba(153,102,255,1)',
  'rgba(255,205,86,1)',
];

const TrendChart = () => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState('2022');
  const [perPage, setPerPage] = useState(8000);
  const [loading, setLoading] = useState(true);
  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
          },
          boxWidth: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: {
        right: 50,
      },
    },
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const fetchedData = await fetchData(year, perPage);
      setData(fetchedData);
      setLoading(false);
    };

    loadData();
  }, [year, perPage]);

  const topRoles = getTopRoles(data, 5);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: topRoles.map((roleData, index) => ({
      label: roleData.role,
      data: roleData.counts,
      borderColor: lineColors[index % lineColors.length],
      backgroundColor: lineColors[index % lineColors.length].replace('1)', '0.2)'),
      fill: true,
    })),
  };

  useEffect(() => {
    const handleResize = () => {
      const legendPosition = window.innerWidth <= 768 ? 'bottom' : 'right';
      setChartOptions(prevOptions => ({
        ...prevOptions,
        plugins: {
          ...prevOptions.plugins,
          legend: {
            ...prevOptions.plugins.legend,
            position: legendPosition,
          },
        },
      }));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-gray-900 text-center pt-10" id="trend">
      <h1 className="text-2xl font-bold mb-6 text-gray-100">
        Top 5 Roles Paling Dicari di tahun {year}
      </h1>

      <YearSelector
        selectedYear={year}
        onYearChange={setYear}
        years={['2021', '2022', '2023', '2024']}
      />

      <div className="mx-auto max-w-4xl p-4 h-96">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-transparent border-t-4 rounded-full animate-spin"></div>
          </div>
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export default TrendChart;