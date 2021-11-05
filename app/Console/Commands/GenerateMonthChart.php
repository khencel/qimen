<?php

namespace App\Console\Commands;

use App\Repository\MonthChart\GenerateChart as RepositoryGenerateMonthChart;
use Illuminate\Console\Command;

class GenerateMonthChart extends Command
{
    public $repositoryGenerateMonthChart;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:month';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(RepositoryGenerateMonthChart $repositoryGenerateMonthChart)
    {
        parent::__construct();
        $this->repositoryGenerateMonthChart = $repositoryGenerateMonthChart;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        echo $this->repositoryGenerateMonthChart->generateMonth();
    }
}
