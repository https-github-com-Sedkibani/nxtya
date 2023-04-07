<?php

namespace App\Nova;

use App\Nova\Actions\ExportUsers;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Gravatar;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Maatwebsite\LaravelNovaExcel\Actions\DownloadExcel;

class User extends Resource
{
  /**
   * The model the resource corresponds to.
   *
   * @var string
   */
  public static $model = \App\Models\User::class;

  /**
   * The single value that should be used to represent the resource when being displayed.
   *
   * @var string
   */
  public static $title = 'name';

  /**
   * The columns that should be searched.
   *
   * @var array
   */
  public static $search = [
    'id', 'name', 'email',
  ];

  /**
   * Get the fields displayed by the resource.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function fields(Request $request)
  {
    return [
      ID::make()->sortable(),

      Text::make('Name')
        ->sortable()
        ->rules('required', 'max:255'),

      Text::make('Email')
        ->sortable()
        ->rules('required', 'email', 'max:254')
        ->creationRules('unique:users,email')
        ->updateRules('unique:users,email,{{resourceId}}'),
      Text::make('Phone'),
      Text::make('Gouvernorat','zone'),
      Password::make('Password')
        ->onlyOnForms()
        ->creationRules('required', 'string', 'min:8')
        ->updateRules('nullable', 'string', 'min:8'),
      HasMany::make('Photos', 'photos', 'App\Nova\Photo'),
    ];
  }

  /**
   * Get the cards available for the request.
   *
   * @param  \Illuminate\Http\Request  $request
