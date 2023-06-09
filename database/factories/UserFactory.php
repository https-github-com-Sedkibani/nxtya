<?php

namespace App\Nova\Metrics;

use App\Models\Photo;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Value;
use Laravel\Nova\Metrics\ValueResult;

class PhotosWaiting extends Value
{

  public function result($value)
  {
    $result = Photo::where('status', '=', 'waiting')->count();
    return new ValueResult($result);
  }

  /**
   * Calculate the value of the metric.
   *
   * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
   * @return mixed
   */
  public function calculate(NovaRequest $request)
  {
    return $this->count($request, Photo::where('status', '=', 'waiting'));
  }

  /**
   * Get the ranges available for the metric.
   *
   * @return array
   */
  public function ranges()
  {
    return [
      30 => __('30 Days'),
      60 => __('60 Days'),
      365 => __('365 Days'),
      'TODAY' => __('Today'),
      'MTD' => __('Month To Date'),
      'QTD' => __('Quarter To Date'),
      'YTD' => __('Year To Date'),
    ];
  }

  /**
   * Determine for how many minutes the metric should be cached.
   *
   * @return  \DateTimeInterface|\DateInterval|float|i